<template>
  <div class="container">
    <h1 style="color: red"> {{this.$store.state.winner}} </h1>
    <div class="row">
      <div class="col-6">
        <h6>Cola</h6>
        <br>
        <p style="color: red">{{this.$store.state.poinPlayer1}}</p>
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can1" v-if="count === 2">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can2" v-if="count === 1">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can3" v-if="count === 0">
        <button @click.prevent="shake" class="shake1">SHAKE</button>
      </div>
      <div class="col-6">
        <h6>Peps</h6>
        <br>
        <p style="color: red">{{this.$store.state.poinPlayer2}}</p>
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can2" v-if="count2 === 1">
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can3" v-if="count2 === 0">
        <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8.png" class="player2can1" v-if="count2 === 2">
        <button @click.prevent="shake2" class="shake2">SHAKE</button>
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
      this.count = Math.floor(Math.random()* 3)
      this.point1 += 1
      this.$socket.emit('move', 'playerOneClick');
    },
    shake2 () {
      this.count2 = Math.floor(Math.random()* 3)
      this.point2 += 1
      this.$socket.emit('move', 'playerTwoClick');
    }
  },
  sockets: {
    position (playerPosition) {
      this.$store.commit('SET_POIN_1', playerPosition)
    },
    finish (payload) {
      this.$store.commit('SET_STATUS', true)
      if (payload.poinPlayer1 > payload.poinPlayer2) {
        this.$store.commit('SET_WINNER', 'Player 1 Win');
        // this.$router.push('/');
      } else {
        this.$store.commit('SET_WINNER', 'Player 2 Win');
        // this.$router.push('/');
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
  top : 12em;
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
  border-radius: 50%;
}

.txt {
  position: relative;
  top : 6.5em;
  color : red;
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
  color : red;
}

.pointP2 {
  font-size : 30px;
  margin-top : -1em;
  margin-bottom: -1em;
}
</style>
