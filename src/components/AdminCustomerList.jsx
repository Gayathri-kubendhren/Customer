import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tempPassword, setTempPassword] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get('http://localhost:4000/api/customers')
      .then(res => setCustomers(res.data))
      .catch(err => console.error('Error fetching customers:', err));
  };

  const handleResetPassword = () => {
    const temp = Math.random().toString(36).slice(-8);
    setTempPassword(temp);
    alert(`Temporary password for ${selected.email}: ${temp}`);
  };

  const handleImpersonate = async (customerId) => {
  try {
    const response = await axios.post('http://localhost:4000/api/impersonate', { customerId });

    const token = response.data.token;
    localStorage.setItem('token', token);
    localStorage.setItem('impersonating', 'true');

    window.location.href = '/'; // Redirect to Customer Portal
  } catch (error) {
    console.error('Impersonation failed', error);
    alert('Failed to impersonate customer');
  }
};


  const handleBlockToggle = (customer) => {
    const updatedStatus = customer.status === 'Active' ? 'Blocked' : 'Active';
    axios.put(`http://localhost:4000/api/customers/${customer._id}`, { status: updatedStatus })
      .then(() => fetchCustomers())
      .catch(err => alert('Failed to update status.'));
  };

  

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selected.email}?`)) {
      axios
        .delete(`http://localhost:4000/api/customers/${selected._id}`)
        .then(() => {
          setCustomers(prev => prev.filter(c => c._id !== selected._id));
          setSelected(null);
        })
        .catch(() => alert('Failed to delete customer. Please try again.'));
    }
  };

  const filtered = customers.filter(c => {
    const name = `${c.first_name || ''}${c.last_name || ''}${c.email || ''}`.toLowerCase();
    const matchSearch = name.includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>

      {/* 🔍 Search & Filter */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border px-3 py-1 rounded w-1/3"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option>All</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>
      </div>

      {/* 📋 Customer Table */}
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={c._id} className="text-center border-t">
              <td>{i + 1}</td>
              <td>{c.first_name} {c.last_name}</td>
              <td>{c.email}</td>
              <td>{c.status}</td>
              <td className="space-x-2">
                <button className="text-blue-600 underline" onClick={() => { setSelected(c); setTempPassword(''); }}>View</button>
                <button
                  className={`underline ${c.status === 'Blocked' ? 'text-green-600' : 'text-red-600'}`}
                  onClick={() => handleBlockToggle(c)}
                >
                  {c.status === 'Active' ? 'Block' : 'Unblock'}
                </button>
                <button
                  className="text-purple-600 underline"
                  onClick={() => handleImpersonate(c)}
                  disabled={c.status === 'Blocked'}
                >
                  Impersonate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔍 Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded max-w-md w-full shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setSelected(null)}>✖</button>
            <h3 className="text-xl font-bold mb-4">Customer Profile</h3>
            <p><strong>First Name:</strong> {selected.first_name}</p>
            <p><strong>Last Name:</strong> {selected.last_name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Status:</strong> {selected.status}</p>

            {tempPassword && (
              <p className="text-sm text-red-500 mt-2">
                Temporary Password: <code>{tempPassword}</code>
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button onClick={handleResetPassword} className="bg-yellow-500 text-white px-3 py-1 rounded">Reset Password</button>
              <button
                onClick={() => handleBlockToggle(selected)}
                className="bg-red-600 text-white px-3 py-1 rounded"
                disabled={selected.status === 'Blocked'}
              >
                Block
              </button>
              <button
                onClick={() => handleImpersonate(selected)}
                className="bg-purple-600 text-white px-3 py-1 rounded"
                disabled={selected.status === 'Blocked'}
              >
                Impersonate
              </button>
              <button onClick={handleDelete} className="bg-gray-800 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCustomerList;
