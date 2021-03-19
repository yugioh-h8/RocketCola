<template>
  <div>
    <img src="https://media2.giphy.com/media/3ohs4rclkSSrNGSlFK/200.gif" class="rocket">
    <h1>{{this.$store.state.winner}}</h1>
    <button type="button" class="btn btn-danger border-dark mt-3" @click.prevent="abort">ABORT MISSION!</button>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  methods: {
    abort () {
      localStorage.removeItem('access_token_1')
      localStorage.removeItem('access_token_2')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.rocket {
  width: 100%
}

h1 {
  top: -50px;
  position: absolute
}
</style>