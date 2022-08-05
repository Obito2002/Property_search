import React, { Children } from 'react';
import { useState , useEffect , createContext } from 'react';

import {housesData} from '../data'

 export const HouseContext = createContext();

 const HouseContextProvider = ({children}) => {
  
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [bedroom,setBedroom] = useState('Bedrooms (any)');

  const [loading, setLoading] = useState(false);


useEffect(()=>{
  const allCountries = houses.map((house)=>{
    return house.country;
  })

  const uniqueCountries =['Location (any)',... 
  new Set(allCountries)]
  setCountries(uniqueCountries);
},[]);

useEffect(()=>{
  const allProperties = houses.map((house)=>{
    return house.type;
  })
 
  const uniqueProperties =['Location (any)',... 
  new Set(allProperties)];
  setProperties(uniqueProperties);
},[]);


const handleClick= ()=>{
  setLoading(true);

  const isDefault =(str)=>{
    return str.split(' ').includes('(any)');
  };
    const minPrice = parseInt(price.split(' ')[0]);
    
    const maxPrice = parseInt(price.split(' ')[2]);

    const minBedrooms = parseInt(bedroom.split(' ')[0]);
    
    const maxBedrooms = parseInt(bedroom.split(' ')[2]);

    console.log(minBedrooms,maxBedrooms)

    const newHouses = housesData.filter((house) => {

      const housePrice = parseInt(house.price);
      const Hbedroom =parseInt(house.bedrooms)
      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        Hbedroom >=minBedrooms &&
        Hbedroom <=maxBedrooms
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price) && isDefault(bedroom)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price) && isDefault(bedroom)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price) && isDefault(bedroom)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property) && isDefault(bedroom)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      //bedrooms is not default 
      if(!isDefault(bedroom) && isDefault(country) && isDefault(property) && isDefault(price)){
        if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
          return house;
        }
      }
      // country and property and is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price) && isDefault(bedroom)) {
        return house.country === country && house.type === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price) && isDefault(bedroom)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price) && isDefault(bedroom)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      //bedroom and country is not default 
      if(!isDefault(country) && isDefault(property) && isDefault(price) && !isDefault(bedroom)){
        if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
          return house.country === country;
        }
      }
      //bedroom and property is not default 
      if(isDefault(country) && !isDefault(property) && isDefault(price) && !isDefault(bedroom)){
        if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
          return house.type === property;
        }
      }
      //bedroom and price is not default 
      if(isDefault(country) && isDefault(property) && !isDefault(price) && !isDefault(bedroom)){
        if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house;
          }
        }
      }
      //country property and bedroom are not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price) && !isDefault(bedroom)){
        if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
              return house.country === country && house.type === property;
        }
      }
      //country property and price are not default
      if(!isDefault(country) && !isDefault(property) && !isDefault(price) && isDefault(bedroom)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
              return house.country === country && house.type === property;
        }
      }
      //country bedroom and price are not default
      if(!isDefault(country) && isDefault(property) && !isDefault(price) && !isDefault(bedroom)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
              return house.country === country;
          }
        }
      }
      //property bedroom and price are not default
      if(isDefault(country) && !isDefault(property) && !isDefault(price) && !isDefault(bedroom)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          if (Hbedroom >= minBedrooms && Hbedroom <= maxBedrooms) {
              return house.type === property;
          }
        }
      }

    });

    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) 
      :
      setHouses(newHouses),
      setLoading(false);
    },1000)

}

  return ( <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        bedroom,
        setBedroom,
        houses,
        loading,
        handleClick,
        
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
