<template>
    <div class="all">
      <div class="searchbar">
        <div style="width: 92%">
        <input type="text" placeholder="Enter Your Search" v-model="querystr" class="inp">
        <button class="btn" @click="search"> Search</button>
        </div>
        <div style="padding-top: 3vw;">
          <button @click="decrement"><i class="fa-solid fa-angles-left"></i></button>
          <span>{{this.indexlist[this.pagenumber]}}</span>
          <button @click="increment"><i class="fa-solid fa-angles-right"></i></button>
        </div>
      </div>
      <div v-if="movname.length == 0">
        <h1 style="color:white; margin-left:6vw;">No Matches</h1>
      </div>
      <div class="cards" v-else v-for="(res,index) in movname" :key="index">
        <div>
          <div class="content_img">
            <span class="xyz">{{res.vote_average}}</span>
            <img :src="`https://image.tmdb.org/t/p/w500/${res.poster_path}`" class="images" alt="errorimage">
            <div>{{res.overview}}</div>
          </div>
          <h2>{{res.original_title}}</h2>
          <p>Released: {{res.release_date}}</p>
          <button type="button" class="btn btn2"><router-link :to="`/${res.id}`" class="anc">Get More Info</router-link></button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MoviesData',
  data(){
    return{
      indexlist : [1],
      pagenumber:0,
      querystr:"",
      searchquerystr:"",
      movname:[],
      searchstate:false,
    }
  },
  mounted(){
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=bb5c9a25161603cb7d1205e55e4cbe88&language=en-US&page=1")
        .then((res)=>res.json())
        .then(data => {
          this.movname = data.results.filter((x) => x?.poster_path)
          this.indexlist= Array.from({length: data.total_pages}, (_, index) => index + 1)
        })
        .catch(err => console.log(err))
  },
  methods:{
    async search(){
      if(this.querystr == null || this.querystr.trim().length == 0){
        console.log("The search is empty");
      }
      else{
        this.searchstate=true
        this.indexlist=[1]
        this.pagenumber=0
        await fetch("https://api.themoviedb.org/3/search/movie?page="+this.indexlist[this.pagenumber]+"&api_key=bb5c9a25161603cb7d1205e55e4cbe88&query="+this.querystr+"\"")
            .then((res)=>res.json())
            .then(data => {
              this.movname = data.results.filter((x) => x?.poster_path)
              this.indexlist= Array.from({length: data.total_pages}, (_, index) => index + 1)
            })
            .catch(err => console.log(err))
        this.searchquerystr = this.querystr
        this.querystr = ""
      }

    },
    async pageChange() {
      if(this.searchstate){
        await fetch("https://api.themoviedb.org/3/search/movie?page="+this.indexlist[this.pagenumber]+"&api_key=bb5c9a25161603cb7d1205e55e4cbe88&query="+this.searchquerystr+"\"")
            .then((res)=>res.json())
            .then(data => {
              this.movname = data.results.filter((x) => x?.poster_path)
            })
            .catch(err => console.log(err))
      }
      else{
        await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bb5c9a25161603cb7d1205e55e4cbe88&language=en-US&page=${this.indexlist[this.pagenumber]}`)
            .then((res) => res.json())
            .then(data => {
              this.movname = data.results.filter((x) => x?.poster_path)
            })
            .catch(err => console.log(err))
      }
    },
    increment(){
      if(this.pagenumber<this.indexlist.length - 1) {
        console.log(this.indexlist.length)
        this.pagenumber++;
        this.pageChange()
      }
    },
    decrement(){
      if(this.pagenumber > 0) {
        this.pagenumber--;
        this.pageChange();
      }
    }
  }
}
</script>
<style>
.content_img{
  position: relative;
}

.content_img div{
  position: absolute;
  bottom: 0;
  background: black;
  color: white;
  font-family: sans-serif;
  visibility: hidden;

  transition: visibility 0s, opacity 0.5s linear;
}

.content_img:hover{
  cursor: pointer;
}

.content_img:hover div{

  visibility: visible;
  opacity: 0.9;
}
.searchbar{
  display:flex;
  position: sticky;
  top:0;
  padding-bottom:2vw ;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 100%);
  z-index: 1000;
}
.anc{
  color: #fff;
  cursor: grab;
  font-weight: 550;
  text-decoration: none;
}
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
