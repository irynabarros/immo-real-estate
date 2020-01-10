import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/services'
import FeaturedApts from '../components/FeaturedApts'

export const Home = () => {
  return (
    <>
      <Hero hero='defaultHero'>
        <Banner
          title='Find your dream home'
          subtitle='your real estate agency'>
          <Link to='/apts' className='btn-primary'>
            our properties
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedApts/>
    </>
  );
};

export default Home;
