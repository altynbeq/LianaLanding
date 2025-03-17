import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const CalendarComp = ({ numberOfDays = 3 }) => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const calendarRef = useRef(null);
    const hiddenInputRef = useRef(null);  // Hidden input to force blur

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
          .p-datepicker {
            background-color: #ffff;
            color: white;
          }
          .p-datepicker th,
          .p-datepicker td {
            color: black;
          }
          .p-datepicker .p-datepicker-header {
            background-color: #ffff;
            color: white;
          }
          .p-datepicker .p-datepicker-header .p-button {
            color: white;
          }
          .p-datepicker .p-button {
            background-color: white;
            color: black;
          }
          .p-datepicker .p-highlight {
            background-color: #ffff;
            color: blue;
          }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleDateChange = (e) => {
        const dates = e.value || [];
        setSelectedDates(dates);

        if (dates.length < numberOfDays) {
            setErrorMessage(`Выберите ровно ${numberOfDays} дней`);
        } else if (dates.length > numberOfDays) {
            setErrorMessage(`Выберите ровно ${numberOfDays} дней`);
        } else {
            setErrorMessage('');

            // Trick: After selecting correct days, move focus to a hidden input to close the calendar
            setTimeout(() => {
                hiddenInputRef.current?.focus();
            }, 100);  // Slight delay to let PrimeReact update
        }
    };

    return (
        <div className="mb-4">
            <h3 className="font-semibold bg-white text-black mb-2">Дата доставки</h3>
            {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <div className="w-full border-2 border-gray-300 p-1 rounded-lg">
                <Calendar
                    ref={calendarRef}
                    value={selectedDates}
                    onChange={handleDateChange}
                    dateFormat="dd/mm/yy"
                    selectionMode="multiple"
                    showIcon
                    className="w-full bg-white text-black"
                    pt={{
                        input: { className: 'w-full bg-white text-black' },
                        button: { className: 'text-black' },
                    }}
                />
                {/* Hidden input to force blur and close calendar */}
                <input ref={hiddenInputRef} className="absolute opacity-0" />
            </div>
        </div>
    );
};
