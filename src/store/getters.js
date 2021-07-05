const houses = state => state.houses;
const house = (state) => (id) => state.houses.find(h => h.id === id);
const addedHouse = (state) => state.addedHouse;

export default {
  houses,
  house,
  addedHouse
}
