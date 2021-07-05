export const houseDeleteMixin = {
  methods: {
    async houseDelete(id, name) {
      console.log('House DELETE, id: ', id, 'name: ', name);
      await this.$swal({
        title: 'Usuwanie domu z aplikacji',
        html: `Dom pod adresem:<br/><strong>${name}</strong><br/>zostanie trwale usunięty z aplikacji.<br/><br/><u>Proszę potwierdź usunięcie tego domu</u>`,
        icon: 'warning',
        confirmButtonText: 'Potwierdzam usunięcie domu',
        cancelButtonText: 'Anuluj',
        confirmButtonColor: 'primary',
      }).then(() => {
        console.log('House DELETing, id: ', id)
        // TODO: check dispatch before start running
        // this.houses = await this.$store.dispatch({name: 'deleteHouse', params: {id});
        // this.houses = this.$store.getters('houses');
        // this.$router.push({name: 'HousesList'});
      })
    }
  }
};
