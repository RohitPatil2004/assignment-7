const fs = require('fs');
const path = require('path');
const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
const indexPath = path.join(__dirname,'index.html');
fs.readFile(indexPath, 'utf8', (err,data)=>{
	if (err){
		console.error('Error reading index.html:',err);
		process.exit(1);
	}
	const result = data.replace(/http:\/\/backend_service:5000/g,backendUrl);
	fs.writeFile(indexPath, result, 'utf8',(err)=>{
		if(err){
			console.error('Error writing index.html:',err);
			process.exit(1);
		}
		console.log('Backend URL replaced successfully');
	});
});

