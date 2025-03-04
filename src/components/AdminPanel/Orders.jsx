import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://lianalandingback.onrender.com/api/orders/orders'); // Check the URL
        console.log("OrderPage response", response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON");
        }

        const data = await response.json();
        setOrders(data); // Assuming the response is an array of orders
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
        console.error("Error fetching orders:", err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

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

  // Ensure orders is an array before calling filter
  const filteredOrders = Array.isArray(orders)
    ? orders.filter(
        (order) =>
          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
      {/* Loading or Error handling */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {/* Search and Filter Section */}
      <div className="flex mt-5 justify-between items-center mb-6">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Поиск заказов..."
            className="p-3 border bg-white text-black border-gray-300 rounded-lg w-64"
          />
          <select
            value={filterStatus}
            onChange={handleFilterChange}
            className="p-3 border bg-white text-black border-gray-300 rounded-lg"
          >
            <option value="">Фильтровать по статусу</option>
            <option value="Pending">Ожидает</option>
            <option value="Shipped">Отправлен</option>
            <option value="Completed">Завершено</option>
            <option value="Cancelled">Отменено</option>
          </select>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="p-3 border bg-white text-black border-gray-300 rounded-lg"
          >
            <option value="date">Сортировать по дате</option>
            <option value="amount">Сортировать по сумме</option>
            <option value="status">Сортировать по статусу</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-200 text-gray-600 uppercase">
            <tr>
              <th className="py-3 px-6 text-left">ID заказа</th>
              <th className="py-3 px-6 text-left">Клиент</th>
              <th className="py-3 px-6 text-left">Электронная почта</th>
              <th className="py-3 px-6 text-left">Дата</th>
              <th className="py-3 px-6 text-left">Статус</th>
              <th className="py-3 px-6 text-left">Сумма</th>
              <th className="py-3 px-6 text-center">Действия</th>
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
                    Отметить как отправленный
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal with Order Details */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Заказ #{selectedOrder.id} - Детали</h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-600"><strong>Клиент:</strong> {selectedOrder.customer}</p>
              <p className="text-lg text-gray-600"><strong>Электронная почта:</strong> {selectedOrder.email}</p>
              <p className="text-lg text-gray-600"><strong>Дата заказа:</strong> {selectedOrder.date}</p>
              <p className="text-lg text-gray-600"><strong>Статус заказа:</strong> {selectedOrder.status}</p>
              <p className="text-lg text-gray-600"><strong>Общая сумма:</strong> ${selectedOrder.total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Закрыть
              </button>
              <button
                onClick={() => handleStatusChange(selectedOrder.id, orderStatus)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
