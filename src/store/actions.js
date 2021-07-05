import axios from '../plugins/axios-api';
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
    requiredPayloadParams: ['address', 'floorsNumber', 'description', 'label'],
    mutation: 'setAddedHouse'
  },
  getHouse: {
    url: 'houses/',
    method: 'GET',
    requiredQueryParams: ['id'],
    mutation: 'setHouses'
  },
  deleteHouse: {
    url: 'houses/',
    method: 'DELETE',
    requiredQueryParams: ['id'],
    mutation: 'deleteHouseFromHouses'
  },
};

const _idToid = (houses) => {
  return houses.map(h => {
    const hm = {...h, id: h._id};
    delete hm._id;
    return hm
  });
}

const paramsValidation = (actionName, params, checkingScope) => {
  if (ACTIONS_PARAMS[actionName][checkingScope] && ACTIONS_PARAMS[actionName][checkingScope].length > 0
    // eslint-disable-next-line no-prototype-builtins
    && !ACTIONS_PARAMS[actionName][checkingScope].every(reqParam => params.hasOwnProperty(reqParam))) {
    console.error(`Wrong params @ ${ACTIONS_PARAMS[actionName].url}, of scope: ${checkingScope}`);
    console.error('  got params:        ', params);
    console.error('  required params:   ', ACTIONS_PARAMS[actionName][checkingScope]);
    console.error('  missed properties: ', ACTIONS_PARAMS[actionName][checkingScope]
      // eslint-disable-next-line no-prototype-builtins
      .map(reqParam => !params.hasOwnProperty(reqParam)));
    Vue.toasted.error('Wystąpił problem z pobraniem danych. Skontaktuj się z administratorem');
    return false;
  }
  return true;
}

/**
 * General action of API request and commit mutation function
 * Read together with ACTIONS_PARAMS
 * @param actionName      - action name acc. ACTIONS_PARAMS
 * @param commit
 * @param params          - should includes both `requiredQueryParams` and `requiredPayloadParams`
 * @returns {Promise<void>}
 */
const action = async (actionName, {commit}, params = {}) => {
  console.warn('STORE. actionName: ', actionName);
  // params validation if it has both required params of request: queries & payload/body
  if (!paramsValidation(actionName, params, 'requiredQueryParams')
    || !paramsValidation(actionName, params, 'requiredPayloadParams')) return;

  // request url with queries
  let urlWithQuery = ACTIONS_PARAMS[actionName].url
  if (ACTIONS_PARAMS[actionName].requiredQueryParams && ACTIONS_PARAMS[actionName].requiredQueryParams.length > 0)
    urlWithQuery += ACTIONS_PARAMS[actionName].requiredQueryParams
      .reduce((prev, reqParam) => prev + reqParam + '/', '');

  // request payload
  let payload = {};
  if (ACTIONS_PARAMS[actionName].requiredPayloadParams)
    Object.keys(ACTIONS_PARAMS[actionName].requiredPayloadParams)
      .forEach(reqParam => payload = {...payload, reqParam: params[reqParam]})

  // request (core functionality)
  await axios.simple(
    ACTIONS_PARAMS[actionName].method,
    urlWithQuery,
    payload
  )
    .then(async (data) => {
      console.warn(`OK @ STORE. actionName: ${ACTIONS_PARAMS[actionName].url}`);
      console.warn('  resolved data: ', data);
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

const getHouse = async ({commit}, params) => {
  await action('getHouses', {commit}, params);
}

const addHouse = async ({commit}, params) => {
  commit('resetAddedHouse');
  await action('addHouse', {commit}, params);
}

const deleteHouse = async ({commit}, params) => {
  await action('deleteHouses', {commit}, params);
}


export default {
  getHouses,
  getHouse,
  addHouse,
  deleteHouse
}
