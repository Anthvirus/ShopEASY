import Categories from './Categories'
import Hero from './Hero'
import ProductGrid from './ProductGrid'

const Home = () => {
  return (
    <div className='width-screen'>
      <Hero/>
      <Categories/>
      <ProductGrid />
    </div>
  )
}

export default Home
