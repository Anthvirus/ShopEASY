import React from 'react';

const CartSidebar = ({ cart, removeItem, onBuy, toggleCartSidebar }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-64 cart-sidebar bg-slate-300">
      <div className="flex items-center justify-between text-slate-700">
        <h2 className='text-xl font-semibold tracking-wider'>Your Cart</h2>
        {/* Close Cart Button */}
        <button className="top-0 text-red-600" onClick={toggleCartSidebar}>
          ✖
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul className="p-4 bg-slate-100 rounded-xl text-slate-800">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center h-12 gap-3 p-2 my-2 rounded-xl bg-gray-50">
                <span className='font-semibold capitalize'>{item.name}</span>
                <span className='absolute font-extrabold right-20'>${item.price.toFixed(2)}</span>
                <button onClick={() => removeItem(index)} className="absolute text-xs font-bold text-black right-12">
                X
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between w-full pt-4 border-t-4 border-green-800">
            <h3 className='relative font-semibold text-black'>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={onBuy} className="px-2 py-4 text-sm text-white bg-green-800 rounded-xl hover:opacity-90">
              Proceed to Payment Gateway
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
