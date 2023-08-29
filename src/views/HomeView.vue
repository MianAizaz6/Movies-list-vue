<script setup>
import MovieCard from '../components/ui/BottomNav/MovieCard/movie-card.vue';
// import Header from '../components/ui/Header/Header.vue';
</script>

<template>
  <div class="container">
    <span className="pageTitle">Trending</span>
    <div class="trending">
      <MovieCard v-for="data in movies" :key="data.id" :movie="data" media_type="Movie" />
    </div>

    <div class="pagination">
      <PaginationComponent :page-size="pageSize" :total-items="totalItems" :current-page="currentPage"
        @page-change="handlePageChange" />
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import PaginationComponent from '../components/ui/Pagination/PaginationComponent.vue';
import { FetchTrendingMovies } from '../services/movies';


export default {
  name: 'HomeView',
  components: {
    MovieCard,
    PaginationComponent
  },
  data() {
    return {
      todoId: ref(1), // Initial todoId value
      movies: undefined, // Fetched data
      pageSize: 30, // Number of items per page
      currentPage: 2, // Current page
      totalItems: 20000
    };
  },
  methods: {
    handlePageChange(newPage) {
    
      this.currentPage = newPage;
      FetchTrendingMovies(`page=${newPage}`).then((res) => {
        console.log(res.data);
        this.movies = res.data.results;
      })
    }
  },
  mounted() {
    FetchTrendingMovies(`page=${this.currentPage}`).then((res) => {
      console.log(res.data);
      this.movies = res.data.results;
    })
  }
};
</script>


<style scoped>
.container {
  max-width: 100%;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 30px 10px;
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
