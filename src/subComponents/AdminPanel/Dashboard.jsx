import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Total Sales', 'Orders', 'Customers', 'Products'].map((metric) => (
          <div key={metric} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-500">{metric}</h3>
            <p className="text-2xl font-bold mt-2">${Math.floor(Math.random() * 100000).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">#{Math.floor(Math.random() * 10000)}</td>
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">${Math.floor(Math.random() * 1000)}</td>
                  <td className="py-3 px-4 text-green-600">Completed</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Sales Chart Placeholder</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Top Products</h3>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Sales</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">Product {index + 1}</td>
                <td className="py-3 px-4">Category {index + 1}</td>
                <td className="py-3 px-4">${Math.floor(Math.random() * 10000)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
