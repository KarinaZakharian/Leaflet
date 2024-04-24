import  Input  from "../../FormComponents/Input";
import { useState } from "react";
import './AsideForm.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Rating } from "@mui/material";
import HoverRating from "./Rating";

function AsideForm() {
    const [category1Open, setCategory1Open] = useState(false);
    const [category2Open, setCategory2Open] = useState(false);
    const [category3Open, setCategory3Open] = useState(false);
    
  
    // Function to toggle the open/close state of each category
    const toggleCategory = (category) => {
      switch (category) {
        case 'category1':
          setCategory1Open(true);
          break;
        case 'category2':
          setCategory2Open(true);
          break;
        
        case 'category3':
          setCategory3Open(true);
          break;
        default:
          break;
      }
    };
    const closeCategorie = (event, category) => {
        event.stopPropagation();

        switch (category) {
          case 'category1':
            console.log("close")
            setCategory1Open(false);
            break;
          case 'category2':
            setCategory2Open(false);
            break;
          
          case 'category3':
            setCategory3Open(false);
            break;
          default:
            break;
        }
      };

    
  return (
  
<div className="aside">
    <div className="filtre">
       
        <button className="filtre__button">Delite all filters</button>
    </div>
    <div className="hamburger-menu">
      <div className="category" >
        <div className={`category__title ${category1Open ? "open" : ""}`}><span className={category1Open ? "text open" : "text closed"}>All the categories</span>
       {!category1Open && (<button className="arrow down"  color="secondary" onClick={() => toggleCategory('category1')}><KeyboardArrowDownIcon  color="primary"/></button>)}
       {category1Open && (<button className="arrow up "  color="secondary" onClick={(event) => closeCategorie(event, 'category1')}><ArrowBackIosIcon  fontSize="small" color="primary"/></button>)}</div>
      
        {category1Open && (
          <div className="sub-categories">
            <span className="sub-categories__title">Real Estate</span>
          </div>
        )}
      </div>
      <div className="category" >
        <div className={`category__title ${category2Open ? "open" : ""}`}> <span className={category2Open ? "text open" : "text closed"}>Subcategories</span>
      
      {!category2Open && (<button className="arrow down" color="secondary"  onClick={() => toggleCategory('category2')}><KeyboardArrowDownIcon  color="primary"/></button>)}
      {category2Open && (<button className="arrow up" color="secondary"  onClick={(event) => closeCategorie(event, 'category2')}><ArrowBackIosIcon  fontSize="small" color="primary"/></button>)}</div>
     
        {category2Open && (
          <div className="sub-categories">
            <span className="sub-categories__title">Subcategory 1</span>
            <span className="sub-categories__title">Subcategory 2</span>
            <span className="sub-categories__title">Subcategory 3</span>
            <span className="sub-categories__title">Subcategory 4</span>
          </div>
        )}
      </div>
      <div className="category" >
        <div className={`category__title ${category3Open ? "open" : ""}`}><span className={category3Open ? "text open" : "text closed"}>Price</span>
        {!category3Open && (<button className="arrow down" color="secondary"  onClick={() => toggleCategory('category3')}><KeyboardArrowDownIcon  color="primary"/></button>)}
        {category3Open && (<button className="arrow up"  color="secondary" onClick={(event) => closeCategorie(event, 'category3')}><ArrowBackIosIcon  fontSize="small" color="primary"/></button>)}</div>
      
        {category3Open && (
          
          <div className="price">
            <span className="price__title">Price in UAN</span>
            <div className="price__category"> <Input type="text" placeholder="Min" name='min price'classname="min" img=''/>
            <span className="price__category__line"></span>
            <Input type="text" placeholder="Max" name='max price'classname="max" img=''/></div >
           
          </div>
        )}
      </div>
      
    </div>
        <div className="reviews">
          <span className="reviews__title">Reviews</span>
          <form>
            <label className="form__label" htmlFor="option1">
              <input type="checkbox" id="option1" name="option" value="Option 1" />
              Lorem ipsum dolor 
            </label>
          </form>
          <span className="reviews__info">Lorem ipsum dolor sit amet</span>
          <HoverRating/>
        </div>
    </div>
   
  );
}

export default AsideForm;