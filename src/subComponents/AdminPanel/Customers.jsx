import React, { useState } from 'react';
import { FaSearch, FaEnvelope, FaTrash, FaEye, FaDownload, FaUpload } from 'react-icons/fa';

const Customers = () => {
  const initialCustomers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      registrationDate: '2024-01-01',
      orderCount: 5,
      lifetimeSpend: 150.75,
      lastOrderDate: '2024-12-20',
      loyaltyStatus: 'Gold',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+9876543210',
      registrationDate: '2024-06-15',
      orderCount: 2,
      lifetimeSpend: 50.5,
      lastOrderDate: '2024-11-10',
      loyaltyStatus: 'Silver',
    },
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filters, setFilters] = useState({
    registrationDateFrom: '',
    registrationDateTo: '',
    minOrderCount: '',
    loyaltyStatus: '',
    location: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!filters.registrationDateFrom || new Date(customer.registrationDate) >= new Date(filters.registrationDateFrom)) &&
      (!filters.registrationDateTo || new Date(customer.registrationDate) <= new Date(filters.registrationDateTo)) &&
      (!filters.minOrderCount || customer.orderCount >= parseInt(filters.minOrderCount)) &&
      (!filters.loyaltyStatus || customer.loyaltyStatus === filters.loyaltyStatus)
    );
  });

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <div className="flex space-x-4">
          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </button>
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <FaDownload className="mr-2" /> Export
          </button>
          <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            <FaUpload className="mr-2" /> Import
          </button>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <FaSearch className="mr-2 text-gray-600" />
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="date"
              name="registrationDateFrom"
              value={filters.registrationDateFrom}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="date"
              name="registrationDateTo"
              value={filters.registrationDateTo}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="minOrderCount"
              placeholder="Min Order Count"
              value={filters.minOrderCount}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <select
              name="loyaltyStatus"
              value={filters.loyaltyStatus}
              onChange={handleFilterChange}
              className="p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Loyalty Status</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Phone</th>
              <th className="p-3 border-b">Reg. Date</th>
              <th className="p-3 border-b">Orders</th>
              <th className="p-3 border-b">Lifetime Spend</th>
              <th className="p-3 border-b">Last Order</th>
              <th className="p-3 border-b">Loyalty</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{customer.id}</td>
                <td className="p-3 border-b">{customer.name}</td>
                <td className="p-3 border-b">{customer.email}</td>
                <td className="p-3 border-b">{customer.phone}</td>
                <td className="p-3 border-b">{customer.registrationDate}</td>
                <td className="p-3 border-b">{customer.orderCount}</td>
                <td className="p-3 border-b">${customer.lifetimeSpend.toFixed(2)}</td>
                <td className="p-3 border-b">{customer.lastOrderDate}</td>
                <td className="p-3 border-b">{customer.loyaltyStatus}</td>
                <td className="p-3 border-b flex space-x-2">
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                  >
                    <FaEye className="mr-2" /> View
                  </button>
                  <button
                    className="flex items-center bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
