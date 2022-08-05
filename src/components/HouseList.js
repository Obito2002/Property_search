import React,{useContext} from 'react';


import { HouseContext} from './HouseContext';

import House from './House'

import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {
const {houses , loading} =useContext(HouseContext);


if(loading){
  return(<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px] mb-[200px]'/>)
}
if(houses.length<1){
  return <div> No  results Found </div>
}

  return (
    <section className='mb-20'>
<div className='container mx-auto'>
  <div className='grid md:grid-cols-2 min-h-screen lg:grid-cols-3 gap-4 lg:gap-14'>
    {houses.map((house , index)=>{
      return(
        <div>
          <House house={house} />
          </div>
      )
    })}
  </div>
</div>
    </section>
  );
};

export default HouseList;
