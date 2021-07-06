<template>
  <div class="flex justify-center m-4">
  <div class="flex flex-col">
    <div class="flex">
      <Tile tileId="00" :childDepth=1 :content="startPageContent[0][0]"/>
      <div class="flex flex-col">
        <div class="flex">
          <Tile :childDepth=2 tileId="10" :content="startPageContent[1][0]"/>
          <Tile :childDepth=2 tileId="11" :content="startPageContent[1][1]"/>
        </div>
        <div class="flex">
          <Tile :childDepth=2 tileId="12" :content="startPageContent[1][2]"/>
          <Tile :childDepth=2 tileId="13" :content="startPageContent[1][3]"/>
        </div>
      </div>
    </div>
    <div class="flex">
      <Tile :childDepth=1 tileId="20" :content="startPageContent[2][0]"/>
      <Tile :childDepth=1 tileId="30" :content="startPageContent[3][0]"/>
    </div>
  </div>
  </div>
</template>


<script>
import Tile from '../components/Tile.vue'

export default {
  name: 'StartPage',
  components: {Tile},
  data() {
    return {
      startPageContent: [
        [
          {
            // urlBackground: 'https://i.picsum.photos/id/690/200/200.jpg?hmac=DN6slU20ktSeMSXbM6U8BG_YHhebxEl3S70qNurkzk8',
            header: "Nasza oferta",
            subHeader: "Dowiedz się co możemy Tobie zaoferować",
            regularTexts: [
              "Some line 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien leo, dapibus sit amet urna sed, ultricies ullamcorper lectus. Quisque libero erat, molestie nec vulputate eget, sagittis sed diam. Phasellus rutrum et eros ut porta. Praesent purus ipsum, gravida quis metus a, ultricies rhoncus augue. Nulla condimentum eros metus, in facilisis nulla viverra at. Nullam lacinia malesuada lorem quis viverra. Nullam sollicitudin tellus magna, tileId placerat erat tincidunt mattis.",
              "Some line 2. Nam vitae risus pretium, pulvinar lacus vel, euismod elit. Mauris ac diam tincidunt, tristique metus facilisis, luctus arcu. Proin tileId turpis magna. Sed in lorem non tellus accumsan finibus. Mauris eleifend nisi urna. Ut tempus, dolor tileId hendrerit semper, lorem mauris eleifend nulla, posuere blandit justo eros sed ante. Quisque magna nibh, facilisis eu malesuada a, ultricies rutrum sem. Maecenas ac nisl vitae orci pellentesque sollicitudin eget faucibus dui. Aenean ac molestie nulla. Nullam maximus lacus nulla, sit amet laoreet erat sodales ut."
            ],
            btn: {text: 'Zobacz więcej', routeName: 'HousesList'}
          },
        ],
        [
          {urlBackground: 'https://i.picsum.photos/id/147/100/100.jpg?hmac=ZKzrDm4MliOp9keOjaqpf9qNdBrrTTu-_C5mfgA6uMk'},
          {urlBackground: 'https://i.picsum.photos/id/485/100/100.jpg?hmac=ybyMzdLx5nwRmJ8nGEHmLCRShOQiCR614gMH7Nm9y1c'},
          {urlBackground: 'https://i.picsum.photos/id/328/100/100.jpg?hmac=P5_NrWitwAoKkJWb8RJbWH2Gznx3jUIcVcLkZgS12Qs'},
          {
            urlBackground: 'https://i.picsum.photos/id/388/100/100.jpg?hmac=3-5-nz-Kq02kWaGIao86f6BScY0d2KkFAJ-2a-2U9c4',
            highlightedTexts: ["Phasellus rutrum et eros ut porta. Praesent purus ipsum, gravida quis metus a, ultricies rhoncus augue. Nulla condimentum eros metus, in facilisis nulla viverra at. Nullam lacinia malesuada lorem quis viverra. Nullam sollicitudin tellus magna, tileId placerat erat tincidunt mattis."]
          }
        ],
        [
          {
            urlBackground: 'https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY',
            headerDescriptions: ['budowa domów z drewna', 'budowa bram wjzadowych', 'budowa czegokolwiek', 'budowa drzwi', 'budowa pustostanów']
          }
        ],
        [
          {
            // urlBackground: 'https://i.picsum.photos/id/690/200/200.jpg?hmac=DN6slU20ktSeMSXbM6U8BG_YHhebxEl3S70qNurkzk8',
            header: "Kilka słów o nas",
            subHeader: "Czym jesteśmy i dokąd Zmierzamy",
            regularTexts: [
              "Line 1.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf",
              "Line 2.  sdfsadfasdfsad fasdfsdfsadfasd fsadfasdfsdfsadfa sdfsadfasdfsdfsa dfasdfsadfasdfsdfsa dfasdfsadfasdf"
            ],
            btn: {text: 'Zobacz więcej', routeName: 'HousesList'}
          }
        ]
      ]
    }
  }
}
</script>


<style scoped>
</style>
