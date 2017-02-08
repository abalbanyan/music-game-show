var express = require('express');
var app = express();
app.set('view engine', 'jade');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.set('port', (process.env.PORT || 3000)); // process.env.PORT lets heroku set a port.

var server = app.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules')); // This allows anything in /public to be served as if it were in the main directory.
app.set('view engine', 'jade');

var categories = ["Shounen", "Shoujo", "Seinen", "Romance", "Miscellaneous"];
var data = {"cols": categories.length, "rows": 5, "categories":categories};
var game = function(req, res){
	res.render('game', {data:data});
}
var scoreboard = function(req, res){
	res.render('scoreboard', {data:data});
}
var buzzer = function(req, res){
	res.render('buzzer');
}

// Routes
app.get('/', function(req, res){
	res.redirect('/buzzer');
});
app.get('/buzzer', buzzer);
app.get('/game', game);
app.get('/scoreboard', scoreboard);

// socket.io stuff
io.on('connection', function(socket){
	socket.on('buzz', function(data){
		io.emit('scoreboard-buzz', {"team":data.team});
		console.log("Buzz! " + data.team);
	});
	socket.on('selection', function(data){
		io.emit('scoreboard-selection', {"choice":data.choice});
		console.log("Choice: cell " + data.choice);
	});
});
