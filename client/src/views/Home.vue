<template>
  <div class="container">
    <div class="player1">
      <img class="p1" src="https://media3.giphy.com/media/TJmoBmGk4XXkcI6P3t/giphy.gif" alt="test">
      <button class="btn1" @click.prevent="playerOneReady" >dawdasd</button>
    </div>
    <div class="player2">
      <img class="p2" src="https://i.gifer.com/X5NY.gif" alt="">
      <button class="btn2" @click.prevent="playerTwoReady">dasdwasga</button>
    </div>
    <!-- <div class="rules">
      <p><pre>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolore molestias rem sint repellendus quae alias, architecto quasi mollitia aut doloribus quidem provident, cumque rerum?
        </pre></p>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    playerOneReady() {
      this.$socket.emit('gameStart', 'playerOneReady');
    },
    playerTwoReady() {
      this.$socket.emit('gameStart', 'playerTwoReady');
    },
  },
  sockets: {
    start (gameStart) {
      if (gameStart.startGame1 && gameStart.startGame1) {
        this.$store.commit('SET_STATUS', true)
        this.$router.push('/game')
      }
    }
  }
}
</script>



<style scoped>
 *{
   box-sizing: border-box;
   margin : 0
 }
  .player1{
    position: relative;
    left : -12em;
  }
  .p1 {
    width : 25em
  }
  .btn1 {

  }


  .player2{
    position: relative;
    top: 3em;
    right : 12em;
  }

  .p2 {
    width : 25em
  }
  

  /* .rules {
    position : absolute;
    float : right;
    size : 100%;
    background-color: white;
  } */
</style>
