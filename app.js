const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.use(express.static('public'));
app.post('/upload', upload.single('file'), function(req, res){
  var size = req.file.size;
  res.send({size:size});
})

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running...')
})
