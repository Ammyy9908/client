const request = require('request')

let url = "https://secopoint.secotools.com/Reporting/Integration/ItemLevels";
var username = 'farbo\\twin';
var password = '73730';


async function loginCribwiseApi(nameForCribwise, passwordForCribwise, urlForCribwise){
  
  console.log("usename",nameForCribwise, "password", passwordForCribwise);

    return new Promise((resolve, reject)=>{
  
      //to check valid auth
      var auth = "Basic " + new Buffer.from(nameForCribwise + ":" + passwordForCribwise).toString("base64");
      console.log("auth value:", auth)
      request.get( {
          url : urlForCribwise,
          headers : {
              "Authorization" : auth
          }
        }, function(error, response, body) { 
              if(error)
              {
                  reject(error)
              }      
              console.log('success: ',response.statusCode)
              
              if(response.statusCode == 200){
                console.log("status Code",response.statusCode)
                resolve(response.statusCode);
              }
        });
    })
      // Schedule job in every 5 minutes    
}
//Login to nnavis to get token

async function loginNavvisApi(nameForNavvis, passwordForNavvis, urlForNavvis){
    console.log(nameForNavvis,passwordForNavvis,urlForNavvis);
    return new Promise((resolve, reject)=> {

      request.post( {
          url : urlForNavvis,
          headers : {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({username: nameForNavvis, password: passwordForNavvis})  
        }, function(error, response, body) { 
              if(error)
              {
                  reject(error)
              }      
              console.log('Navvis success : '+response.statusCode)
              
              if(response.statusCode=== 200){
                resolve(response.statusCode);
              }
        });
    })
  return;
};

//get cribwise Data

async function getCribwiseData(){
  

    return new Promise((resolve, reject)=>{
  
      //to check valid auth
      var auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
  
      request.get( {
          url : url,
          headers : {
              "Authorization" : auth
          }
        }, function(error, response, body) { 
              if(error)
              {
                  reject(error)
              }      
              //reading data and converting to json
              var data = JSON.parse( body )
              //filter the columns
              var filterdData = data.value.map(row => ({id:row.Id, itemName: row.ItemName, itemCategory: row.ItemCategory, itemstockStatus: row.ItemStockStatus}));
              resolve(filterdData);
        });
    })

}


module.exports = {loginCribwiseApi, loginNavvisApi, getCribwiseData}