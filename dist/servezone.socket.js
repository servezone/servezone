"use strict";
const plugins = require("./servezone.plugins");
// interfaces
const servezone_config_1 = require("./servezone.config");
let mainSmartsocket = new plugins.smartsocket.Smartsocket({
    port: servezone_config_1.config.port
});
let roleCi = new plugins.smartsocket.SocketRole({
    name: 'ci',
    passwordHash: 'someHash' // TODO
});
let roleSzNode = new plugins.smartsocket.SocketRole({
    name: 'szNode',
    passwordHash: 'someHash' // TODO
});
mainSmartsocket.addSocketRoles([
    roleCi,
    roleSzNode
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLnNvY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlcnZlem9uZS5zb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUE4QztBQUU5QyxhQUFhO0FBQ2IseURBQTJDO0FBRTNDLElBQUksZUFBZSxHQUFvQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3ZGLElBQUksRUFBRSx5QkFBTSxDQUFDLElBQUk7Q0FDcEIsQ0FBQyxDQUFBO0FBRUYsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUM1QyxJQUFJLEVBQUUsSUFBSTtJQUNWLFlBQVksRUFBRyxVQUFVLENBQUMsT0FBTztDQUNwQyxDQUFDLENBQUE7QUFFRixJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ2hELElBQUksRUFBRSxRQUFRO0lBQ2QsWUFBWSxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQ25DLENBQUMsQ0FBQTtBQUVGLGVBQWUsQ0FBQyxjQUFjLENBQUM7SUFDM0IsTUFBTTtJQUNOLFVBQVU7Q0FDYixDQUFDLENBQUEifQ==