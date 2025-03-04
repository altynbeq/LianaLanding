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
  
  // Пример данных
  const revenueData = [
    { month: 'Янв', revenue: 42000, orders: 420 },
    { month: 'Фев', revenue: 38000, orders: 380 },
    { month: 'Март', revenue: 55000, orders: 550 },
    { month: 'Апр', revenue: 48000, orders: 480 },
    { month: 'Май', revenue: 62000, orders: 620 },
    { month: 'Июнь', revenue: 75000, orders: 750 },
  ];

  const topProducts = [
    { name: 'Ноутбук Pro', sales: 300, revenue: 450000 },
    { name: 'Умные часы', sales: 250, revenue: 125000 },
    { name: 'Беспроводные наушники', sales: 200, revenue: 40000 },
    { name: 'Чехол для телефона', sales: 180, revenue: 9000 },
  ];

  const orderStatus = [
    { status: 'В ожидании', value: 15 },
    { status: 'Отправлено', value: 45 },
    { status: 'Доставлено', value: 35 },
    { status: 'Отменено', value: 5 },
  ];

  const trafficSources = [
    { source: 'Органический трафик', value: 40 },
    { source: 'Платный трафик', value: 30 },
    { source: 'Соцсети', value: 20 },
    { source: 'Прямой трафик', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const timeFilterOptions = [
    { value: 'daily', label: 'Ежедневно' },
    { value: 'weekly', label: 'Еженедельно' },
    { value: 'monthly', label: 'Ежемесячно' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-bold ">Аналитическая панель</h1>
        <CustomSelect
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          options={timeFilterOptions}
        />
      </div>

      {/* Карточки KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <KPICard 
          title="Общий доход" 
          value="320 000 ₽"
          change="12.3% по сравнению с прошлым месяцем"
          isPositive={true}
        />
        <KPICard 
          title="Активные пользователи"
          value="8,642"
          change="5.1% по сравнению с прошлым месяцем"
          isPositive={true}
        />
        <KPICard 
          title="Конверсия"
          value="3.2%"
          change="0.8% по сравнению с прошлым месяцем"
          isPositive={true}
        />
        <KPICard 
          title="Средний чек"
          value="125 ₽"
          change="2.4% по сравнению с прошлым месяцем"
          isPositive={false}
        />
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Тренд доходов */}
        <CustomCard className="col-span-2">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Тренд доходов</h2>
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

        {/* Топ продукты */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Топ продукты</h2>
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

        {/* Статус заказов */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Статус заказов</h2>
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

        {/* Источники трафика */}
        <CustomCard>
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Источники трафика</h2>
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
