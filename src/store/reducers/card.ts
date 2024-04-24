import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

import axiosInstance from '../../utils/axios';
import { Apartment } from '@mui/icons-material';
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



const initialState=[
  {
    "id": 1,
    "name": "Cozy Studio Apartment in Lviv",
    "description": "This cozy studio apartment is located in the heart of Lviv's historic center. It features modern amenities and a comfortable atmosphere, perfect for solo travelers or couples.",
    "price": '50',
    "photo": "../../../src/assets/1.jpg",
    "user_address": "Lviv, Ukraine",
    "latitude": 49.8397,
    "longitude": 24.0297
  },
  {
    "id": 2,
    "name": "Spacious Loft in Kyiv City Center",
    "description": "Enjoy the vibrant atmosphere of Kyiv with this spacious loft apartment. Located in the city center, it offers easy access to attractions, restaurants, and nightlife.",
    "price": '80',
    "photo": "../../../src/assets/2.jpg",
    "user_address": "Kyiv, Ukraine",
    "latitude": 50.4501,
    "longitude": 30.5234
  },
  {
    "id": 3,
    "name": "Modern Apartment in Odesa",
    "description": "Experience the beauty of Odesa with this modern apartment. Situated near the Black Sea coast, it offers stunning views and a relaxing atmosphere.",
    "price": '65',
    "photo": "../../../src/assets/3.jpg",
    "user_address": "Odesa, Ukraine",
    "latitude": 46.4694,
    "longitude": 30.7409
  },
  {
    "id": 4,
    "name": "Charming Flat in Kharkiv",
    "description": "Discover the charm of Kharkiv with this lovely flat. Located in a quiet neighborhood, it's perfect for those seeking a peaceful retreat.",
    "price": '55',
    "photo": "../../../src/assets/4.jpg",
    "user_address": "Kharkiv, Ukraine",
    "latitude": 49.9935,
    "longitude": 36.2304
  },
  {
    "id": 5,
    "name": "Riverside Apartment in Dnipro",
    "description": "Enjoy the tranquility of the Dnipro River with this riverside apartment. Ideal for nature lovers, it offers beautiful views and outdoor activities.",
    "price": '70',
    "photo": "../../../src/assets/5.jpg",
    "user_address": "Dnipro, Ukraine",
    "latitude": 48.4647,
    "longitude": 35.0462
  },
  {
    "id": 6,
    "name": "Historic House in Chernivtsi",
    "description": "Step back in time with this historic house in Chernivtsi. Featuring traditional architecture and antique furnishings, it offers a unique and memorable stay.",
    "price": '90',
    "photo": "../../../src/assets/6.jpg",
    "user_address": "Chernivtsi, Ukraine",
    "latitude": 48.2921,
    "longitude": 25.9359
  },
  {
    "id": 7,
    "name": "Mountain Retreat in Carpathians",
    "description": "Escape to the Carpathian Mountains with this mountain retreat. Surrounded by breathtaking scenery, it's the perfect getaway for outdoor enthusiasts.",
    "price": '100',
    "photo": "../../../src/assets/3.jpg",
    "user_address": "Yaremche, Ukraine",
    "latitude": 48.4494,
    "longitude": 24.5531
  },
  {
    "id": 8,
    "name": "Seaside Apartment in Odessa",
    "description": "Experience the beauty of the Black Sea coast with this seaside apartment in Odessa. Enjoy stunning sunsets and easy access to the beach.",
    "price": '75',
    "photo": "../../../src/assets/2.jpg",
    "user_address": "Odessa, Ukraine",
    "latitude": 46.4694,
    "longitude": 30.7409
  },
  {
    "id": 9,
    "name": "Luxury Penthouse in Kyiv",
    "description": "Indulge in luxury with this penthouse apartment in Kyiv. Featuring upscale amenities and panoramic views of the city skyline, it offers an unforgettable experience.",
    "price":' 150',
    "photo": "../../../src/assets/1.jpg",
    "user_address": "Kyiv, Ukraine",
    "latitude": 50.4501,
    "longitude": 30.5234
  }]
export const addData=createAction<Apartment>('ADD_DATA');

const cardReducer = createReducer(initialState, (builder) => {
  builder.addCase(addData, (state, action) => {
    console.log(action.payload)
  
    const maxId = Math.max(...state.map(item => item.id), 0);
    const newId = maxId + 1;
    
    state.push({ id: newId, ...action.payload });
  });
});


export default cardReducer;
