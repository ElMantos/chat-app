import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {errors, constants} from '~/form';

export default yupResolver(
  yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(errors.INVALID_EMAIL)
      .required(errors.FIELD_REQUIRED),
    password: yup
      .string()
      .min(constants.PASSWORD_MIN_LENGTH, errors.PASSWORD_MIN_LENGTH)
      .required(errors.FIELD_REQUIRED),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  }),
);
