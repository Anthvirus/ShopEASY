import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (

  <div className="flex flex-col items-center justify-center mx-auto overflow-hidden shadow-md bg-inherit min-w-80 max-w-96 rounded-2xl h-96 hover:cursor-pointer hover:opacity-70">
    <img
      src={product.image}
      alt={product.name}
      className="object-contain w-full h-3/5 cover"
      />
      <div className="flex flex-col items-start justify-center w-full p-3 md:gap-1 h-2/5 bg-slate-100">
      <h3 className="font-extrabold capitalize text-md">{product.name}</h3>
    <p className="tracking-tighter text-gray-600 capitalize">{product.description}</p>
    <p className="font-semibold text-black">{product.rating} ⭐</p>
    <p className="font-extrabold text-green-700">${product.price}</p>
    <Link
      to={`/product/${product.id}`}
      className="font-semibold text-green-800 hover:underline hover:font-extrabold"
    >
      View Details
    </Link>
      </div>
      </div>

  );
};

export default ProductCard;
