import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [totalStats, setTotalStats] = useState({
    totalSum: 0,
    totalSalesCount: 0,
    totalClientsCount: 0,
  });

  const [latestOrders, setLatestOrders] = useState([]);
  const [salesData, setSalesData] = useState([]);

  // Function to get the number of days in the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Generate the sales data for the current month
  const generateEmptySalesData = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // Current month (0-11)
    const currentYear = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth + 1); // Get the number of days in the current month

    const emptySalesData = [];

    for (let day = 1; day <= daysInMonth; day++) {
      emptySalesData.push({ date: `${day}`, sales: 0 });
    }

    return emptySalesData;
  };

  // Fetch the stats, latest orders, and sales data for this month
  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const response = await fetch('https://lianalandingback.onrender.com/api/totalStats/totalStats');

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch total stats');
  //       }
  //       const data = await response.json();
  //       setTotalStats(data);
  //     } catch (error) {
  //       console.error('Error fetching total stats:', error);
  //     }
  //   };

  //   const fetchLatestOrders = async () => {
  //     try {
  //       const response = await fetch('https://lianalandingback.onrender.com/api/orders/orders');

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch latest orders');
  //       }
  //       const data = await response.json();
  //       setLatestOrders(data);
  //     } catch (error) {
  //       console.error('Error fetching latest orders:', error);
  //     }
  //   };

  //   const fetchSalesData = async () => {
  //     try {
  //       const response = await fetch('https://lianalandingback.onrender.com/api/sales?month=this'); // Adjust as per the API
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch sales data');
  //       }
  //       const data = await response.json();
        
  //       // If no sales data is available, create an empty dataset with 0 values for each day of the month
  //       if (data.length === 0) {
  //         setSalesData(generateEmptySalesData());
  //       } else {
  //         setSalesData(data); // Assuming the data has the correct format
  //       }
  //     } catch (error) {
  //       console.error('Error fetching sales data:', error);
  //       setSalesData(generateEmptySalesData()); // Fallback to empty data if there's an error
  //     }
  //   };

  //   fetchStats();
  //   fetchLatestOrders();
  //   fetchSalesData();
  // }, []);

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: 'Общие продажи', value: totalStats.totalSum },
          { title: 'Заказы', value: totalStats.totalSalesCount },
          { title: 'Клиенты', value: totalStats.totalClientsCount },
          { title: 'Товары', value: 'Данные о товарах' },
        ].map(({ title, value }) => (
          <div key={title} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-medium text-gray-500">{title}</h3>
            <p className="text-2xl text-black font-bold mt-2">
              {typeof value === 'number' ? `${value.toLocaleString()}` : value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Недавние заказы */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Недавние заказы</h3>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-4">ID заказа</th>
                <th className="py-3 px-4">Клиент</th>
                <th className="py-3 px-4">Итого</th>
                <th className="py-3 px-4">Статус</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3 px-4">#{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4 text-green-600">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Обзор продаж */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Обзор продаж</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Популярные товары</h3>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-4">Товар</th>
              <th className="py-3 px-4">Категория</th>
              <th className="py-3 px-4">Продажи</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">Товар {index + 1}</td>
                <td className="py-3 px-4">Категория {index + 1}</td>
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
