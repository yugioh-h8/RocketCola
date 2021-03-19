<template>
  <div class="container">
    <h1 style="color: red"> {{this.$store.state.winner}} </h1>
    <div class="row">
      <div class="col-6">
        <div class="txt">
          <h2>Player 1</h2>
          <br>
          <p class="pointP1">{{this.$store.state.poinPlayer1}}</p>
        </div>
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can1" v-if="count === 2">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can2" v-if="count === 1">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can3" v-if="count === 0">
        <button @click.prevent="shake" type="button" class="btn shake1">SHAKE</button>
      </div>
      <div class="col-6">
        <div class="txt2">
          <h2>Player 2</h2>
          <br>
          <p class="pointP2">{{this.$store.state.poinPlayer2}}</p>
        </div>
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can2" v-if="count2 === 1">
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can3" v-if="count2 === 0">
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can1" v-if="count2 === 2">
        <button @click.prevent="shake2" type="button" class="btn shake2">SHAKE</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Shake from '../audio/shake.mp4'
import Cola from '../audio/cola.mp4'
import Launch from '../audio/launchrocket.mp4'
import Gamesong from '../audio/gamesong.mp4'
const gamesong = new Audio(Gamesong)
const launch = new Audio(Launch)
const cola = new Audio(Cola)
const shake = new Audio(Shake)
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
      this.count = Math.floor(Math.random()* 3)
      this.point1 += 1
      this.$socket.emit('move', 'playerOneClick');
      shake.play()
      cola.play()
      setTimeout(() => {
          shake.play()
          cola.play()
        }, 1100)
    },
    shake2 () {
      this.count2 = Math.floor(Math.random()* 3)
      this.point2 += 1
      this.$socket.emit('move', 'playerTwoClick');
      shake.play()
      cola.play()
      setTimeout(() => {
          shake.play()
          cola.play()
        }, 1100)
    }
  },
  created () {
    gamesong.play()
  },
  sockets: {
    position (playerPosition) {
      this.$store.commit('SET_POIN_1', playerPosition)
    },
    finish (payload) {
      this.$store.commit('SET_STATUS', true)
      if (payload.poinPlayer1 > payload.poinPlayer2) {
        this.$store.commit('SET_WINNER', 'Player 1 Win');
        // localStorage.removeItem('access_token_1')
        // localStorage.removeItem('access_token_2')
        this.$store.commit('SET_TOKEN_1', false);
        this.$store.commit('SET_TOKEN_2', false);
        launch.play()
        gamesong.pause()
        setTimeout(() => {
          launch.pause()
          this.$router.push('/gameover');
        }, 3000)
      } else {
        this.$store.commit('SET_WINNER', 'Player 2 Win');
        // this.$router.push('/');
        // localStorage.removeItem('access_token_1')
        // localStorage.removeItem('access_token_2')
        this.$store.commit('SET_TOKEN_1', false);
        this.$store.commit('SET_TOKEN_2', false);
        launch.play()
        setTimeout(() => {  
          launch.pause()
          this.$router.push('/gameover');
        }, 3000)
      }
    }
  } 
}
</script>

<style>

.player1can1{
  display: flex;
  position: relative;
  left : 4em;
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
  left : 4em;
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
  left : 4em;
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
</style>
