import React from 'react';

const masterList = [
  {name: 'IPA', brand: 'ninkasi', price: 6, apv: 10, pints: 12},
  {name: 'Lager', brand: 'rolling rock', price: 3, apv: 8, pints: 12},
  {name: 'Porter', brand: 'porters r us', price: 5, apv: 7, pints: 12},
  {name: 'Stout', brand: 'guiness', price: 5, apv: 6, pints: 12},
  {name: 'Pale Ale', brand: 'pyramid', price: 4, apv: 5, pints: 12}
];

function KegList() {
  return (
    <div>
      {masterList.map( (keg, index) =>
        <div key={index}>{keg.name}</div>
      )}
    </div>
  );
}

export default KegList;
