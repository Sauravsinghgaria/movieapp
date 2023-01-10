<template>
  <header class="heading">
    <div style="position: absolute;">
      <div class="headclass" style="margin-top: 15vw;margin-left: 6vw;">
        <p>Saurav Movie App</p>
        <h1>Now Streaming</h1>
        <button> View Movies</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MoviesHeader',


}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600&display=swap');

*{
  font-family: 'Karla',sans-Serif;
}
.heading{
  background-image: url("../assets/movieHero.jpg");

  width:100%;
  height:27vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1{
  color:#fff;
  font-weight: bolder;
}
.headclass button{
  background-color: orangered;
  color: #fff;
  border:1px solid orangered;
  border-radius: 8px;
  padding:8px 12px;
}

p{
  color: orangered;
  margin:0px;
}
</style>