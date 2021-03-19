<template>
  <div>
    <img src="https://media2.giphy.com/media/3ohs4rclkSSrNGSlFK/200.gif" class="rocket">
    <h1>{{this.$store.state.winner}}</h1>
    <button type="button" class="btn btn-danger border-dark mt-2 mb-4" @click.prevent="abort">ABORT MISSION!</button>
  </div>
</template>

<script>
import Rocketover from '../audio/rocketover.mp4'
const rocketover = new Audio(Rocketover)
export default {
  name: 'GameOver',
  methods: {
    abort () {
      localStorage.removeItem('access_token_1')
      localStorage.removeItem('access_token_2')
      rocketover.pause()
      this.$router.push('/')
    }
  },
  // created () {
  //   rocketover.play()
  // }
}
</script>

<style scoped>
.rocket {
  width: 100%
}

h1 {
  position: relative;
  color : #DC4045;
  top : -10em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.btn{
  border-radius: 10px;
}
</style>