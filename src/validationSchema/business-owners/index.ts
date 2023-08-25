import * as yup from 'yup';

export const businessOwnerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
