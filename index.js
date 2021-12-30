const express = require('express');
const app = express();
const server = require('http').Server(app);
// const request = require('request');

// var ExpressPeerServer = require('peer').ExpressPeerServer;

// var options = {
//     debug: true,
//     allow_discovery: true
// }


// peerjs is the path that the peerjs server will be connected to.
// app.use('/peerjs', ExpressPeerServer(server, options));

app.use('/static', express.static('public'));
app.get('/chatapp', (req, res) => {
    res.sendFile(__dirname + '/chatapp.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})



server.listen(process.env.PORT || 5500, () => {
    console.log("App is listening at port 5500")
})
