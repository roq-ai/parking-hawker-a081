import * as yup from 'yup';

export const parkingSpaceValidationSchema = yup.object().shape({
  location: yup.string().required(),
  availability: yup.boolean().required(),
  price: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
