<template>
<!--  <div class="flex-row">-->
    <div class="flex">
      <Tile :childDepth=1
            url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
    </div>
<!--  </div>-->
</template>


<script>
import Tile from './Tile.vue'

export default {
  name: 'StartPage',
  components : { Tile }
}
</script>


<style scoped lang="scss">
 .flex {
   flex: 1 1 0%;
 }
</style>
