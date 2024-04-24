import React from 'react';


import './Board.scss';

import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import SearchIcon from '@mui/icons-material/Search';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SortIcon from '@mui/icons-material/Sort';
import RateReviewIcon from '@mui/icons-material/RateReview';

function Board() {
  return (
   <div className='board-container'>
    <div className='form__wrapper'> 
    <form className='form'>
      <Input placeholder="Search" name='aaa' classname='border radius' img={<SearchIcon color="disabled"/>}/>
      <Input placeholder="Search" name='aaa' classname='border' img={<SortIcon color="disabled"/>}/>
      <Input placeholder="Search" name='aaa' classname='border' img ={<CalendarViewDayIcon color="disabled"/>}/>
      <Input placeholder="Search" name='aaa' classname=''img ={<RateReviewIcon color="disabled"/>} />
     
    </form>
    <Button prop="Search"/></div>
   
   </div>
  );
}

export default Board;
