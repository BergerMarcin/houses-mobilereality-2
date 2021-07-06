const setHouses = (state, payload) => { state.houses = payload; }
const setAddedHouse = (state, payload) => { state.addedHouse = payload; state.houses.push(payload); }
const resetAddedHouse = (state) => { state.addedHouse = {}; }
const deleteHouseFromHouses = (state, {id}) => {
  state.deletedHouse = state.houses[state.houses.findIndex(h => h.id === id)];
  state.houses = state.houses.filter(h => h.id !== id);
}
const resetDeletedHouse = (state) => { state.deletedHouse = {}; }

export default {
  setHouses,
  deleteHouseFromHouses,
  setAddedHouse,
  resetAddedHouse,
  resetDeletedHouse
}
