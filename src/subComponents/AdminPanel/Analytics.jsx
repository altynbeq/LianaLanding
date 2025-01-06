// Import necessary libraries
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
  // Dummy Data
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4000 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 7000 },
  ];

  const productData = [
    { name: 'Product A', units: 300 },
    { name: 'Product B', units: 200 },
    { name: 'Product C', units: 150 },
    { name: 'Product D', units: 100 },
  ];

  const regionData = [
    { name: 'USA', value: 60 },
    { name: 'UK', value: 20 },
    { name: 'EU', value: 15 },
    { name: 'Asia', value: 5 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">Analytics Dashboard</h1>

      {/* Sales Trends */}
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Sales Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Product Performance */}
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Top-selling Products</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <Bar dataKey="units" fill="#82ca9d" />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Sales */}
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Sales by Region</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={regionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {regionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
