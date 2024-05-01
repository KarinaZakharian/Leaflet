import swal from 'sweetalert';

import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import TextareaInput from '../FormComponents/Textarea';

import './Form.scss';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addData } from '../../store/reducers/card';
import {apartmentSchema} from '../../Validations/FormValidation';


import { useState } from 'react';
import Header from '../Header/Header';
import CurrencySelector from '../FormComponents/Currency';
import AutoComplete from '../FormComponents/Autocomplet';



interface Apartment {
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
  user_address: string;
  latitude: number;
  longitude: number;
}



function CreateCardForm() {


  const data = useAppSelector((state) => state.card);
  const [valid, setIsValid] = useState(true);

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const maxId = Math.max(...data.map(item => item.id), 0);
    const newId = maxId + 1;

    const price = formData.get('price');
  
    // Append the selected currency to the price
    if (price) {
      formData.set('price', `${price} ${selectedCurrency}`);
    }
    formData.append('id', newId.toString())
    formData.append('longitude', coordinates.x.toString());
    formData.append('latitude', coordinates.y.toString());


    const objData = Object.fromEntries(formData) as unknown as Apartment;
    console.log(objData);

    const isValid = await apartmentSchema.isValid(objData);
   
    setIsValid(isValid);
    console.log(valid)
    if (isValid) {
      dispatch(addData(objData));
      swal({
        icon: 'success',
        timer: 1000,
      });

      setTimeout(() => {
        // Redirect to the home page after a successful login
        navigate('/', { replace: true });
      }, 1000);
    }

    if (!isValid) {
      swal({
        icon: 'error',
        title: 'Please fill all the fields',
        timer: 1000,
      });
    }
  };
   
  
  


  return (
    <div><Header/>
    <div className="page-wrapper">
      <form className="create-form" onSubmit={handleSubmit}>
        <p className="create-form__title">Rent your appartment</p>
        <Input
          name="name"
          type="text"
          placeholder="Title"
          aria-label="Card name"
          classname=""
          img=""
        />
         <AutoComplete
                
                style={{ borderColor: 'initial' }}
                setCoordinates={setCoordinates}
              />
        <TextareaInput
          label=""
          placeholder="Description"
          name="description"
        />
        <div className='price__form'>
        <Input
          name="price"
          type="number"
          placeholder="Price"
          aria-label="Price"
          classname="price"
          img=""/>
          <CurrencySelector selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
        </div>
       
        <Button prop="Submit" />
      </form>
    </div></div>
    
  );
}
export default CreateCardForm;
