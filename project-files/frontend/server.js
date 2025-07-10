const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,"index.html"));
});
app.get("/success.html",(req,res)=>{
	res.sendFile(path.join(__dirname,"success.html"));
});
app.listen(PORT,"0.0.0.0",()=> {
	console.log(`Frontend running at http://0.0.0.0:${PORT}`);
});

