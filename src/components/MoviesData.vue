<template>
    <div class="all">
      <div>
        <input type="text" placeholder="Enter Your Search" class="inp">
        <button class="btn"> Clear Search</button>
      </div>
      <div class="cards">
        <img src="" alt="image1">
        <h2>Titles</h2>
        <p>Released: Date</p>
        <button type="button" class="btn2">Get More Info</button>
      </div>
      <div class="cards">
        <img src="" alt="image1">
        <h2>Titles</h2>
        <p>Released: Date</p>
        <button type="button" class="btn2">Get More Info</button>
      </div>
      <div class="cards">
        <img src="" alt="image1">
        <h2>Titles</h2>
        <p>Released: Date</p>
        <button type="button" class="btn2">Get More Info</button>
      </div>
      <div class="cards">
        <img src="" alt="image1">
        <h2>Titles</h2>
        <p>Released: Date</p>
        <button type="button" class="btn2">Get More Info</button>
      </div>
      <div class="cards">
        <img src="" alt="image1">
        <h2>Titles</h2>
        <p>Released: Date</p>
        <button type="button" class="btn2">Get More Info</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MoviesData',

}
</script>
<style>
.cards{
  margin-left: 6vw;
  margin-top: 4vw;
  display:inline-block;
}
.btn2{
  color:#ffffff;
  border: 1px solid orangered;
  background-color: #212121;

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
</style>
