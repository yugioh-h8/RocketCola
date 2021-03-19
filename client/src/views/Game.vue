<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="txt">
          <h2>Player 1</h2>
          <br>
          <p class="pointP1">{{point1}}</p>
        </div>
        <div class="images1">
          <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can1" v-if="count === 2">
          <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can2" v-if="count === 1">
          <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can3" v-if="count === 0">
          <button @click.prevent="shake" type="button" class="btn shake1">SHAKE</button>
        </div>
        <img class="p1Game" src="https://media3.giphy.com/media/TJmoBmGk4XXkcI6P3t/giphy.gif" alt="test">
      </div>
      <div class="col-6">
        <div class="txt2">
          <h2>Player 2</h2>
          <br>
          <p class="pointP2">{{point2}}</p>
        </div>
        <div class="images2">
          <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can2" v-if="count2 === 1">
          <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can3" v-if="count2 === 0">
          <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can1" v-if="count2 === 2">
          <button @click.prevent="shake2" type="button" class="btn shake2">SHAKE</button>
        </div>
        <img class="p2Game" src="https://i.gifer.com/X5NY.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Game',
  data () {
    return {
      count: 0,
      count2: 0,
      point1: 0,
      point2: 0
    }
  },
  methods: {
    shake () {
      console.log(this.point1)
      this.count = Math.floor(Math.random()* 3)
      this.point1 += 1
    },
    shake2 () {
      this.count2 = Math.floor(Math.random()* 3)
      this.point2 += 1
    }
  }
}
</script>

<style>

@media (min-width: 1200px) and (max-width: 1400px) {
  .p1Game{
    position: relative;
    right : 15em;
    bottom : 9em;
    width : 374px
  }
  .p2Game{
    position: relative;
    left : 9em;
    bottom : 11.5em;
    width : 300px;
  }
  .player1can1{
      display: flex;
      position: relative;
      left : 5em;
      top: 150px;
      width : 26em;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
  }
  .player1can2{
    display: flex;
    position: relative;
    left : 5em;
    top: 10em;
    width : 26em;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }
  .player1can3{
    display: flex;
    position: relative;
    left : 5em;
    top: 150px;
    width : 26em;
  }
  .shake1 {
    position: relative;
    top : 11.5em;
    color : white !important;
    letter-spacing: 2px;
    background-color : #7A3672!important;
  }
  .player2can1{
    display: flex;
    width : 13em;
    position: relative;
    left : 9em;
    top: 8em;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  .player2can2{
    display: flex;
    width : 13em;
    position: relative;
    left : 9em;
    top: 8em;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }
  .player2can3{
    display: flex;
    position: relative;
    left : 9em;
    top: 8em;
    width : 13em;
  }
  .shake2 {
    position: relative;
    top : 9.7em;
    left : -0.8em;
    color : white !important;
    letter-spacing: 2px;
    background-color : #7A3672!important;
  }

  .txt {
    position: relative;
    top : 6.5em;
    color : #E4ACE5;
  }

  .pointP1 {
    font-size : 30px;
    margin-top : -1em;
    margin-bottom: -1em;
  }

  .txt2 { 
    position: relative;
    top : 6em;
    left: -1em;
    color : #E4ACE5;
  }

  .pointP2 {
    font-size : 30px;
    margin-top : -1em;
    margin-bottom: -1em;
  }
}

/* @media (min-width: 950px)  { 
  .player1can1{
      display: flex;
      position: relative;
      left : 1.8em;
      top: 150px;
      width : 26em;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
  }
  .player1can2{
    display: flex;
    position: relative;
    left : 1.8em;
    top: 10em;
    width : 26em;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }
  .player1can3{
    display: flex;
    position: relative;
    left : 1.8em;
    top: 150px;
    width : 26em;
  }
  .shake1 {
    position: relative;
    top : 11.5em;
    color : white !important;
    letter-spacing: 2px;
    background-color : #7A3672!important;
  }
  .player2can1{
    display: flex;
    width : 13em;
    position: relative;
    left :7em;
    top: 8em;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  .player2can2{
    display: flex;
    width : 13em;
    position: relative;
    left :7em;
    top: 8em;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
  }
  .player2can3{
    display: flex;
    position: relative;
    left :7em;
    top: 8em;
    width : 13em;
  }
  .shake2 {
    position: relative;
    top : 9.7em;
    left : -0.8em;
    color : white !important;
    letter-spacing: 2px;
    background-color : #7A3672!important;
  }

  .txt {
    position: relative;
    top : 6.5em;
    color : #E4ACE5;
  }

  .pointP1 {
    font-size : 30px;
    margin-top : -1em;
    margin-bottom: -1em;
  }

  .txt2 { 
    position: relative;
    top : 6em;
    left: -1em;
    color : #E4ACE5;
  }

  .pointP2 {
    font-size : 30px;
    margin-top : -1em;
    margin-bottom: -1em;
  }
} */

</style>
