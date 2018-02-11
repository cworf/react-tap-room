import React from 'react';
import Keg from '../ui/Keg';

const masterList = [
  {name: 'Delicious IPA', brand: 'ninkasi', price: 6, apv: 10, pints: 12},
  {name: 'Amazing Lager', brand: 'rolling rock', price: 3, apv: 8, pints: 12},
  {name: 'Scrumptous Porter', brand: 'porters r us', price: 5, apv: 7, pints: 12},
  {name: 'Believable Stout', brand: 'guiness', price: 5, apv: 6, pints: 12},
  {name: 'Fake Pale Ale', brand: 'pyramid', price: 4, apv: 5, pints: 12}
];

function KegList() {
  return (
    <div>
      {masterList.map( (keg, index) =>
        <Keg key={index}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          apv={keg.apv}
          pints={keg.pints}/>
      )}
    </div>
  );
}

export default KegList;
