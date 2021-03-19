const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

var position = {
  poinPlayer1: 0,
  poinPlayer2: 0
};

var gameStart = {
  startGame1 : false,
  startGame2 : false,
}

socketio.on("connection", socket => {
  socket.emit("position", position);

  socket.emit("start", gameStart);

  socket.on("move", data => {
    switch(data) {
      case "playerOneClick":
        position.poinPlayer1 += data;
        if (position.poinPlayer1 >= 100) {
          gameStart.startGame1 = false;
          gameStart.startGame2 = false;

          socketio.emit("finish", position);
        }
        socketio.emit("position", position);
        break;
      case "playerTwoClick":
        position.poinPlayer2 += data;
        if (position.poinPlayer2 >= 100) {
          gameStart.startGame1 = false;
          gameStart.startGame2 = false;

          socketio.emit("finish", position);
        }
        socketio.emit("position", position);
        break;
      }
  });

  socket.on("gameStart", data => {
    switch(data) {
      case "playerOneReady":
        gameStart.startGame1 = true;
        position.poinPlayer1 = 0;
        position.poinPlayer2 = 0;
        socketio.emit("start", gameStart);
        break;
      case "playerTwoReady":
        gameStart.startGame2 = true;
        position.poinPlayer2 = 0;
        position.poinPlayer1 = 0;
        socketio.emit("start", gameStart);
        break;
    }
  })
});


http.listen(PORT, () => {
    console.log(`Listening at ${PORT}:...`);
});
