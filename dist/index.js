"use strict";
const SocketModule = require("./servezone.socket");
exports.start = (configArg) => {
    SocketModule.initServer(configArg)
        .then(SocketModule.initSocketCommunication);
};
exports.stop = () => {
    SocketModule.closeServer();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsTUFBWSxZQUFZLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUV4QyxhQUFLLEdBQUcsQ0FBQyxTQUF1QztJQUN2RCxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHO0lBQ2QsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQyJ9