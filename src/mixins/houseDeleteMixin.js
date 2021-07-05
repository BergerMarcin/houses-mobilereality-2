export const houseDeleteMixin = {
  methods: {
    async houseDelete(id, address) {
      console.log('House DELETE, id: ', id, 'name: ', address);
      await this.$swal({
        title: 'Usuwanie domu z aplikacji',
        html: `Dom pod adresem:<br/><strong>${address}</strong><br/>zostanie trwale usunięty z aplikacji.<br/><br/><u>Proszę potwierdź usunięcie tego domu</u>`,
        icon: 'warning',
        confirmButtonText: 'Potwierdzam usunięcie domu',
        cancelButtonText: 'Anuluj',
        confirmButtonColor: 'primary',
      }).then(async () => {
        console.log('House DELETing, id: ', id)
        // TODO: check dispatch before start running
        this.houses = await this.$store.dispatch('deleteHouse', {id})
          .then(() => {
            this.$toasted.info('Dom usunięto');
            this.houses = this.$store.getters('houses');
            this.$router.push({name: 'HousesList'});
          })
          .catch(() => {
            this.$toasted.error('Wystąpił błąd. Domu nie usunięto');
          });
      })
    }
  }
};
