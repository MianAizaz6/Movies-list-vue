
<template>
  <div class="scroll-container">
    <div v-for="item in movieDetails.cast" :key="item.id" class="item">
      <img :src="getImageUrl(item?.profile_path)" className="carouselItem__img" />
      <div class="title"><b>{{ item.name }}</b></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  props: ['cast','movieDetails'],
  data() {
    return {
      img_300: "https://image.tmdb.org/t/p/w300"
    }
  },
  methods: {
    getImageUrl(url) {
      return this.img_300 + url;
    }
  }

}

</script>

<style>
.scroll-container {
  display: flex;
  overflow-x: auto;
  /* Enable horizontal scrolling */
  white-space: nowrap;
  /* Prevent wrapping of items */
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.item {
  display: inline-block;
  /* Display items in a row */
  margin-right: 20px;
  margin-top: 15px;
  /* Adjust margin between items */
}

/* Optionally, style your image and title elements */
.item img {
  width: 100px;
  /* Adjust image width as needed */
  height: auto;
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 5px black;
}

.title {
  font-size: 15px;
  /* Adjust font size as needed */
}
</style>