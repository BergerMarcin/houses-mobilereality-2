<template>
  <!--      <div class="tile items-center background-layer"-->
  <!--           style="background: url('https://i.picsum.photos/id/401/800/800.jpg?hmac=AaEwn38HPzxdKKMhHiPhfq4bDGqRzarfJ23JIrAkif0')fixed no-repeat; background-size: auto 50%;">-->
  <div class="tile items-center" :style="tileSize">
    <div id="background" :style="tileSize">
      <img :src="url" class="stretch" alt=""/>
    </div>
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
    childDepth: {
      type: Number,
      require
    },
    header: String,
    subHeader: String,
    content: String,
  },
  computed: {
    tileSize () {
      const size = 100/(this.childDepth + 1);
      return `width: min(${size}vw, ${size}vh); height: min(${size}vw, ${size}vh);`
    }
  }
}
</script>


<style scoped>
.items-center {
  align-items: center;
}

.tile {
  padding: 0.5rem;
  border-style: solid;
  border-width: 2px;
  overflow: auto;
}

.tile-content {
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
