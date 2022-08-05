import React ,{useContext, useState}from 'react';


import {RiWallet3Line , RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

import { Menu } from '@headlessui/react';

import {HouseContext} from './HouseContext';


const PriceRangeDropdown = () => {
  const {price , setPrice } =   useContext(HouseContext);

  const[isOpen ,setIsOpen]= useState(false);

  const prices=[{
    value:'Price range (any)',
  },
  {
    value:'100000 - 1300000',
  },
  {
    value:'130000 - 1600000',
  },
  {
    value:'160000 - 1900000',
  },
  {
    value:'190000 - 2200000',
  },
  {
    value:'10000 - 300000',
  },
  {
    value:'30000 - 40000',
  }


]



  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)}  className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]' >Choose your price</div>
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
        {prices.map((price,index)=>{
          return(
            <Menu.Item 
            className ='cursor-pointer hover:text-violet-700 transition' 
            onClick={()=>setPrice(price.value)} 
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
