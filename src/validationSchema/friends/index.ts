import * as yup from 'yup';

export const friendValidationSchema = yup.object().shape({
  name: yup.string().required(),
  birthday: yup.date().required(),
  organization_id: yup.string().nullable(),
});
