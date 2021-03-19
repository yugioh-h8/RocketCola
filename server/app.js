const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

let position = {
  poinPlayer1: 0,
  poinPlayer2: 0
};

let gameStart = {
  startGame1 : false,
  startGame2 : false,
}

socketio.on("connection", (socket) => {
  socket.emit("position", position);
  socket.emit("start", gameStart);

  socket.on("move", data => {
    switch(data) {
      case "playerOneClick":
        position.poinPlayer1 += 1;
        if (position.poinPlayer1 >= 10) {
          gameStart.startGame1 = false;
          gameStart.startGame2 = false;

          socketio.emit("finish", position);
        }
        socketio.emit("position", position);
        break;
      case "playerTwoClick":
        position.poinPlayer2 += 1;
        if (position.poinPlayer2 >= 10) {
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
        socketio.emit("position", position);
        break;
      case "playerTwoReady":
        gameStart.startGame2 = true;
        position.poinPlayer2 = 0;
        position.poinPlayer1 = 0;
        socketio.emit("start", gameStart);
        socketio.emit("position", position);
        break;
    }
  })
});


http.listen(PORT, () => {
    console.log(`Listening at ${PORT}:...`);
});
