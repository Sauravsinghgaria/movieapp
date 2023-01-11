<template>
  <div>
    <div>
      <button><router-link to="/">Back</router-link></button>
    </div>
    <div>
      <div class="saw">
        <div>
          <img :src="`https://image.tmdb.org/t/p/w500/${this.res.backdrop_path}`" class="pic" alt="errorimage">
        </div>
        <div class="des">
          <h1>Title:  {{this.res.original_title}}</h1>
          <h2>Tagline: {{this.res.tagline}}</h2>
          <h4>Status: {{this.res.status}}</h4>
          <h4>Released: {{this.res.release_date}}</h4>
          <p>{{this.res.overview}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'MovieDesc',
  data(){
    return{
      userId:this.$route.params.id,
      res:Object,
    }
  },
  mounted(){
    fetch(`https://api.themoviedb.org/3/movie/${this.userId}?api_key=bb5c9a25161603cb7d1205e55e4cbe88&language=en-US`)
        .then((res)=>res.json())
        .then(data => this.res =data)
        .catch(err => console.log(err))
  },
}
</script>
<style>
.saw{
  display:inline-flex;
  margin-left:5vw;
  margin-top:5vw;
}
.pic{
  height: 400px;
  width: 500px;
}
.des{
  padding:3vw;
  text-align: left;
}
</style>