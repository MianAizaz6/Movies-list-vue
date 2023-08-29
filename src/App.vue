<script setup>
import { RouterView } from 'vue-router';
import Header from './components/ui/Header/Header.vue';
import BottomNav from './components/ui/BottomNav/bottom-nav.vue';
</script>

<template>
  <div class="app-container">
    <div class="header">
      <Header />
    </div>
    <div class="content">
      <RouterView />
    </div>


    <div class="bottomNav">
      <BottomNav />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: 1fr;
}


.app-container .header {
  position: sticky;
  top: 0px;
  left: 0px;
}

.app-container .content {
  margin-top: 85px;
  height: 76vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding: 0px 80px;
  width: 100vw;
  /* padding: 20px; */
}
.bottomNav{
  position: absolute;
  bottom: 0;
  left: 0;
}

/* 
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */

@media (max-width: 1024px) {

  .app-container {
    display: grid;
    grid-template-columns: 1fr;
  }

  .app-container .content {
    margin-top: 85px;
    height: 76vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 0px 30px;
    /* padding: 20px; */
  }
}
</style>
