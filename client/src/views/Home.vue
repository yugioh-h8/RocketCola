<template>
  <div class="container-fluid px-0">
    <div class="row">
      <div class="col-6 vh-100 t1">
        <div class="player1">
          <img class="p1" src="https://media3.giphy.com/media/TJmoBmGk4XXkcI6P3t/giphy.gif" alt="test">
        <button type="button" class="btn btn1">Player 1</button>
        </div>
        <div class="player2">
          <img class="p2" src="https://i.gifer.com/X5NY.gif" alt="">
        <button type="button" class="btn btn2">Player 2</button>
        </div>
      </div>
      <div class="col-6 vh-100 right">
      <div class="text-rules">
        <h3>Aturan Bermain :</h3>
        <ol>
          <li class="rules">untuk bermain, kedua player harus menekan tombol terlebih dahulu</li>
          <li class="rules">pemain akan mendapatkan dengan menekan tombol</li>
          <li class="rules">kumpulkan point sebanyak 100, yang mendapatkan point 100 terlebih dahulu maka dia lah pemenang nya</li>
        </ol>
      </div>
      </div>
    </div>
  </div>
</template>

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


