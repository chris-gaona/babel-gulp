// server.js
var jsonServer = require('json-server');
var server = jsonServer.create();
var db = {
    posts: [
        {
            "id": 1,
            "title": "In hybrid moments, give me a moment",
            "lastReply": "1997-07-15"
        },
        {
            "id": 2,
            "title": "Sound system gonna bring me back up",
            "lastReply": "1991-07-01"
        },
        {
            "id": 3,
            "title": "When I'm out walkin', I strut my stuff",
            "lastReply": "1983-04-19"
        }
    ],
    activeUsers: [
        {
            "name": "Sam",
            "avatar": "avatar.jpg"
        },
        {
            "name": "Tyler",
            "avatar": "avatar.jpg"
        },
        {
            "name": "Brook",
            "avatar": "avatar.jpg"
        }
    ]
};

var router;
if (process.env.NODE_ENV === 'development') {
    router = jsonServer.router('server/db.json');
} else {
    router = jsonServer.router(db);
}

var middlewares = jsonServer.defaults();
var port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log('JSON Server is running')
});
