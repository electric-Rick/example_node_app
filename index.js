var express  = require('express');
var app      = express();
var path     = require('path');
const router = express.Router();
const port   = 3000;

app.get('/', (req,res) =>{ 

	res.sendFile(path.join(__dirname + '/index.html'));

	});




app.use('/', router)
app.listen(port, ()=>{ console.log('Running'); });

