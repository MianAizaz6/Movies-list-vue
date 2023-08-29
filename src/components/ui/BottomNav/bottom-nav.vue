<!-- eslint-disable vue/multi-word-component-names -->
<script>
// import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="nav" style="width: 100vw;">
    <div class="item">
      <img src="../../../assets/trend.svg" alt="">
      <RouterLink to="/" class="nav-item">Trending</RouterLink>
    </div>

    <div class="item">
      <img src="../../../assets/movie.svg" alt="">
      <RouterLink to="/movies" class="nav-item">Movies</RouterLink>
    </div>

    <div class="item">
      <img src="../../../assets/tv-show.svg" alt="">
      <RouterLink to="/tv-shows" class="nav-item">TV Shows</RouterLink>
    </div>

    <div class="item">
      <img src="../../../assets/search.svg" alt="">
      <RouterLink to="/search" class="nav-item">Search</RouterLink>
    </div>

  </div>
</template>

<style scoped>
.nav {
  padding: 15px 200px;
  background-color: rgb(7, 7, 7);
  color: var(--color-primary);
  widows: 100vw !important;
  display: flex;
  justify-content: space-evenly;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

.nav .item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nav .item img{
  height: 23px;
}
.nav .item .nav-item{
  font-weight: 500;
}

@media (max-width:1000px) {
  .nav {
  padding: 15px 20px;
  background-color: rgb(7, 7, 7);
  color: var(--color-primary);
  /* widows: 100vw !important; */
  display: flex;
  justify-content: space-evenly;
}
}
</style>