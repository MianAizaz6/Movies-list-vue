
<template>
  <div class="container">
    <span class="pageTitle">Search</span>
    <div class="searchContainer">
      <input type="text" v-model="searchText" name="searchText" class="searchBox">
      <button class="clearButton" @click="clearSearch" v-if="searchText !== ''"> Clear search</button>
    </div>
    <div class="trending" v-if="searchResults.length > 0">
      <MovieCard v-for="data in searchResults" :key="data.id" :movie="data" media_type="Movie" />
    </div>
    <div v-else>
      <h1 class="pageTitle">Please Type a movie name to search</h1>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import MovieCard from '../components/ui/BottomNav/MovieCard/movie-card.vue';

const searchText = ref('');
const searchResults = ref([]);

const clearSearch = () => {
  searchText.value = ''; // Clear the search value
  searchResults.value = []; // Clear the search results
};

// Watch for changes in searchText and trigger API call
watch(searchText, async (newValue) => {
  if (newValue.trim() !== '') {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&language=en-US&query=${newValue}&page=1&include_adult=false`);
      searchResults.value = response.data.results;
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  } else {
    searchResults.value = [];
  }
});
</script>

<style scoped>
.container {
  max-width: 100%;
}

.pageTitle {
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  padding: 4px;
  border-radius: 50px;
  font-size: 2vw;
  font-family: var(--font-base);
  color: hsla(160, 100%, 37%, 1);
  font-weight: 700;
  margin-bottom: 10px;
}

.searchContainer {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

}

.searchBox {
  width: 85%;
  height: 50px;
  border: none;
  box-shadow: 1px 3px 5px black;
  font-size: 16px;
  padding: 0px 20px;
  border-radius: 8px;
}

.clearButton {
  font-size: 16px;
  color: hsla(160, 100%, 37%, 1);
  padding: 5px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}


.trending {
  /* display: flex;
  flex-wrap: wrap;
  gap: 30px; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;


}

@media (max-width:1000px) {
  .trending {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .pageTitle {
    font-size: 25px;
  }
}
</style>
