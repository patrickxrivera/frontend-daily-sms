import axios from 'axios';

export const isInvalidPhoneNumber = (message) => message['phone_number'];

const stripNonDigits = (value) => value.replace(/\D/g, '');

export const formatUserData = ({ phoneNumber, countryCode }) => ({
  phone_number: stripNonDigits(phoneNumber.value),
  country_code: countryCode.value
});

export const formatVerificationCode = (verificationCode) => ({
  verification_code: verificationCode.value
});

export const formatErrorMessage = (errorText, { status }) => ({
  errorText,
  status
});

export const handleUserError = ({ response }) =>
  !response || !response.data.message
    ? { error: true, message: 'Unknown error. Please try again.' }
    : { error: true, ...response.data };

const handleMessageError = (err) => {
  console.error(err);
  return { success: false };
};

export const request = (reqType, endpoint, reqData, handleError = handleMessageError) => {
  if (reqType === 'get' || reqType === 'delete') {
    return axios[reqType](endpoint)
      .then(({ data }) => data)
      .catch(handleError);
  }

  return axios[reqType](endpoint, reqData)
    .then(({ data }) => data)
    .catch(handleError);
};
