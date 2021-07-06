import axios from '../plugins/axios-api';
import Vue from "vue";

const ACTIONS_PARAMS = {
  getHouses: {
    url: 'houses/all/',
    method: 'GET',
    response: {dataResult: 'yes', dataError: 'no', status: 200},
    mutation: {name: 'setHouses', payload: 'dataResult'}
  },
  addHouse: {
    url: 'houses/',
    method: 'POST',
    requiredPayloadParams: ['address', 'floorsNumber', 'description', 'label'],
    response: {dataResult: 'yes', dataError: 'no', status: 201},
    mutation: {name: 'setAddedHouse', payload: 'dataResult'}
  },
  getHouse: {
    url: 'houses/',
    method: 'GET',
    requiredQueryParams: ['id'],
    response: {dataResult: 'yes', dataError: 'no', status: 200},
    mutation: {name: 'setHouses', payload: 'dataResult'}
  },
  deleteHouse: {
    url: 'houses/',
    method: 'DELETE',
    requiredQueryParams: ['id'],
    response: {status: 204},
    mutation: {name: 'deleteHouseFromHouses', payload: 'params', params: ['id']}
  },
};

const _idToid = (houses) => {
  const house_idToid = (h) => {
    const hm = {...h, id: h._id};
    delete hm._id;
    return hm;
  }
  if (Array.isArray(houses)) return houses.map(h => house_idToid(h));
  return house_idToid(houses);
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
const apiAction = async (actionName, {commit}, params = {}) => {
  // params validation if it has both required params of request: queries & payload/body
  if (!paramsValidation(actionName, params, 'requiredQueryParams')
    || !paramsValidation(actionName, params, 'requiredPayloadParams')) return;

  // request url with queries
  let urlWithQuery = ACTIONS_PARAMS[actionName].url
  if (ACTIONS_PARAMS[actionName].requiredQueryParams && ACTIONS_PARAMS[actionName].requiredQueryParams.length > 0)
    urlWithQuery += ACTIONS_PARAMS[actionName].requiredQueryParams
      .reduce((prev, reqParam) => prev + params[reqParam] + '/', '');

  // request payload
  let payload = {};
  if (ACTIONS_PARAMS[actionName].requiredPayloadParams)
    ACTIONS_PARAMS[actionName].requiredPayloadParams.forEach(reqParam => payload[reqParam] = params[reqParam])

  // request (core functionality)
  await axios.simple(
    ACTIONS_PARAMS[actionName].method,
    urlWithQuery,
    payload
  )
    .then(async (resp) => {
      console.log(`OK @ STORE. actionName: ${ACTIONS_PARAMS[actionName].url}`);
      console.log('  response: ', resp);
      // response validation
      if ((!ACTIONS_PARAMS[actionName].response.status || (ACTIONS_PARAMS[actionName].response.status && ACTIONS_PARAMS[actionName].response.status === resp.status))
        && (!ACTIONS_PARAMS[actionName].response.dataResult || (ACTIONS_PARAMS[actionName].response.dataResult === 'yes' && (resp.data.result || resp.data.results)))
        && (!ACTIONS_PARAMS[actionName].response.dataError || (ACTIONS_PARAMS[actionName].response.dataError === 'no' && (resp.data.error === false || resp.data.error === false))))
      {
        // mutation commit
        if (ACTIONS_PARAMS[actionName].mutation) {
          let mutationPayload = {};
          if (ACTIONS_PARAMS[actionName].mutation.payload === 'dataResult')
            mutationPayload = _idToid(resp.data.result || resp.data.results)
          if (ACTIONS_PARAMS[actionName].mutation.payload === 'params')
            ACTIONS_PARAMS[actionName].mutation.params.forEach(mp => mutationPayload[mp] = params[mp])
          commit(ACTIONS_PARAMS[actionName].mutation.name, mutationPayload);
        }
      } else {
        throw new Error('Response not validated')
      }
    })
    .catch(error => {
      console.error(`Error @ STORE. actionName: ${ACTIONS_PARAMS[actionName].url}`);
      console.error('  error message: ', error);
      Vue.toasted.error('Wystąpił problem z wykonaniem zadania. Spróbuj ponownie za chwilę lub skontaktuj się z administratorem');
    })
}

const getHouses = async ({commit}) => {
  await apiAction('getHouses', {commit});
}

const getHouse = async ({commit}, params) => {
  await apiAction('getHouse', {commit}, params);
}

const addHouse = async ({commit}, params) => {
  commit('resetAddedHouse');
  await apiAction('addHouse', {commit}, params);
}

const deleteHouse = async ({commit}, params) => {
  commit('resetDeletedHouse');
  await apiAction('deleteHouse', {commit}, params);
}


export default {
  getHouses,
  getHouse,
  addHouse,
  deleteHouse
}
