import axios from 'axios'
import Vue from 'vue'
// import store from '../store'
// import ErrorDialog from '../views/dialogs/ErrorDialog'
// import { EventBus } from '../helpers/eventBus'

const api = axios.create(
  {
    baseURL: 'http://mobile-reality-backend.sadek.usermd.net/', // for the future: process.env.VUE_APP_API_HOST,
    headers: {
      'Content-Type': 'application/json'
    },
  }
);

api.interceptors.request.use((config) => {
  config.headers.common = {...config.headers.common}    // for the future: , ...store.getters.authHeader
  return config;
});

api.simple = async function (method, resource, data = {}, callback = () => true) {
  return new Promise((resolve, reject) => {
    let response;
    let error;
    this({url: resource, method, data})
      .then(({data}) => {
        response = data;
        console.warn(response);
      })
      .catch((err) => {
        error = err;
        console.warn(response);
      })
      .finally(async () => {
        await callback(error, response);
        if (error) reject(error)
        if (response)
          if (!response.error) resolve(response)
          else reject('Error of endpoint @ resolving data')
      })
  })
};

Vue.prototype.$api = api;

export default api;
