<template>
  <div>
    <MovieHead/>
    <MoviesData/>
  </div>
</template>
<script>
import MoviesData from "@/components/MoviesData.vue";
import MovieHead from "@/components/MoviesHeader.vue";
export default {
  name: 'App',
  components: {
    MovieHead,
    MoviesData
  }
}
</script>

<style>
body{
  margin: 0px;
}
</style>
