<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h6>Cola</h6>
        <br>
        <p>{{point1}}</p>
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can1" v-if="count === 2">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can2" v-if="count === 1">
        <img src="https://pngimg.com/uploads/cocacola/cocacola_PNG22.png" class="player1can3" v-if="count === 0">
        <button @click.prevent="shake" class="shake1">SHAKE</button>
      </div>
      <div class="col-6">
        <h6>Peps</h6>
        <br>
        <p>{{point2}}</p>
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
  name: 'Home',
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
p {
  color: red
}
h6 {
  color: red
}
.player1can1 {
  width: 200px;
  display: flex;
  flex-direction: column-reverse;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  margin-top: 470px;
}

.player1can2 {
  width: 200px;
  display: flex;
  flex-direction: column-reverse;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  margin-top: 470px;
}

.player1can3 {
  width: 200px;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 470px;
}

.player2can1 {
  width: 100px;
  display: flex;
  flex-direction: column-reverse;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  margin-top: 450px;
}

.player2can2 {
  width: 100px;
  display: flex;
  flex-direction: column-reverse;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  margin-top: 450px;
}

.player2can3 {
  width: 100px;
  margin-top: 450px;
}

.shake1 {
  display: flex;
  margin-left: 70px;
  margin-top: 50px;
}

.shake2 {
  display: flex;
  margin-left: 240px;
  margin-top: 50px;
}
</style>
