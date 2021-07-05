const setHouses = (state, payload) => { state.houses = payload; }
const deleteHouseFromHouses = (state, {id}) => { state.houses = state.houses.filter(h => h.id !== id); }
const setAddedHouse = (state, payload) => { state.addedHouse = payload; state.houses.push(payload); }
const resetAddedHouse = (state) => { state.addedHouse = {}; }

export default {
  setHouses,
  deleteHouseFromHouses,
  setAddedHouse,
  resetAddedHouse
}
