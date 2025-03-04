import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaEnvelope,
  FaTrash,
  FaEye,
  FaDownload,
  FaUpload,
  FaMedal,
  FaTimes,
} from 'react-icons/fa';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedEmailId, setExpandedEmailId] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://lianalandingback.onrender.com/api/clients/clients'); // Adjust URL as needed
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data); // Set customers from the response
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);



  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleEmail = (id) => {
    setExpandedEmailId(expandedEmailId === id ? null : id);
  };

  const truncateEmail = (email) => {
    const [localPart, domain] = email.split('@');
    return `${localPart.slice(0, 5)}...@${domain}`;
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(date).toLocaleDateString('ru-RU', options);
  };

  const getLoyaltySymbol = (status) => {
    switch (status) {
      case 'Золото':
        return <FaMedal className="text-yellow-500" title="Золото" />;
      case 'Серебро':
        return <FaMedal className="text-gray-400" title="Серебро" />;
      case 'Бронза':
        return <FaMedal className="text-orange-500" title="Бронза" />;
      default:
        return null;
    }
  };

  const handleViewInfo = (customer) => {
    setSelectedCustomer(customer);
    setShowInfoModal(true);
  };

  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setCustomers(customers.filter((customer) => customer.id !== selectedCustomer.id));
    setShowDeleteModal(false);
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-semibold">Клиенты</h1>
        <div className="flex space-x-4">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Фильтры
          </button>
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <FaDownload className="mr-2" /> Экспорт
          </button>
          <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            <FaUpload className="mr-2" /> Импорт
          </button>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaSearch className="mr-2 text-gray-600" />
        <input
          type="text"
          placeholder="Поиск по имени или email"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow bg-white text-black p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-700 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Имя</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Телефон</th>
              <th className="p-3 border-b">Дата рег.</th>
              <th className="p-3 border-b">Заказы</th>
              <th className="p-3 border-b">Сумма</th>
              <th className="p-3 border-b">Послед. заказ</th>
              <th className="p-3 border-b">Лояльность</th>
              <th className="p-3 border-b">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{customer.id}</td>
                <td className="p-3 border-b">{customer.name}</td>
                <td className="p-3 border-b">
                  <button
                    onClick={() => toggleEmail(customer.id)}
                    className="text-blue-600 hover:underline"
                  >
                    {expandedEmailId === customer.id
                      ? customer.email
                      : truncateEmail(customer.email)}
                  </button>
                </td>
                <td className="p-3 border-b">{customer.phone}</td>
                <td className="p-3 border-b">{formatDate(customer.registrationDate)}</td>
                <td className="p-3 border-b">{customer.orderCount}</td>
                <td className="p-3 border-b">${customer.lifetimeSpend.toFixed(2)}</td>
                <td className="p-3 border-b">{formatDate(customer.lastOrderDate)}</td>
                <td className="p-3 border-b text-center">{getLoyaltySymbol(customer.loyaltyStatus)}</td>
                <td className="p-3 border-b flex space-x-2">
                  <button
                    onClick={() => handleViewInfo(customer)}
                    title="Просмотр"
                    className="flex items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleDelete(customer)}
                    title="Удалить"
                    className="flex items-center bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Info Modal */}
      {showInfoModal && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <FaTimes
              onClick={() => setShowInfoModal(false)}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              size={20}
            />
            <h2 className="text-xl font-semibold mb-4">Информация о клиенте</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Имя</label>
              <input
                type="text"
                value={selectedCustomer.name}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={selectedCustomer.email}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Телефон</label>
              <input
                type="text"
                value={selectedCustomer.phone}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Дата регистрации</label>
              <input
                type="text"
                value={formatDate(selectedCustomer.registrationDate)}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Количество заказов</label>
              <input
                type="text"
                value={selectedCustomer.orderCount}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">Сумма на балансе</label>
              <input
                type="text"
                value={`$${selectedCustomer.lifetimeSpend.toFixed(2)}`}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedCustomer && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Подтверждение удаления</h2>
            <p className="mb-4">Вы уверены, что хотите удалить этого клиента?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Отмена
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
