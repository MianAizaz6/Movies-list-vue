
<template>
  <div>
    <span class="pageTitle">Trending</span>
    <div class="ContentModal">
      <img :src="getImageUrl(movieContent.poster_path)"  className="ContentModal__portrait" />
      <!-- <img src={ content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape } alt={content.name
        || content.title} className="ContentModal__landscape" /> -->
      <!-- <img src="../assets/blue.jpg" alt="" class="ContentModal__portrait"> -->
      <div class="ContentModal__about">
        <span class="ContentModal__title">
          {{JSON.stringify(movieContent.name) || movieContent.original_title}}
        </span>
       
        <i className="tagline">{{ movieContent.tagline }}</i>

        <!-- <i class="tagline">Jaime Reyes is a superhero whether he likes it or not.</i> -->

        <span class="ContentModal__description">
          {{ movieContent.overview}}
        
        </span>

        <div style="margin-bottom: 30px;">
          <GalleryComponent id={id} :cast="movieDetails?.cast" :movieDetails="movieDetails" />
        </div>

        <a :href="`https://www.youtube.com/watch?v=${movieVideo}`" target="_blank">
          <button class="youtubeVideo">Watch the Trailer</button>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import GalleryComponent from '../components/ui/GalleryComponent/index.vue'

export default {
  components: {
    GalleryComponent
  },
  data() {
    return {
      img_500: "https://image.tmdb.org/t/p/w500"
    }
  },
  methods: {
    getImageUrl(url) {
      // Combine the base URL and movie.url
      return this.img_500 + url;
    }
  },
  setup() {
    const route = useRoute();
    const movieId = ref(route.params.id);
    const mediaType = ref(route.params.media_type);

    const movieDetails = ref({});
    const movieVideo = ref({});
    const movieContent = ref({});
    

    onMounted(async () => {
      try {
        const detailsResponse = await axios.get(`https://api.themoviedb.org/3/${mediaType.value}/${movieId.value}/credits?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&language=en-US`);
        movieDetails.value = detailsResponse.data;

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      try {
        await axios.get(`https://api.themoviedb.org/3/${mediaType.value}/${movieId.value}/videos?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&language=en-US`).then((res) => {
          movieVideo.value = res.data.results[0]?.key;

        })
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }

      try {
        await axios.get(`https://api.themoviedb.org/3/${mediaType.value}/${movieId.value}?api_key=d8b7f37df1cb42b7e4dfca2d65c8cc30&language=en-US`).then((res) => {
          movieContent.value = res.data;
          console.log('==res content', res.data);
          console.log('==state content', JSON.stringify(movieContent.value.overview));
          
        })
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    });


    return {
      movieId,
      mediaType,
      movieDetails,
      movieVideo,
      movieContent
    };
  }
};
</script>

<style scoped>
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

.youtubeVideo {
  width: 100%;
  padding: 14px 40px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #f50157;
  cursor: pointer;
}

.gallary-container {
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  overflow-x: scroll;

}

/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"); */

.ContentModal__landscape {
  object-fit: contain;
  border-radius: 10px;
}

.ContentModal__portrait {
  display: none;
  object-fit: contain;
  border-radius: 10px;
}

.tagline {
  padding-bottom: 10px;
  align-self: center;
}

.ContentModal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
}

.ContentModal::-webkit-scrollbar {
  display: none;
}

.ContentModal__about {
  padding: 10px;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  justify-content: space-evenly;
  font-weight: 300;
}

.ContentModal__title {
  height: 12%;
  font-size: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ContentModal__description {
  display: flex;
  height: 40%;
  overflow-y: scroll;
  padding: 15px;
  border-radius: 20px;
  scrollbar-width: thin;
  /* Firefox */
  box-shadow: inset 0 0 5px #07a34d;
  text-align: justify;
  font-size: 14px;
}

.ContentModal__description::-webkit-scrollbar {
  display: none;
}

@media (min-width: 835px) {
  .ContentModal__landscape {
    display: none;
  }

  .ContentModal__portrait {
    display: flex;
    width: 38%;
  }

  .ContentModal {
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }

  .ContentModal__about {
    width: 58%;
    padding: 0;
    height: 100%;
  }

  .ContentModal__title {
    font-size: 3.5vw;
  }

  .ContentModal__description {
    font-size: 22px;
  }
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
