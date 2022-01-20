 const express = require('express');
 const {loginCribwiseApi, loginNavvisApi, getCribwiseData} = require('./backend')
 const schedule = require('node-schedule');

const app = express();
const path = require('path');

app.use(express.json()) // for parsing application/json

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/api/loginNavvis", function(req, res){
    console.log("request body", req.body)
    const {userName, password, url} = req.body
  
    loginNavvisApi(userName, password, url)
    .then(response => {
      res.json(response).send()
    })
  })

  app.post("/api/loginCribwise", function(req, res){
    const {userName, password, url} = req.body
    console.log('server userName', userName)
    loginCribwiseApi(userName, password, url)
    .then(response => {
      res.json(response).send()
    })
  })

  //to fetch Cribwise data
  app.get('/api/getCribwiseData', function(req,res){
    getCribwiseData()
    .then(response =>{
        // console.log('response form backend : ',response)
        res.json(response).send();
    })
})


app.listen(9000, () => console.log("listening to port : ", 9000));