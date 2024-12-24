const Hero = () => {
  return (
    <>
  <div className="relative px-4 m-auto shadow-lg rounded-xl xl:w-4/5 min-h[40rem] pt-4 -z-10 bg-[#f7f2ec]">
    <div className="flex flex-wrap items-center justify-evenly">
      <div className=" md:flex-1">
      <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl min-h-24">Grab Up to <b className="text-green-800 md:text-7xl animate-pulse">50%</b> Off On Selected Headphones</h2>
      <button className="relative p-3 my-4 font-bold text-gray-100 bg-green-800 rounded-lg md:my-10 lg:my-6 xxl:my-1 hover:bg-green-700 hover:cursor-pointer">See Offers</button>
      </div>
      <div className="md:flex-1">
      <img src="hero.png" alt="Logo" className="h-96 md:h-full" />
      </div>
    </div>
  </div>
    </>
  )
}

export default Hero;
