"use client"

import React from 'react';

const BuyButton: React.FC = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://app.uniswap.org/swap?outputCurrency=0xE41DE0C5694FC7d995cac53Ae3f8fb91c7aDe692&chain=base';
    };

    return (
        <div>
            <button
                onClick={handleButtonClick}
                className="bg-gray-800 w-36 text-white py-1 px-3 rounded-full focus:outline-none items-center justify-center hover:bg-[#0600ff]"
            >
                Buy on Uniswap
            </button>
        </div>
    );
};

export default BuyButton;