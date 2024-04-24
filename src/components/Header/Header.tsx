import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import mainLogo from '../../assets/icons8-round-60.png';




import './Header.scss';
import CurrencySelector from '../FormComponents/Currency';
import LanguageSelector from '../FormComponents/Language';
import { Lan } from '@mui/icons-material';
function Header() {
  const navigate = useNavigate();
  
  function redirect() {
    navigate('/create-list', { replace: true });
  }
  
  return (<div className='sub-container'>
    <div className='sub-container__flash'></div>
     <div className="container">
      <div className="header">
      <div className='header__logo'> <img className="logo-img" src={mainLogo} alt="main-logo" />
          <NavLink to= '/'className='header__logo-title'>My  web site</NavLink></div>
     

        <div className='header__buttons'>
          <div className='header__buttons-button'>
            <NavLink to="/add-appartment" className="button" onClick={redirect}>
              Rent
              <AddIcon />
         
             </NavLink>
             <NavLink to="#" className="button" onClick={redirect}>
              Exit
              <ExitToAppIcon/>
        
             </NavLink>
            <div>
              
        
            </div>
            
          </div>
          <div className='header__line'></div>
          <div className='header__button'> <CurrencySelector/>
         <LanguageSelector/></div>
        </div>
      </div>
    </div>
  </div>
   
  );
}

export default Header;  