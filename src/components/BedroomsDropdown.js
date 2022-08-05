import React ,{useContext, useState}from 'react';


import { RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import { BiBed } from 'react-icons/bi';

import { Menu } from '@headlessui/react';

import {HouseContext} from './HouseContext';


const PriceRangeDropdown = () => {
  const {bedroom , setBedroom } =   useContext(HouseContext);

  const[isOpen ,setIsOpen]= useState(false);

  const bedrooms=[{
    value:'Bedrooms (any)',
  },
  {
    value:'1 - 2',
  },
  {
    value:'2 - 5',
  },
  {
    value:'5 - 10',
  },
]



  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}  className='dropdown-btn w-full text-left'>
        <BiBed className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{bedroom}</div>
          <div className='text-[13px]' >No. of bedrooms</div>
        </div>
          {
            isOpen?(
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            ):(
              <RiArrowDownSLine className='dropdown-icon-secondary'/>

            )
          }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {bedrooms.map((price,index)=>{
          return(
            <Menu.Item 
            className ='cursor-pointer hover:text-violet-700 transition' 
            onClick={()=>setBedroom(price.value)} 
            as='li' 
            key={index}
            >
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
