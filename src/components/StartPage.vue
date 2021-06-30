<template>
  <div>
    <div class="flex">
      <Tile :childDepth=1
            url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
      <Tile :childDepth=1
            url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
<!--      <div class="flex">-->
<!--        <Tile :childDepth=2-->
<!--              url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
<!--              header="Kilka słów o nas"-->
<!--              subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
<!--              content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
<!--        />-->
<!--        <Tile :childDepth=2-->
<!--              url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
<!--              header="Kilka słów o nas"-->
<!--              subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
<!--              content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="flex">-->
<!--        <Tile :childDepth=2-->
<!--              url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
<!--              header="Kilka słów o nas"-->
<!--              subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
<!--              content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
<!--        />-->
<!--        <Tile :childDepth=2-->
<!--              url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
<!--              header="Kilka słów o nas"-->
<!--              subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
<!--              content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
<!--        />-->
<!--      </div>-->
    </div>
    <div class="flex">
      <Tile :childDepth=1
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
      <Tile :childDepth=1
            url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
    </div>
  </div>
</template>


<script>
import Tile from './Tile.vue'

export default {
  name: 'StartPage',
  components: {Tile}
}
</script>


<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
