import React from 'react';

import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropDown from './PriceRangeDropdown'
import { useContext } from 'react';
import {RiSearch2Line} from 'react-icons/ri'

import {HouseContext} from './HouseContext';
import BedroomsDropdown from './BedroomsDropdown';

const Search = () => {
const {handleClick} = useContext(HouseContext);
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <BedroomsDropdown />
      <PriceRangeDropDown />
      <button onClick={()=> handleClick()}  className='bg-violet-700
      hover:bg-violet-800  transition w-60 lg:max-w-[162px] h-12 mt-2 rounded-lg flex  justify-center items-center text-white'>
        <RiSearch2Line />
      </button>
      </div>
  )
};

export default Search;
