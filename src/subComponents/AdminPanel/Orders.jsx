import React, { useState } from 'react';

const Orders = () => {
  // Sample data for orders
  const initialOrders = [
    { id: 1, customer: 'John Doe', email: 'john@example.com', total: 75.99, status: 'Pending', date: '2025-01-01' },
    { id: 2, customer: 'Jane Smith', email: 'jane@example.com', total: 120.50, status: 'Shipped', date: '2025-01-02' },
    { id: 3, customer: 'Mark Johnson', email: 'mark@example.com', total: 30.00, status: 'Completed', date: '2025-01-03' },
    { id: 4, customer: 'Emily Davis', email: 'emily@example.com', total: 85.75, status: 'Cancelled', date: '2025-01-04' }
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const handleStatusChange = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: status } : order
    );
    setOrders(updatedOrders);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setOrderStatus(order.status);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'amount') {
      return b.total - a.total;
    } else {
      return a.status.localeCompare(b.status);
    }
  });

  return (
    <div className="p-8 bg-gray-100">
      {/* Search & Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search orders..."
            className="p-3 border border-gray-300 rounded-lg w-64"
          />
          <select
            value={filterStatus}
            onChange={handleFilterChange}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Filter by Status</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-200 text-gray-600 uppercase">
            <tr>
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Total</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sortedOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">
                  <a
                    href="#"
                    onClick={() => handleViewOrder(order)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    #{order.id}
                  </a>
                </td>
                <td className="py-3 px-6">{order.customer}</td>
                <td className="py-3 px-6">{order.email}</td>
                <td className="py-3 px-6">{order.date}</td>
                <td className="py-3 px-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Pending'
                        ? 'bg-yellow-500 text-white'
                        : order.status === 'Shipped'
                        ? 'bg-blue-500 text-white'
                        : order.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6">${order.total.toFixed(2)}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleStatusChange(order.id, 'Shipped')}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Mark as Shipped
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Order #{selectedOrder.id} - Details</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-600"><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p className="text-lg text-gray-600"><strong>Email:</strong> {selectedOrder.email}</p>
              <p className="text-lg text-gray-600"><strong>Order Date:</strong> {selectedOrder.date}</p>
              <p className="text-lg text-gray-600"><strong>Order Status:</strong> {selectedOrder.status}</p>
              <p className="text-lg text-gray-600"><strong>Total Amount:</strong> ${selectedOrder.total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={() => handleStatusChange(selectedOrder.id, orderStatus)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
