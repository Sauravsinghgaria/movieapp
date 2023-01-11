<template>
    <div class="all">
      <div>
        <input type="text" placeholder="Enter Your Search" v-model="querystr" class="inp">
        <button class="btn" @click="search" > Search</button>
      </div>
      <div v-if="movname.length == 0">
        <h1 style="color:white; margin-left:6vw;">No Matches</h1>
      </div>
      <div class="cards" v-else v-for="(res,index) in movname" :key="index">
        <div >
          <span class="xyz">{{res.vote_average}}</span>
          <img :src="`https://image.tmdb.org/t/p/w500/${res.poster_path}`" class="images" alt="errorimage">
          <p style="display: none">{{res.overview}}</p>
          <h2>{{res.original_title}}</h2>
          <p>Released: {{res.release_date}}</p>
          <button type="button" class="btn btn2" @click="info"><router-link :to="`/MovieDesc/${res.id}`">Get More Info</router-link></button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'MoviesData',
  data(){
    return{
      querystr:"",
      movname:[],
    }
  },
  mounted(){
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bb5c9a25161603cb7d1205e55e4cbe88&language=en-US&page=1")
        .then((res)=>res.json())
        .then(data => this.movname = data.results)
        .catch(err => console.log(err))
  },
  methods:{
    async search(){
      if(this.querystr == null || this.querystr.trim().length == 0){
        console.log("The search is empty");
      }
      else{
        await fetch("https://api.themoviedb.org/3/search/movie?api_key=bb5c9a25161603cb7d1205e55e4cbe88&query="+this.querystr+"\"")
            .then((res)=>res.json())
            .then(data => {
              this.movname = data.results.filter((x) => x?.poster_path)
            })
            .catch(err => console.log(err))
        this.querystr = ""
      }

    },
    info(){

    }
  }
}
</script>
<style>
.xyz{
  float: left;
  margin-bottom: -35px;
  position: relative;
  background-color: orangered;
  padding: 3px 6px 10px 3px;
  border-bottom-right-radius: 8px;
}
.cards{
  margin-left: 4vw;
  margin-top: 5vw;
  display: inline-flex;
  width: 20vw;
  height: 44vw;
  text-align: center;
}

.btn2{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.all{
  background-color: #212121;
}
.btn{
  background-color: orangered;
  color: #fff;
  border:1px solid orangered;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding:8px 12px;
  cursor: grab;
}
.inp{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 8px 15px;
  color: orangered;
  margin-left: 6vw;
  margin-top: 2vw;
  border: 1px solid orangered;
}
.images{
  text-align: center;
  width: 100%;
  height: auto;
}
</style>
