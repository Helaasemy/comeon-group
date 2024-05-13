import axios from 'axios';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
// user login
export const userLoggin = (username, password) => {
  let API_URL = `http://localhost:3001/login
  `;
  return axios
      .post(API_URL, {username, password}, {
        headers: headers
      })
      .then(res => {
          return res.data
      })
}

// user logout