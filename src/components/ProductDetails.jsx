import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/data";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="w-3/4 mx-auto mt-4 overflow-hidden shadow-lg md:w-1/2 lg:w-1/4 rounded-xl h-max">
      <div className="w-auto h-auto">
        <img src={`/${product.image}`} alt={product.name} style={{ width: "500px", height: "300px" }} />
      </div>

      <div className="flex flex-col gap-1 p-4 bg-slate-100">
        <h1 className="text-2xl font-extrabold leading-10 tracking-wide uppercase">{product.name}</h1>
        <p className="tracking-tighter">{product.description}</p>
        <p className="product-rating">⭐ {product.rating} (121 reviews)</p>

        <div className="product-price">
          <h2>${product.price
.toFixed(2)}</h2> <p>or $99.99/month</p> </div>

php
Copy code
    <div className="flex items-center justify-between color-options">
          <div>
          <h3>Choose a Color:</h3>
      <div className="colors">
        <span className="color-option color-red"></span>
        <span className="color-option color-black"></span>
        <span className="color-option color-gray"></span>
          </div>
      </div>
          <div className="actions">
       <button className="px-2 py-4 text-sm font-semibold text-white bg-green-800 hover:bg-green-700 rounded-xl" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
    </div>

    <p className="availability">Only 12 items left! Don’t miss it.</p>
  </div>
</div>
); };

export default ProductDetails;