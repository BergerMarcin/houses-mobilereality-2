<template>
  <div :id="`tile-${tileId}`" :style="`${tileSize}`">
    <div class="tile" :style="content.urlBackground && `background: url(${content.urlBackground}) no-repeat; background-size: 100%;`">
    <div :id="`tile-${tileId}-content`" class="tile-content" :style="tileContentOverflowed && `justify-content: start;`">
      <h1 v-if="content.header" class="text-center uppercase mt-2">{{ content.header }}</h1>
      <h4 v-if="content.subHeader" class="text-theme-primary text-center uppercase mb-8">{{ content.subHeader }}</h4>
      <h3 v-for="(line, index) in content.headerDescriptions" :key="`hD-${index}`" class="text-center mb-4">{{ line }}</h3>
      <h5 v-for="(line, index) in content.highlightedTexts" :key="`hT-${index}`" class="text-center mb-4">{{ line }}</h5>
      <p v-for="(line, index) in content.regularTexts" :key="`rT-${index}`" class="text-center mb-2">{{ line }}</p>
      <div v-if="content.btn" @click="clickHandler" class="btn">{{ content.btn.text }}</div>
    </div>
  </div>
  </div>
</template>

<script>
/**
 * content = {
 *   urlBackground: String,
 *   header: String,
 *   subHeader: String,
 *   headerDescriptions: Array[String],
 *   highlightedTexts: Array[String],
 *   regularTexts: Array[String],
 *   btn: String
 * }
 **/
export default {
  name: "Tile",
  props: {
    tileId: String,
    childDepth: Number,
    content: Object
  },
  data ()  {
    return {
      tileSize: String,
      tileContentOverflowed: false
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.setTileContentOverflowed();
      this.setTileSize();
    });
    this.setTileSize();
    this.setTileContentOverflowed();
  },
  methods: {
    clickHandler() {
      console.log(`CLICKED: `, this.content.btn);
      this.$router.push({name: this.content.btn.routeName});
    },
    setTileSize() {
      const BASIC_PADDING_IN_PX = 16;
      const vw = window.innerWidth;   // in pixels
      const vh = window.innerHeight;  // in pixels
      const maxWidth = Math.round(0.5 * vw - BASIC_PADDING_IN_PX)     // `calc(${percentSize}vw - ${padding}rem)`;
      const maxHeight = Math.round(0.5 * vh - BASIC_PADDING_IN_PX)    // `calc(${percentSize}vh - ${padding}rem)`;
      let size = Math.min(maxWidth, maxHeight);
      size -= size % 2
      if (this.childDepth === 2) size = size / 2
      this.tileSize = `width: ${size}px; height: ${size}px;`   // `width: min(${maxWidth}, ${maxHeigth}); height: min(${maxWidth}, ${maxHeigth});`;
    },
    /**
     * Determine if the tile content (an HTML element's content) overflows
     * (based on https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows)
     *
     * Applied in case turning axis with `flex-direction: column;` and `justify-content: center;` of scrollable element
     * The issue is caused by overflow which is taken wrong width/height or top of the scrollable element (overflow is taken
     * width instead height )
     * Based on that function flag/Boolean it is set element `justify-content: start-end;` (instead of
     * `justify-content: center;`)
     **/
    setTileContentOverflowed () {
      this.tileContentOverflowed = false;
      let el = document.getElementById(`tile-${this.tileId}`)
      let elContent = document.getElementById(`tile-${this.tileId}-content`)
      if (el && elContent) {
        let curOverflow = elContent.style.overflow;
        if (!curOverflow || curOverflow === "visible") elContent.style.overflow = "hidden";
        let isOverflowing = el.clientWidth < elContent.scrollWidth - 2 || el.clientHeight < elContent.scrollHeight - 2;
        elContent.style.overflow = curOverflow;
        this.tileContentOverflowed = isOverflowing;
      }
    }
  }
}
</script>


<style scoped>
.tile {
  display: flex;
  //border-style: solid;
  //border-width: 2px;
  width: 100%;
  height: 100%;
}

.tile-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: auto;
  font-family: sans-serif;
  letter-spacing: -0.1em;
  width: 100%;
  height: 100%;
}

h1, h3, h4, h5, p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline: 0;
}

p {
  letter-spacing: -0.05em;
  color: #A9B1BD;
}

.btn {
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  color: #11B0F8;
  text-align: center;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #11B0F8;
}

.btn:hover {
  border-width: 4px;
  margin-top: calc(3rem - 4px);
}

.btn:active {
  border-width: 1px;
  margin-top: calc(3rem + 2px);
}

.uppercase {
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.text-theme-primary {
  color: #11B0F8;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-2 {
  margin-top: 1rem;
}
</style>
