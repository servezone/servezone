"use strict";
const plugins = require("./servezone.plugins");
const AuthenticationModule = require("./servezone.authentication");
// classes
const lik_1 = require("lik");
;
exports.initServer = (config) => {
    let done = plugins.q.defer();
    exports.io = plugins.socketIo(config.port);
    done.resolve(config);
    return done.promise;
};
exports.openSockets = new lik_1.Objectmap();
exports.initSocketCommunication = (config) => {
    exports.io.on('connection', function (socket) {
        let socketObject = {
            socket: socket,
            authenticated: false
        };
        exports.openSockets.add(socketObject);
        AuthenticationModule.authenticateSocket(socketObject)
            .then(() => {
            plugins.beautylog.log("awesome!");
        });
    });
};
exports.closeServer = () => {
    exports.io.close();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmV6b25lLnNvY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NlcnZlem9uZS5zb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDL0MsTUFBWSxvQkFBb0IsV0FBTSw0QkFBNEIsQ0FBQyxDQUFBO0FBRW5FLFVBQVU7QUFDVixzQkFBd0IsS0FBSyxDQUFDLENBQUE7QUFTN0IsQ0FBQztBQUlTLGtCQUFVLEdBQUcsQ0FBQyxNQUF1QjtJQUM1QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLFVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVTLG1CQUFXLEdBQUcsSUFBSSxlQUFTLEVBQUUsQ0FBQztBQUU5QiwrQkFBdUIsR0FBRyxDQUFDLE1BQXVCO0lBQ3pELFVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsTUFBTTtRQUNoQyxJQUFJLFlBQVksR0FBaUI7WUFDN0IsTUFBTSxFQUFDLE1BQU07WUFDYixhQUFhLEVBQUMsS0FBSztTQUN0QixDQUFDO1FBQ0YsbUJBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ2hELElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUE7QUFHVSxtQkFBVyxHQUFHO0lBQ3JCLFVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQSJ9