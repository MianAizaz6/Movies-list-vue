<template>
  <paginate
    :page-count="pageCount"
    :margin-pages="2"
    :click-handler="goToPage"
    :prev-text="'Previous'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
  />
</template>

<script>
import {computed, watch } from 'vue';
import Paginate from 'vue3-paginate';

export default {
  name:'PaginationComponent',
  components: {
    Paginate
  },
  props: {
    pageSize: Number, // Number of items per page
    totalItems: Number, // Total number of items
    currentPage: Number // Current page number
  },
  setup(props, context) {
    const pageCount = computed(() => Math.ceil(props.totalItems / props.pageSize));

    // Watch for changes in current page and emit an event
    watch(
      () => props.currentPage,
      (newPage) => {
        context.emit('page-change', newPage);
      }
    );

    // Go to a specific page
    const goToPage = (page) => {
      context.emit('page-change', page);
    };

    return {
      pageCount,
      goToPage
    };
  }
};
</script>
