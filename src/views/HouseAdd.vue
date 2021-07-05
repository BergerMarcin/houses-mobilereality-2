<template>
  <div class="flex flex-col w-80 my-2">
    <div class="header">Nowy dom</div>

    <div class="flex-col w-100 my-2">
      <div v-for="(field, ind) in houseFields" :key="`house-field-${ind}`">
        <label class="field-header">{{field.name}}
          <input class="field-content" :type="field.type" :name="house[field.houseProp]" :placeholder="field.placeholder">
        </label>
        <div class="flex w-100 my-2">
          <div class="btn" :style="`disabled: ${!validatedData}`" @click="houseAdd()">Dodaj</div>
          <div class="btn" @click="housesList()">Cofnij (lista domów)</div>
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
        name: '',
        address: '',
        imgs: []
      }
    }
  },
  computed: {
    // NOTE: rows does not include action column (it is set directly @ template)
    houseFields() {
      return [
        {name: 'Nazwa', type: 'text', houseProp: 'name', placeholder: 'Podaj nazwę domu (minimum 3 znaki)'},
        {name: 'Adres', type: 'text', houseProp: 'address', placeholder: 'Podaj adres domu (minimum 5 znaków)'},
        {name: 'Zdjęcia', type: 'img', houseProp: 'img'},
      ]
    },
    validatedData() {
      return this.house.name.length > 3 && this.house.name.length > 5;
    }
  },
  methods: {
    houseAdd() {
      console.warn('House ADD');
      if (this.validatedData) {
        console.log('House ADDING on the way');
        // this.$store.dispatch({name: 'addHouse'});
      }
      this.housesList();
    },
    housesList() {
      console.warn('Houses LIST');
      // TODO: install & check router before start running
      // this.$router.push({name: 'HousesList'});
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
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #11B0F8;
}

.btn:hover {
  border-width: 4px;
  padding-top: calc(0.5rem - 2px);
  padding-bottom: calc(0.5rem - 2px);
}

.btn:active {
  border-width: 1px;
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
}

</style>