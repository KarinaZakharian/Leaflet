import * as yup from 'yup';

export const apartmentSchema = yup.object().shape({
    id:yup.string().required(),
    name: yup.string().required(),
    user_address: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
    latitude: yup.number().required().notOneOf([0]),
    longitude: yup.number().required().notOneOf([0]),
   
  });