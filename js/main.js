/*this is not right... but I need to do something!!! - this was from the local site- now I managed to deploy my site to host) :) 

cosnt url="http://localhost:10017/shop/";

async function getProducts(){
    try{
        const response= await fetch (url);
        cosnt getResults= await response.json
    }
    catch (error){
        console.log (error);
    }
}

getProducts();

*/


/* settings.json 

{
    "liveServer.settings.port": 5501
}
*/


/* ------------------------ for the contact form -----------------------------*/ 
const userName = document.querySelector("name")
const email =  document.querySelector("email")
const message = document.querySelector("message")

userName.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}

email.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}

message.onsubmit (){
    if(userName.value == ""){
        message.innerHTML ="we are missing your name";
    } else { 
        message.innerHTML = ""; 
        return true; 
    }
}