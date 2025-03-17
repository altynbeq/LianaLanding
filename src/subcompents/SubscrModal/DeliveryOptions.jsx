import React, { useState } from 'react';

export const DeliveryMethodSelector = ({deliveryMethod, setDeliveryMethod}) => {

    return (
        <div className="mb-4">
            <h3 className="font-semibold text-black mb-2">Способ доставки</h3>
            <div className="flex text-black items-center space-x-4">

                {/* Самовывоз */}
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="delivery"
                        value="Самовывоз"
                        checked={deliveryMethod === 'Самовывоз'}
                        onChange={() => setDeliveryMethod('Самовывоз')}
                        className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-black checked:border-black cursor-pointer"
                    />
                    <span>Самовывоз</span>
                </label>

                {/* Доставка */}
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="delivery"
                        value="Доставка"
                        checked={deliveryMethod === 'Доставка'}
                        onChange={() => setDeliveryMethod('Доставка')}
                        className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-black checked:border-black cursor-pointer"
                    />
                    <span>Доставка</span>
                </label>

            </div>
        </div>
    );
};
