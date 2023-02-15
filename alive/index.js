import express from "express";
import axios from "axios";
import cors from "cors";



const app = express();

app.use(cors());

setInterval(async()=>{
  
    try{await axios.get("https://dalle-post.onrender.com/")}catch(err){}

},3500);

//for first call

async()=>{
    try{await axios.get("https://dalle-post.onrender.com/")}catch(err){}
    
}






const startServer = async ()=>{
    
    app.listen(process.env.PORT || 8800,(err)=>{
      if (err){
        console.log(err);
      }else{
        console.log("server is running on port http://localhost:8800")
      }
    });
}

startServer();

