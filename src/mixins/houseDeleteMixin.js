export const houseDeleteMixin = {
  methods: {
    async houseDelete(id, address) {
      await this.$swal({
        title: 'Usuwanie domu z aplikacji',
        html: `Dom pod adresem:<br/><strong>${address}</strong><br/>zostanie trwale usunięty z aplikacji.<br/><br/><u>Proszę potwierdź usunięcie tego domu</u>`,
        icon: 'warning',
        confirmButtonText: 'Potwierdzam usunięcie domu',
        cancelButtonText: 'Anuluj',
        confirmButtonColor: 'primary',
      }).then(async () => {
        await this.$store.dispatch('deleteHouse', {id});
        if (this.$store.getters.deletedHouse.id) {
          this.$toasted.info(`Usunięto dom o adresie ${this.$store.getters.deletedHouse.address}`);
          if (this.$route.name !== 'HousesList') await this.$router.push({name: 'HousesList'});
          this.houses = this.$store.getters.houses;
        }
      })
    }
  }
};
