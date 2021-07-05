import axios from '../plugins/axios-api';
import store from './index';
import Vue from "vue";

const ACTIONS_PARAMS = {
  getHouses: {
    url: 'houses/all/',
    method: 'GET',
    mutation: 'setHouses'
  },
  addHouse: {
    url: 'houses/',
    method: 'POST',
    requiredPayloadProps: ['address', 'floorsNumber', 'description', 'label'],
    customMutations: async ({id}) => {
      await store.dispatch('getHouses')
      const house = store.getters('getHouse', id)
      store.commit('setAddedHouse', house)
    },
    mutation: 'addHouse'
  },
  getHouse: {
    url: 'houses/',
    method: 'GET',
    requiredPayloadProps: ['id'],
    mutation: 'setHouses'
  },
  deleteHouse: {
    url: 'houses/',
    method: 'DELETE',
    requiredPayloadProps: ['id'],
    mutation: 'setHouses'
  },
};

const _idToid = (houses) => {
  return houses.map(h => {
    const hm = {...h, id: h._id};
    delete hm._id;
    return hm
  });
}

// TODO: check if params or payload; what to do with header
const action = async (actionName, {commit}, payload = {}) => {
  console.warn('STORE. actionName: ', actionName);
  // params validation if has all required params
  if (ACTIONS_PARAMS[actionName].requiredPayloadProps && ACTIONS_PARAMS[actionName].requiredPayloadProps.length > 0
    // eslint-disable-next-line no-prototype-builtins
    && !ACTIONS_PARAMS[actionName].requiredPayloadProps.every(prop => payload.hasOwnProperty(prop))) {
    console.error(`Wrong payload @ ${ACTIONS_PARAMS[actionName].url}`);
    console.error('  got payload:       ', payload);
    console.error('  required payload:  ', ACTIONS_PARAMS[actionName].requiredPayloadProps);
    console.error('  missed properties: ', ACTIONS_PARAMS[actionName].requiredPayloadProps
      // eslint-disable-next-line no-prototype-builtins
      .map(prop => !payload.hasOwnProperty(prop)));
    Vue.toasted.error('Wystąpił problem z pobraniem danych. Skontaktuj się z administratorem');
  }

  // core functionality
  await axios.simple(
    ACTIONS_PARAMS[actionName].method,
    ACTIONS_PARAMS[actionName].url,
    payload
  ).then(async (data) => {
    console.log(`OK @ STORE. actionName: ${ACTIONS_PARAMS[actionName].url}`);
    console.log('  resolved data: ', data);
    if (ACTIONS_PARAMS[actionName].customMutations) {
      await ACTIONS_PARAMS[actionName].customMutations(data.results);
    }
    if (ACTIONS_PARAMS[actionName].mutation) {
      commit(ACTIONS_PARAMS[actionName].mutation, _idToid(data.results));
    }
  })
  .catch(error => {
    console.error(`Error @ STORE. actionName: ${ACTIONS_PARAMS[actionName].url}`);
    console.error('  error message: ', error);
    Vue.toasted.error('Wystąpił problem z pobraniem danych. Spróbuj ponownie za chwilę lub skontaktuj się z administratorem');
  })
}

const getHouses = async ({commit}) => {
  await action('getHouses', {commit});
}

// const getHouse = ({commit, state}, params) => {
//   action('getHouses', {commit}, params);
// }

const addHouse = async ({commit}, params) => {
  await action('addHouse', {commit}, params);
}

const deleteHouse = async ({commit}, params) => {
  await action('deleteHouses', {commit}, params);
}


export default {
  getHouses,
  // getHouse,
  addHouse,
  deleteHouse
}
