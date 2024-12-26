const Categories = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap mx-auto my-4 w-7/8 justify-evenly">
        <div className="m-8 text-4xl font-bold text-green-800 min-h-12 xl:ml-24 xl:text-6xl">Shop Our Categories</div>
        <div className="flex flex-wrap w-full justify-evenly">
        <div className="CatCard -z-10">
          <div className="CatImageContainer">
            <img src="/handbag.png" alt="handbags"/>
            <h1 className="text-4xl CatText">Bags</h1>
          </div>
        </div>

        <div className="CatCard -z-10">
          <div className="CatImageContainer">
            <img src="/tech.jpg" alt="tech"/>
            <h1 className="CatText">Gadgets</h1>
          </div>
        </div>

        <div className="CatCard -z-10">
          <div className="CatImageContainer">
            <img src="/furniture.jpg" alt="furniture"/>
            <h1 className="CatText">Furniture</h1>
          </div>
        </div>

        <div className="CatCard -z-10">
          <div className="CatImageContainer">
            <img src="/books.jpg" alt="books"/>
            <h1 className="CatText">Books</h1>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
