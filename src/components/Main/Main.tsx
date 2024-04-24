import React from 'react';


import './Main.scss';
import Card from '../Card/Card';
import CardHolder from './CardsHolder';
import LeafletMap from '../Leaflet/LeafletMap';
import AsideForm from './AsideForm/AsideForm';


function Main() {
  return (
   <div className='main-container'>
    <div className='main'>
    
     <AsideForm/>
     <LeafletMap/>
    </div>
   
   </div>
  );
}

export default Main;