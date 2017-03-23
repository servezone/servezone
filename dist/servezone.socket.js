"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./servezone.plugins");
// interfaces
const servezone_config_1 = require("./servezone.config");
let mainSmartsocket = new plugins.smartsocket.Smartsocket({
    port: servezone_config_1.servezoneConfig.port
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLnNvY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlcnZlem9uZS5zb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBOEM7QUFFOUMsYUFBYTtBQUNiLHlEQUFvRDtBQUVwRCxJQUFJLGVBQWUsR0FBb0MsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUN6RixJQUFJLEVBQUUsa0NBQWUsQ0FBQyxJQUFJO0NBQzNCLENBQUMsQ0FBQTtBQUVGLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDOUMsSUFBSSxFQUFFLElBQUk7SUFDVixZQUFZLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDakMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNsRCxJQUFJLEVBQUUsUUFBUTtJQUNkLFlBQVksRUFBRSxVQUFVLENBQUMsT0FBTztDQUNqQyxDQUFDLENBQUE7QUFFRixlQUFlLENBQUMsY0FBYyxDQUFDO0lBQzdCLE1BQU07SUFDTixVQUFVO0NBQ1gsQ0FBQyxDQUFBIn0=