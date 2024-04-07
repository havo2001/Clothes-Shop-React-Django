import React, {useState} from 'react'
import './home.css';
import BestSeller from '../../components/bestSeller/BestSeller';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <>
      <section className='home'>
        <Header />
        <div className='home__container'>
          <img src="/assets/cropped-background.jpg" alt="home__image" className='home__image' onLoad={handleImageLoad}></img>
          {imageLoaded && <BestSeller />}
        </div>
        {imageLoaded && <Footer />}
      </section>
    </>
  )
}

export default Home


