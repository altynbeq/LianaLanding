import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, ScatterChart, Scatter
} from 'recharts';

const CustomCard = ({ children, className = '' }) => (
  <div className={`bg-white  rounded-lg shadow-lg p-4 ${className}`}>
    {children}
  </div>
);

const CustomSelect = ({ value, onChange, options }) => (
  <select 
    value={value} 
    onChange={onChange}
    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const KPICard = ({ title, value, change, isPositive }) => (
  <CustomCard>
    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
    <p className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {isPositive ? '↑' : '↓'} {change}
    </p>
  </CustomCard>
);

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState('monthly');
  
  // Dummy data
  const revenueData = [
    { month: 'Jan', revenue: 42000, orders: 420 },
    { month: 'Feb', revenue: 38000, orders: 380 },
    { month: 'Mar', revenue: 55000, orders: 550 },
    { month: 'Apr', revenue: 48000, orders: 480 },
    { month: 'May', revenue: 62000, orders: 620 },
    { month: 'Jun', revenue: 75000, orders: 750 },
  ];

  const topProducts = [
    { name: 'Laptop Pro', sales: 300, revenue: 450000 },
    { name: 'Smart Watch', sales: 250, revenue: 125000 },
    { name: 'Wireless Buds', sales: 200, revenue: 40000 },
    { name: 'Phone Case', sales: 180, revenue: 9000 },
  ];

  const orderStatus = [
    { status: 'Pending', value: 15 },
    { status: 'Shipped', value: 45 },
    { status: 'Delivered', value: 35 },
    { status: 'Cancelled', value: 5 },
  ];

  const trafficSources = [
    { source: 'Organic', value: 40 },
    { source: 'Paid', value: 30 },
    { source: 'Social', value: 20 },
    { source: 'Direct', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const timeFilterOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-white">Analytics Dashboard</h1>
        <CustomSelect
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          options={timeFilterOptions}
        />
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <KPICard 
          title="Total Revenue" 
          value="$320,000"
          change="12.3% from last month"
          isPositive={true}
        />
        <KPICard 
          title="Active Users"
          value="8,642"
          change="5.1% from last month"
          isPositive={true}
        />
        <KPICard 
          title="Conversion Rate"
          value="3.2%"
          change="0.8% from last month"
          isPositive={true}
        />
        <KPICard 
          title="Avg Order Value"
          value="$125"
          change="2.4% from last month"
          isPositive={false}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <CustomCard className="col-span-2">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0088FE" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#00C49F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CustomCard>

        {/* Top Products */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Top Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProducts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </CustomCard>

        {/* Order Status */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Order Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatus}
                dataKey="value"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {orderStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CustomCard>

        {/* Traffic Sources */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trafficSources}
                dataKey="value"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {trafficSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CustomCard>
      </div>
    </div>
  );
};

export default Analytics;