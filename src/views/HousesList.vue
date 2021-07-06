<template>
  <div>
    <div class="flex items-center field">
      <div class="view-header mr-16">Lista domów</div>
      <div class="btn" @click="houseAddRoute()">Dodaj nowy dom</div>
    </div>

    <!-- LIST -->
    <div class="flex flex-col w-100 my-2">
      <!-- LIST HEADER -->
      <div class="flex w-100 field-header my-2">
        <div v-for="(field, index) in houseFields"
             :key="`header-field-${index}`"
             :style="`width: ${field.width}%;`"
        >
          {{ field.name }}
        </div>
        <div style="width: 15%;">Akcje</div>
      </div>

      <!-- LIST CONTENT -->
      <div class="flex flex-col w-100 field-content my-2">
        <div v-for="(house, index) in houses" :key="`house-${index}-${house.id}`" class="flex w-100 my-2">
          <div v-for="(field, ind) in houseFields"
               :key="`house-${index}-${house.id}-field-${ind}`"
               class="justify-center self-center active-cel"
               :style="`width: ${field.width}%; max-width: ${field.width}%;` + (field.type === 'img' && `height: ${field.height}%;`)"
               @click="houseDetailsRoute(house.id)"
               v-html="cellContent(house, index, field)"
          />
          <div class="flex flex-wrap justify-center self-center" style="width: 15%;">
            <div class="btn m-1" @click="houseDetailsRoute(house.id)">Szczegóły</div>
            <div class="btn m-1" @click="houseDelete(house.id, house.address)">Usuń</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import {houseDeleteMixin} from "../mixins/houseDeleteMixin";

export default {
  name: "HousesList",
  mixins: [houseDeleteMixin],
  data() {
    return {
      houses: []
    }
  },
  computed: {
    // NOTE: below cols does not include action column (it is set directly @ template)
    houseFields() {
      return [
        {name: 'Lp.', width: 5, type: 'no.'},
        {name: 'Adres', width: 20, type: 'text', houseProp: 'address'},
        {name: 'Piętro', width: 5, type: 'integer', houseProp: 'floorsNumber'},
        {name: 'Opis', width: 30, type: 'text', houseProp: 'description'},
        {name: 'Data', width: 10, type: 'date', houseProp: 'createdAt'},
        {name: 'Etykieta', width: 10, type: 'text', houseProp: 'label'}
      ]
    }
  },
  async mounted() {
    await this.$store.dispatch('getHouses');
    this.houses = this.$store.getters.houses;
  },
  methods: {
    cellContent(house, index, field) {
      if (field.type === 'no.') return (index + 1) + '.'
      if (field.type === 'text' || field.type === 'integer') return house[field.houseProp]
      if (field.type === 'date') return moment(house[field.houseProp]).local().format('YYYY.MM.DD HH:MM')
      return ''
    },
    houseAddRoute() {
      this.$router.push({name: 'HouseAdd'});
    },
    houseDetailsRoute(id) {
      this.$router.push({ name: 'HouseDetails', params: { id } })
    }
  }
}
</script>

<style scoped>
.active-cel {
  cursor: pointer;
}

.active-cel:hover {
  font-weight: 800;
  color: theme('colors.primary');
}

.active-cel:active {
  font-weight: 400;
}

</style>
