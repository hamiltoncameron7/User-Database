var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var router = express.Router();
var path = require('path');

//adding headers to allow local requests
router.use('/', function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//GET request pipes response from JSON file
router.get('/', (req, res) => {
    var dataFilePath = path.join(__dirname, 'testData.JSON');
    var readStream = fs.createReadStream(dataFilePath);
    readStream.pipe(res);
});

//POST request adds input to JSON file
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.post('/create-user', function (req, res) {

    //read file to save original data
    var jsonReaderNumTwo = fs.readFileSync('./routes/testData.JSON');
    var originalData = JSON.parse(jsonReaderNumTwo);
    var dataSize = parseInt(Object.keys(originalData.users).length);
    var newDataSize = dataSize + 1;
    originalData.users.push({"id": newDataSize, "name": req.body[0]});

    //if statement to make sure input actually contains data, only writes if length is greater than 1
    if(req.body[0].length > 1){
        fs.writeFileSync('./routes/testData.JSON', JSON.stringify(originalData), function(err){
            if(err) throw err;
        });
    } else {
        console.log("No data to add");
    }
})

module.exports = router;