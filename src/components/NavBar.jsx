import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { products } from '../Data/data';

  const NavBar = ({toggleCartSidebar}) => {
  const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isHidden, setIsHidden] = useState(false)
  const navigate = useNavigate();

  // Detect screen size for responsive design
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredProducts);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/product/${searchResults[0].id}`);
      setSearchTerm('');
      setSearchResults([]);
    } else {
      alert('No products found!');
    }
  };

  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setSearchTerm('');
    setSearchResults([]);
  };
    
    const toggleNavbar = () => {
      setIsHidden(!isHidden);
    }

  return (
    <nav className="bg-white shadow-lg max-w-screen">
      <div className="flex flex-row items-center justify-between w-full gap-8 p-2">
        {/* Logo */}
        <div className="relative flex items-center space-x-2 md:w-1/8">
          <img src="logo.png" alt="Logo" className="h-20" />
          <span className="hidden text-2xl font-bold text-green-800 md:flex">ShopEasy</span>
        </div>
        
        {/* Search Bar */}
        <form
          className="absolute flex-col hidden w-2/3 p-1 mx-32 mt-1 lg:flex md:w-2/4 md:mx-72 h-max"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search for products..." 
            className="relative w-full px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-green-800"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchResults.length > 0 && (
            <div className="absolute w-full mt-12 bg-white rounded-lg shadow-lg">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center p-2 border-b cursor-pointer last:border-none hover:bg-gray-100"
                  onClick={() => handleResultClick(product.id)}
                >
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    className="w-10 h-10 mr-3 rounded-full"
                  />
                  <p className="text-sm text-gray-700">{product.name}</p>
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="relative hidden w-1/4 space-x-12 text-xl font-bold text-gray-700 md:flex justify-evenly">
            <li>
              <Link to="/" className="hover:text-green-800">Category</Link>
            </li>
            <li>
              <Link to="/deals" className="hover:text-green-800">Deals</Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-green-800">Account</Link>
            </li>            
          </ul>
        )}

         
        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={toggleNavbar}
            className="flex text-green-800 lg:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isHidden ? (
        <div className="absolute w-full py-1 bg-gray-100 h-max lg:hidden">
          <ul className="flex flex-col h-full text-xl font-bold text-gray-600 uppercase justify-evenly">
            <li className='flex items-center w-full h-12 px-2 cursor-pointer hover:bg-white'>
              <Link to="/" className="block hover:text-green-800">Category</Link>
            </li>
            <li className='flex items-center w-full h-12 px-2 cursor-pointer hover:bg-white'>
              <Link to="/deals" className="block hover:text-green-800">Deals</Link>
            </li>
            <li className='flex items-center w-full h-12 px-2 cursor-pointer hover:bg-white'>
              <Link to="/account" className="block hover:text-green-800">Account</Link>
            </li>
          </ul>
                  {/* Search Bar */}
        <form
          className="relative flex flex-col w-full my-1 overflow-hidden bg-slate-200 min-h-12 max-h-max"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search for products..." 
            className="relative w-auto px-2 m-1 border rounded-lg min-h-12 focus:outline-none focus:ring-1 focus:ring-green-800"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchResults.length > 0 && (
            <div className="relative z-10 w-full bg-white border rounded-lg shadow-lg h-max">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center p-2 border-b cursor-pointer last:border-none hover:bg-gray-100"
                  onClick={() => handleResultClick(product.id)}
                >
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    className="w-10 h-10 mr-3 rounded-full"
                  />
                  <p className="text-sm text-gray-700">{product.name}</p>
                </div>
              ))}
            </div>
            )}
        </form>
        </div>
      ) : (<></>)}
      <div className="fixed w-16 p-1 bg-green-800 rounded-full xl:w-20 right-3 top-80 z-100" onClick={toggleCartSidebar}>
          <img src="/cart.jpg" alt="books" className="relative rounded-full size-full"/>
        </div>
    </nav>
  );
};

export default NavBar;
