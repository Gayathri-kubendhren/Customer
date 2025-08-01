import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', stock_quantity: '', description: '', image: null });
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/products`, {
        params: { page, sort, search }
      });
      setProducts(res.data.products || res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, sort, search]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    try {
      if (editingProduct) {
        await axios.put(`http://localhost:4000/api/products/${editingProduct._id}`, formData);
      } else {
        await axios.post(`http://localhost:4000/api/products`, formData);
      }
      fetchProducts();
      setForm({ name: '', price: '', stock_quantity: '', description: '', image: null });
      setEditingProduct(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      stock_quantity: product.stock_quantity,
      description: product.description,
      image: null
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this product?')) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${id}`);
        fetchProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow-md p-6 rounded-xl">
        <input name="name" value={form.name} onChange={handleInputChange} placeholder="Product Name" className="border p-3 rounded-md" required />
        <input name="price" value={form.price} onChange={handleInputChange} type="number" placeholder="Price (₹)" className="border p-3 rounded-md" required />
        <input name="stock_quantity" value={form.stock_quantity} onChange={handleInputChange} type="number" placeholder="Stock Quantity" className="border p-3 rounded-md" required />
        <input name="image" onChange={handleInputChange} type="file" accept="image/*" className="border p-3 rounded-md " />
        <textarea name="description" value={form.description} onChange={handleInputChange} placeholder="Product Description" className="md:col-span-2 border p-3 rounded-md" rows="3" />
        <button type="submit" className="md:col-span-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
        <input
          type="text"
          placeholder="🔍 Search by product name..."
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/2"
        />
        <select onChange={(e) => setSort(e.target.value)} className="border px-4 py-2 rounded w-full md:w-1/4">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock_quantity">Stock</option>
        </select>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded-md shadow">
          <thead>
            <tr className="bg-pink-100 text-left text-sm text-gray-700">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Stock</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={p._id} className="text-sm text-gray-800 hover:bg-pink-50 transition">
                <td className="p-3 border">{idx + 1}</td>
                <td className="p-3 border">{p.name}</td>
                <td className="p-3 border">₹{p.price}</td>
                <td className="p-3 border">{p.stock_quantity}</td>
                <td className="p-3 border space-x-2">
                  <button onClick={() => handleEdit(p)} className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(p._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
        >
          ⬅ Prev
        </button>
        <span className="text-sm">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-gray-200 px-4 py-1 rounded"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default AdminManageProducts;
