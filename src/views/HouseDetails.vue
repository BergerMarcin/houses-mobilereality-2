<template>
  <div class="flex justify-center my-2">
    <div class="flex flex-col w-4/5 my-2">
      <div class="view-header">Szczegóły domu {{ house.name }}</div>

      <div class="flex-col w-100 my-2">
        <div v-for="(field, ind) in houseFields" :key="`house-field-${ind}`">
          <div class="field-header mb-2">{{ field.name }}</div>
          <div class="field-content mb-4" v-html="cellContent(field)"/>
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

</style>