<template>
  <div class="flex justify-center">
    <div class="flex flex-col w-80 my-2">
      <div class="header">Nowy dom</div>

      <div class="flex-col w-100 my-2">
        <div v-for="(field, ind) in houseFields" :key="`house-field-${ind}`">
          <label class="field-header">{{ field.name }}
            <input class="field-content" :type="field.type" v-model="house[field.houseProp]"
                   :placeholder="field.placeholder">
          </label>
        </div>
        <div class="flex justify-center w-100 my-2">
          <div class="btn m-1" :style="`disabled: ${!validatedData}`" @click="houseAdd()">Dodaj</div>
          <div class="btn m-1" @click="housesList()">Cofnij (lista domów)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  props: {
    id: String,
  },
  data() {
    return {
      house: {
        address: '',
        floorsNumber: null,
        description: '',
        label: ''
      }
    }
  },
  computed: {
    // NOTE: rows does not include action column (it is set directly @ template)
    houseFields() {
      return [
        {name: 'Adres', type: 'text', houseProp: 'address', placeholder: 'Podaj adres domu (minimum 5 znaków)'},
        {name: 'Piętro', type: 'number', houseProp: 'floorsNumber', placeholder: 'Podaj piętro domu (cyfrę)'},
        {name: 'Opis', type: 'textarea', houseProp: 'description', placeholder: 'Podaj opis domu (minimum 10 znaków)'},
        {name: 'Etykieta', type: 'text', houseProp: 'label', placeholder: 'Podaj etykietę domu (minimum 1 znak)'}
      ]
    },
    validatedData() {
      console.log(typeof this.house.floorsNumber)
      try {parseInt(this.house.floorsNumber)} catch {return false}
      return this.house.address.length > 5 && this.house.description.length > 10 && this.house.label.length > 1;
    }
  },
  methods: {
    async houseAdd() {
      if (this.validatedData) {
        const payload = {...this.house, floorsNumber: parseInt(this.house.floorsNumber)}
        console.warn('House ADDING payload: ', payload);
        // await this.$store.dispatch('addHouse', payload);
        this.$toasted.success(`Dodano nowy dom o adresie ${this.$store.getters.addedHouse}`)
        console.warn('House ADDED');
        this.housesList();
      } else this.$toasted.error('Błędne dane')
    },
    housesList() {
      console.warn('Houses LIST');
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
  text-align: center;
  letter-spacing: -0.05em;
}

.field-header {
  @extend .field;
  font-size: 1.5rem;
  font-weight: 600;
  color: #11B0F8;
}

.field-content {
  @extend .field;
  font-size: 1rem;
  font-weight: 400;
  color: #A9B1BD;
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

.m-1 {
  margin: 0.25rem;
}

</style>