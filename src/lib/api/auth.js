import axios from 'axios';

export const checkEmail = (email) => {
  return axios.get(`/api/v1.0/auth/exists/email/${email}`);
}

export const checkDisplayName = (displayName) => {
  let api = `/api/v1.0/auth/exists/display-name/${displayName}`;
  return axios.get(api);
}

export const localRegister = ({
  displayName,
  email,
  password,
  initialMoney: { currency, index }
}) => {
  let api = '/api/v1.0/auth/register/local';
  return (
    axios.post(api, {
      displayName,
      email,
      password,
      initialMoney: { currency, index }
    })
  )
};

export const localLogin = ({
  email,
  password
}) => {
    let api = '/api/v1.0/auth/login/local';
    return (
      axios.post(api, {
        email,
        password
      })
    )
};