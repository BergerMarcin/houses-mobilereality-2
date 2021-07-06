<template>
  <div class="flex justify-center my-2">
    <div class="flex flex-col w-80 my-2">
      <div class="header">Szczegóły domu {{ house.name }}</div>

      <div class="flex-col w-100 my-2">
        <div v-for="(field, ind) in houseFields" :key="`house-field-${ind}`">
          <div class="field-header">{{ field.name }}</div>
          <div class="field-content" v-html="cellContent(field)"/>
        </div>
        <div class="flex justify-center">
          <div class="btn mt-12 mb-6" @click="houseDelete(house.id, house.address)">Usuń dom</div>
        </div>
        <div class="flex justify-center">
          <div class="btn my-2" @click="housesListRoute()">Przejdź do listy domów</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {houseDeleteMixin} from "../mixins/houseDeleteMixin";

export default {
  name: "HouseDetails",
  mixins: [houseDeleteMixin],
  props: {
    id: String,
  },
  data() {
    return {
      house: {}
    }
  },
  computed: {
    // NOTE: rows does not include action column (it is set directly @ template)
    houseFields() {
      return [
        {name: 'Adres', type: 'text', houseProp: 'address'},
        {name: 'Piętro', type: 'integer', houseProp: 'floorsNumber'},
        {name: 'Opis', type: 'text', houseProp: 'description'},
        {name: 'Data', type: 'date', houseProp: 'createdAt'},
        {name: 'Etykieta', type: 'text', houseProp: 'label'}
      ]
    }
  },
  async mounted() {
    if (this.$store.getters.houses.length < 1) await this.$store.dispatch('getHouses')
    this.house = this.$store.getters.house(this.id);
    if (!this.house) this.$toasted.error('Nie znaleziono domu')
  },
  methods: {
    cellContent(field) {
      if (field.type === 'text' || field.type === 'integer') return this.house[field.houseProp]
      if (field.type === 'date') return moment(this.house[field.houseProp]).local().format('YYYY.MM.DD HH:MM')
      return '-';
    },
    housesListRoute() {
      this.$router.push({name: 'HousesList'});
    }
  }
}
</script>

<style scoped>
.header {
  font-size: 2rem;
  font-weight: 800;
  font-family: sans-serif;
  letter-spacing: -0.05em;
  color: #11B0F8;
  margin: 1rem;
}

.field {
  font-family: sans-serif;
  letter-spacing: -0.05em;
}

.field-header {
  @extend .field;
  font-size: 1.5rem;
  font-weight: 600;
  color: #11B0F8;
  margin-bottom: 0.5rem;
}

.field-content {
  @extend .field;
  font-size: 1rem;
  font-weight: 400;
  color: #A9B1BD;
  margin-bottom: 1rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.w-80 {
  width: 80%;
}

.w-100 {
  width: 100%;
}

.btn {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  color: #11B0F8;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #11B0F8;
}

.btn:hover {
  border-width: 4px;
  padding: calc(0.5rem - 2px);
}

.btn:active {
  border-width: 1px;
  padding: calc(0.5rem + 1px);
}

.mt-12 {
  margin-top: 3rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

</style>