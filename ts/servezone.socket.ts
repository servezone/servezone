import * as plugins from "./servezone.plugins";


export interface ISocketObject {
  socket:SocketIO.Socket,
  authenticated:boolean
}

export let app:plugins.express.Express;
export let server = require('http').Server(app);
export let io = plugins.socketIo(server);

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

