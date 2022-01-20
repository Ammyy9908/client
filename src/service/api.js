export async function loginCribwise(userName, password, url){
    console.log('fetch username: ', userName)
    // console.log("json stringf", JSON.stringify({userName, password, url}) )
    const response = await fetch("/api/loginCribwise",
        {
            crossDomain : true,
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({userName, password, url})
        })
    const data = await response.json()
    return data;
}

export async function loginNavvis(userName, password, url){
    console.log("json stringfy for nnavis", JSON.stringify({userName, password, url}) )
    const response = await fetch("/api/loginNavvis",
         {   
            crossDomain : true,
             method :"POST",
             headers: {"Content-Type":"application/json"},
             body: JSON.stringify({userName, password, url})
        })
     const data = await response.json();
     console.log('Navvis response : ', data)
     return data;
 }

 export async function  getCribwiseData(){
    const response = await fetch("api/getCribwiseData")
    const result = await response.json();
    return result;
}



