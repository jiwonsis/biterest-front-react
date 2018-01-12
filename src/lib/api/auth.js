import axios from 'axios';

export const checkEmail = (email) => {
  return axios.get(`/api/v1.0/auth/exists/email/${email}`);
}

export const checkDisplayName = (displayName) => {
  let api = `/api/v1.0/auth/exists/display-name/${displayName}`;
  console.log(api);
  return axios.get(api);
}

export const localRegister = ({
  displayName,
  email,
  password,
  initialMoney: { currency, index }
}) => {
  console.log({displayName,
    email,
    password,
    initialMoney: { currency, index }});
  return (
    axios.post('/api/v1.0/auth/register/local', {
      displayName,
      email,
      password,
      // initialMoney: { currency, index }
    })
  )
}