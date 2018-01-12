import axios from 'axios';

export const checkEmail = (email) => {
  return axios.get(`/api/v1.0/auth/check-email/${email}`);
}

// export const checkEmail = (email) => axios.get('/api/v1.0/auth/check-email/' + email);