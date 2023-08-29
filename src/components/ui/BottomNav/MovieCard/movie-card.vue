<!-- eslint-disable vue/multi-word-component-names -->


<template>
  <!-- Card content -->
  <router-link class="link" :to="`/movie-details/${media_type === 'Tv Show' ? 'tv' : 'movie'}/` + movie.id">
    <div class="media">
      <div class="badge">
        <p>8.5</p>
      </div>

      <img className="poster" :src="getImageUrl(movie.backdrop_path)" />

      <b className="title">{{ movie.title || movie.name }}</b>
      <span className="subTitle">
        {{ media_type }}
        <span className="subTitle">{{ movie.first_air_date || movie.release_date }}</span>
      </span>
    </div>
  </router-link>
</template>


<script>
export default {
  name: 'MovieCard',
  props: ['movie', 'media_type'],
  data() {
    return {
      img_300: "https://image.tmdb.org/t/p/w300"
    }
  },
  methods: {
    getImageUrl(url) {
      // Combine the base URL and movie.url
      return this.img_300 + url;
    }
  }
}
</script>

<style scoped>
.media {
  display: flex;
  flex-direction: column;
  /* width: 18%; */
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  font-family: var(--font-base);
  cursor: pointer;
}

.media .badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 25px;
  height: 25px;
  background: hsla(160, 100%, 37%, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  font-size: 10px;
  font-weight: 700;
  color: black;
}

.media:hover {
  background-color: white;
  color: black;
}

@media (max-width: 550px) {
  .media {
    width: 100%;
  }

}

.poster {
  border-radius: 10px;
  min-height: 300px;
  max-width: 100%;
  object-fit: cover;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
  font-weight: 600;

}

.subTitle {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  padding: 0 2px;
  padding-bottom: 3px;
  font-weight: 600;
}
</style>