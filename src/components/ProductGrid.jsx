// ProductGrid.js
import { products } from '../Data/data';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-5 lg:mx-12 lg:px-2 sm:grid-cols-2 md:mx-0 md:px-0 md:grid-cols-3 xl:grid-cols-5 min-h-max lg:grid-cols-auto-fit grid-flow-dense">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;