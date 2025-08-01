import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState(120);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(300000);
  const [orderStats, setOrderStats] = useState([]);
  const [statusStats, setStatusStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await axios.get('http://localhost:4000/api/products');
        const productLength = productRes.data.totalCount ?? productRes.data.products?.length ?? 0;
        setProductCount(120 + productLength);

        const orderRes = await axios.get('http://localhost:4000/api/orders');
        const orders = orderRes.data;
        setOrderCount(orders.length);
        setRecentOrders(orders.slice(-5).reverse());

        const revenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
        setTotalRevenue(100000 + revenue);

        // 📊 Process for Bar Chart: Orders per day
        const dailyStats = {};
        const statusCount = { Delivered: 0, Pending: 0, Cancelled: 0 };

        orders.forEach((order) => {
          const date = new Date(order.createdAt).toLocaleDateString();
          dailyStats[date] = (dailyStats[date] || 0) + 1;

          const status = order.status || 'Pending';
          if (statusCount[status] !== undefined) {
            statusCount[status]++;
          }
        });

        const barData = Object.entries(statusCount).map(([status, count]) => ({
          status,
          count
        }));
        setOrderStats(barData); // reuse for bar chart

        const pieData = Object.entries(statusCount).map(([status, count]) => ({
          name: status,
          value: count
        }));
        setStatusStats(pieData);

        const customerRes = await axios.get('http://localhost:4000/api/customers');
        setCustomerCount(customerRes.data.length);
      } catch (err) {
        console.error('Error loading dashboard data:', err);
      }
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: 'Total Products',
      icon: <FaBoxOpen size={28} />,
      count: productCount,
      bg: 'bg-blue-100',
    },
    {
      title: 'Total Orders',
      icon: <FaShoppingCart size={28} />,
      count: orderCount,
      bg: 'bg-green-100',
    },
    {
      title: 'Total Customers',
      icon: <FaUsers size={28} />,
      count: customerCount,
      bg: 'bg-yellow-100',
    },
    {
      title: 'Total Revenue',
      icon: <FaRupeeSign size={28} />,
      count: `₹${totalRevenue.toLocaleString()}`,
      bg: 'bg-pink-100',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 ${card.bg}`}
          >
            <div className="flex items-center space-x-4">
              {card.icon}
              <div>
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="text-2xl">{card.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Bar Chart */}


        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">📌 Order Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusStats}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {statusStats.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Orders by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderStats}>
              <XAxis dataKey="status" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#E71665" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl p-6 shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">🛒 Recent 5 Orders</h2>
        {recentOrders.length > 0 ? (
          <ul className="space-y-2 text-gray-700">
            {recentOrders.map((order, idx) => (
              <li key={idx} className="border-b pb-2">
                <div><strong>Order ID:</strong> {order._id}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent orders.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
