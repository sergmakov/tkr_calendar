var mime = require('mime'),
	fs = require('fs');

function FileResponder() {

	return {
		returnFile: returnFile
	};

	function returnFile(filename, res) {
		var data, mimeType;

		if(filename == '/'){
			filename = '/index.html';
		}
		try {
			filename = filename.replace(/^\//, '');
			mimeType = mime.lookup(filename);
			data = fs.readFileSync(filename);
			
			res.writeHead(200, {
				'Content-Type': mimeType,
				'Content-Length': data.length,
				'Accept-Ranges': 'bytes',
				'Cache-Control': 'no-cache'
			});
			res.end(data);
		}
		catch (e) {
			console.log('Error:', e);
			res.writeHead(404);
			res.end();
		}
	}	

}

module.exports = new FileResponder();