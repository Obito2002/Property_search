import React from 'react';
import Example  from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner';
import Search from './components/Search';

import HouseList from './components/HouseList'

const App = () => {

  return (
  <div className = 'max-w-[1440px] min-h-screen  mx-auto bg-[#FAF8FF]'>
    <Example />
    <Banner />
    <Search />
    <HouseList />
    <Footer />
  </div>
  )
};

export default App;
