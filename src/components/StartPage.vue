<template>
  <div class="flex flex-col">
    <div class="flex">
      <Tile :childDepth=1
            url="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
            header="Kilka słów o nas"
            subHeader="Czym jesteśmy i dokąd Zmierzamy"
            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
      />
      <!--      <div class="flex flex-col">-->
      <!--        <div class="flex">-->
      <!--          <Tile :childDepth=2-->
      <!--                url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
      <!--          />-->
      <!--          <Tile :childDepth=2-->
      <!--                url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="flex">-->
      <!--          <Tile :childDepth=2-->
      <!--                url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
      <!--          />-->
      <!--          <Tile :childDepth=2-->
      <!--                url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
      <!--                header="Kilka słów o nas"-->
      <!--                subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
      <!--                content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <div class="flex">-->
      <!--      <Tile :childDepth=1-->
      <!--            header="Kilka słów o nas"-->
      <!--            subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
      <!--            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
      <!--      />-->
      <!--      <Tile :childDepth=1-->
      <!--            url="https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0"-->
      <!--            header="Kilka słów o nas"-->
      <!--            subHeader="Czym jesteśmy i dokąd Zmierzamy"-->
      <!--            content="sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"-->
      <!--      />-->
    </div>
  </div>
</template>


<script>
import Tile from './Tile.vue'

export default {
  name: 'StartPage',
  components: {Tile},
  data() {
    return {
      startPageContent: [
        [
          {
            url: 'https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY',
            header: "Kilka słów o nas",
            subHeader: "Czym jesteśmy i dokąd Zmierzamy",
            content: [
                "Line 1.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf",
                "Line 2.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
            ],
            btn: ''
          }
        ],
        [
          {url: 'https://i.picsum.photos/id/147/100/100.jpg?hmac=ZKzrDm4MliOp9keOjaqpf9qNdBrrTTu-_C5mfgA6uMk'},
          {url: 'https://i.picsum.photos/id/485/100/100.jpg?hmac=ybyMzdLx5nwRmJ8nGEHmLCRShOQiCR614gMH7Nm9y1c'},
          {url: 'https://i.picsum.photos/id/328/100/100.jpg?hmac=P5_NrWitwAoKkJWb8RJbWH2Gznx3jUIcVcLkZgS12Qs'},
          {
            url: 'https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY',
            description: "Kilka słów o nas",
            subHeader: "Czym jesteśmy i dokąd Zmierzamy",
            content: "sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
          }
        ],
        [
            {
              url: 'https://i.picsum.photos/id/242/200/200.jpg?hmac=Z3aa8zbEQkEMFgnVh0Pn96vmCZHhJ17qzCrePYksrcY',
              headerDescr: ['budowa domów z drewna', 'budowa bram wjzadowych', 'budowa czegokolwiek', 'budowa drzwi', 'budowa pustostanów']
            }
        ],
        [
          {
            url: 'https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY',
            header: "Nasza oferta",
            subHeader: "Dowiedz się co możemy Tobie zaoferować",
            content: [
              "Line 1.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf",
              "Line 2.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
            ],
            btn: ''
          },
        ]
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}
</style>
