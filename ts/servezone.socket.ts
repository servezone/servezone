import * as plugins from "./servezone.plugins";

let app = plugins.express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get("/",(req,res) => {
    res.send("Looking for something?");
});

io.on('connection', function (socket) {
  console.log("someone connected");
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

