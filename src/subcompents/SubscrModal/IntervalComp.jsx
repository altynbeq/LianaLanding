import React from 'react'
import { ChevronDown } from 'lucide-react';

export const IntervalComp = () => {
    const intervals = [];

    for (let hour = 9; hour < 21; hour++) {
      const start = `${hour.toString().padStart(2, '0')}:00`;
      const end = `${(hour + 1).toString().padStart(2, '0')}:00`;
      intervals.push(`${start}-${end}`);
    }

    return (
        <div className="mb-4 bg-white">
          <h3 className="font-semibold mb-2 text-black">Интервал доставки</h3>
          <div className="relative bg-white">
            <select className="w-full bg-white text-black p-2 border rounded flex items-center appearance-none">
              {intervals.map((interval) => (
                <option key={interval} value={interval}>
                  {interval}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-black pointer-events-none" size={20} />
          </div>
        </div>
    );
}

