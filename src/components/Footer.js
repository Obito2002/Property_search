import React from 'react';

const Footer = () => {
  return(
    
<footer className="p-4 mt-40  w-full bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
            <span className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer  dark:text-white">PropertyFinder</span>
        
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
            <p className='cursor-pointer p-1' >Contact</p>
            </li>
            <li>
            <p className='cursor-pointer p-1' >About Us</p>
            </li>
            <li>
            <p className='cursor-pointer p-1' >Work with Us</p>
            </li>
            <li>
            <p className='cursor-pointer p-1' >Seller</p>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span  className="cursor-pointer hover:underline">PropertyFinder™</span>. All Rights Reserved.
    </span>
</footer>

  )
};

export default Footer;
