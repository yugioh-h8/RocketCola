<template>
  <div class="container-fluid px-0">
    <div class="row">
      <div class="col-6 vh-100 t1">
        <div class="player1">
          <img class="p1" src="https://media3.giphy.com/media/TJmoBmGk4XXkcI6P3t/giphy.gif" alt="test">
        <button type="button" class="btn btn1" @click.prevent="playerOneReady" v-if="!$store.state.token_1">Player 1 Ready</button>
        </div>
        <div class="player2">
          <img class="p2" src="https://i.gifer.com/X5NY.gif" alt="">
        <button type="button" class="btn btn2"  @click.prevent="playerTwoReady" v-if="!$store.state.token_2">Player 2 Ready</button>
        </div>
      </div>
      <div class="col-6 vh-100 right">
      <div class="text-rules">
        <h3>Aturan Bermain :</h3>
        <ol>
          <li class="rules">Untuk bermain, kedua player harus menekan tombol ready terlebih dahulu</li>
          <li class="rules">Pemain akan mendapatkan point dengan menekan tombol</li>
          <li class="rules">Kumpulkan point sebanyak 50, yang mendapatkan point 50 terlebih dahulu maka dia lah pemenang nya</li>
        </ol>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Astro1 from '../audio/astro1.mp4'
import Astro2 from '../audio/astro2.mp4'

export default {
  methods: {
    playerOneReady() {
      this.$socket.emit('gameStart', 'playerOneReady');
      this.$store.commit('SET_WINNER', ' ');
      localStorage.setItem('access_token_1', 'aijsijdioej')
      const astro1 = new Audio(Astro1)
      astro1.play()
      // if (localStorage.access_token_1) {
      //   this.$store.commit('SET_TOKEN_1', true);
      // } else {
      //   this.$store.commit('SET_TOKEN_1', false);
      // }
    },
    playerTwoReady() {
      this.$socket.emit('gameStart', 'playerTwoReady');
      this.$store.commit('SET_WINNER', ' ');
      localStorage.setItem('access_token_2', 'aijsijdioej')
      const astro2 = new Audio(Astro2)
      astro2.play()
      // if (localStorage.access_token_2) {
      //   this.$store.commit('SET_TOKEN_2', true);
      // } else {
      //   this.$store.commit('SET_TOKEN_2', false);
      // }
    },
  },
  sockets: {
    start (gameStart) {
      if (gameStart.startGame1 && gameStart.startGame2) {
        this.$store.commit('SET_STATUS', true)
        this.$router.push('/game')
      }

      if (gameStart.startGame1) {
        this.$store.commit('SET_TOKEN_1', true);
      } 

      if (gameStart.startGame2) {
        this.$store.commit('SET_TOKEN_2', true);
      } 

    }
  }
}
</script>



<style scoped>
  *{
      font-family: 'Poppins', sans-serif;
      margin: 0px;
  }
  .p2 {
    position: relative;
    width : 26em;
    left: -37px;
  }
  .player2 {
    position: relative;
    top:  45px;
  }
  .p1 {
    width : 26em;
    position: relative;
    left: -20px;
  }

  .rules{
      text-align : left;
      margin-left : 20px;
      margin-top: 15px;
  }
  .text-rules{
    position: relative;
    top : 70px;
    color : white;
  }
  h3{
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }
  li{
    font-family: Arial, Helvetica, sans-serif;
  }
  .btn1{
    color : white;
    letter-spacing: 2px;
    background-color : #7A3672!important;
  }
  .btn2{
    color : white;
    letter-spacing: 2px;
    position: relative;
    left : 7px;
    background-color : #7A3672!important;
  }
  .right{
    background-color: #1A1A48;
  }
</style>
