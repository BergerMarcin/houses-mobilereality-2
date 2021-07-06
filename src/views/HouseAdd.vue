<template>
  <div class="flex justify-center my-2">
    <div class="flex flex-col w-4/5 my-2">
      <div class="view-header">Nowy dom</div>

      <div class="flex-col w-100 my-2">
        <div class="field-header mb-4" v-for="(field, ind) in houseFields" :key="`house-field-${ind}`">
          <label class="inline-flex">{{ field.name }}
            <textarea v-if="field.type === 'textarea'" class="field-content text-input border-input ml-3" :type="field.type"
                      rows="4" cols="50" v-model="house[field.houseProp]" :placeholder="field.placeholder"/>
            <input v-else class="field-content text-input border-input ml-3" :type="field.type"
                   size="50" v-model="house[field.houseProp]" :placeholder="field.placeholder"/>
          </label>
        </div>
        <div class="flex justify-center">
          <div class="btn mt-12 mb-6" :style="`disabled: ${!validatedData}`" @click="houseAdd()">Dodaj</div>
        </div>
        <div class="flex justify-center">
          <div class="btn my-2" @click="housesListRoute()">Przejdź do listy domów</div>
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
      try {
        this.houseFields.filter(hf => hf.type === 'number').forEach(hf => parseInt(this.house[hf]))
      } catch {
        return false
      }
      return this.house.address.length > 5 && this.house.description.length > 10 && this.house.label.length > 1;
    }
  },
  methods: {
    async houseAdd() {
      if (this.validatedData) {
        const payload = {...this.house, floorsNumber: parseInt(this.house.floorsNumber)}
        await this.$store.dispatch('addHouse', payload);
        if (this.$store.getters.addedHouse.id) {
          this.$toasted.success(`Dodano nowy dom o adresie ${this.$store.getters.addedHouse.address}`)
          this.housesListRoute();
        }
      } else this.$toasted.error('Wprowadź poprawne dane domu')
    },
    housesListRoute() {
      this.$router.push({name: 'HousesList'});
    }
  }
}
</script>

<style scoped>
.text-input {
  font-size: 1.15rem;
  color: theme('colors.input');
}

.border-input{
  border-width: 2px;
  border-radius: 4px;
  border-color: theme('colors.input');
}

</style>