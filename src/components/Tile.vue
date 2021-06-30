<template>
  <div class="tile items-center"
       :style="`${tileSize} background: url(${url}) fixed no-repeat; z-index: -1;`">
<!--       :style="(url && `background: url(${url}) fixed no-repeat; background-size: auto 50%`)">-->
    <!--  <div class="tile items-center" :style="tileSize">-->
    <!--    <div v-if="url" id="background" :style="tileSize">-->
    <!--      <img :src="url" class="stretch" alt=""/>-->
    <!--    </div>-->
    <div class="tile-content">
      <div class="h-1_5"/>
      <h1 class="text-center uppercase mb-0">{{ header }}</h1>
      <h4 class="text-center uppercase mb-8">{{ subHeader }}Czym jesteśmy i dokąd Zmierzamy</h4>
      <p class="text-center">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    url: String,
    childDepth: Number,
    header: String,
    subHeader: String,
    content: String,
  },
  computed: {
    tileSize() {
      const MAX_WIDTH_HEIGHT_IN_PERCENTAGE = 100;
      const BASIC_PADDING_IN_REM = 1;
      const size = MAX_WIDTH_HEIGHT_IN_PERCENTAGE / Math.pow(2, this.childDepth);
      const padding = BASIC_PADDING_IN_REM / this.childDepth;
      const maxWidth = `calc(${size}vw - ${padding}rem)`;
      const maxHeigth = `calc(${size}vh - ${padding}rem)`;
      return `width: min(${maxWidth}, ${maxHeigth}); height: min(${maxWidth}, ${maxHeigth});`
      // return `min-width: min(${maxWidth}, ${maxHeigth}); max-width: min(${maxWidth}, ${maxHeigth}); min-height: min(${maxWidth}, ${maxHeigth}); max-height: min(${maxWidth}, ${maxHeigth});`
    }
  }
}
</script>


<style scoped>
.items-center {
  align-items: center;
}

.tile {
  border-style: solid;
  border-width: 2px;
  overflow: auto;
}

.tile-content {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline: 0;
  position: relative;
  z-index: -1
}

.h-1_5 {
  height: 150px;
  max-height: 5vh;
}

h1, h4, p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline: 0;
}

.uppercase {
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.mb-0 {
  margin-bottom: 0;
}

.mb-8 {
  margin-bottom: 2rem;
}

#background {
  pointer-events: none;
  position: relative;
  left: -0.5rem;
  top: -0.5rem;
  z-index: -1;
}

.stretch {
  width: 100%;
  height: 100%;
}
</style>
