var host = '127.0.0.1';
var port = 8080;

var http = require('http'),
	fileResponder = require('./server_modules/file_responder'),
	fs = require('fs');
	

var conf = {
	logOn: true,
	warnOn: true
};

http.createServer(function (req, res) {
	res.setHeader("Cache-Control", "no-cache"); // IE9 needs this.

	var command = parseCommand(req.url);
	console.log('req.url', req.url);
	if(command){
		waitUntilBodyReaded(req, function(data){
		log('REQUEST: ', data);
		switch (command.module){
			case 'getMonthData': {
				res.end('some data');
			}
			break;
			default: 
				u.noSuchModule(command);
			}
		});
	} else {
		fileResponder.returnFile(req.url, res);
	}



}).listen(port, host, function() {
	warn("Reporter server started: "+ (new Date()));
});

function parseCommand(url){
	var availableModules = ['getMonthData'];

	var parts = url.split('/').splice(1);
	if(parts[0] && availableModules.indexOf(parts[0]) !== -1){
		return {
			module: parts[0],
		}
	} else {
		return false;
	}
}

function waitUntilBodyReaded(req, cb){
	var data = '';

	req.on('data', function(chunk) {
		
		data += chunk.toString();
	});

	req.on('end', function() {
		if(!data) data = 'false';
		console.log('data', data);
		cb(JSON.parse(data));
	});
}

function noSuchModule(command){
	log('There is no such module: '+command.module);
}

function noSuchAction(command){
	log('Wrong action request '+command.module+' module: '+command.action);
}

function log() {
	if (conf.logOn) {
		var args = Array.prototype.slice.call(arguments);
		console.log.apply(console, args);
	}
}
function warn() {
	if (conf.warnOn) {
		var args = Array.prototype.slice.call(arguments);
		console.log.apply(console, args);
	}
}