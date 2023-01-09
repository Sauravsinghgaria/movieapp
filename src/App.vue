<template>
  <div>
    <MovieHead/>
    <MoviesData/>
  </div>
</template>
<script>
import MovieHead from "./components/MoviesHeader.vue"
import MoviesData from "@/components/MoviesData.vue";
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
