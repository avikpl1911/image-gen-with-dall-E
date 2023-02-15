import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dallieRoutes from "./routes/dallieRoutes.js"

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));


app.use("/api/v1/post",postRoutes);
app.use("/api/v1/dallie",dallieRoutes);


app.get("/",async (req,res)=>{
    res.send("Hello from DALL-E");

});

const startServer = async ()=>{
    try {
        connectDB (process.env.MONGODB_URL);
    } catch (err) {
        console.log(err);
    }
    app.listen(process.env.PORT || 8080,(err)=>{
      if (err){
        console.log(err);
      }else{
        console.log("server is running on port http://localhost:8080")
      }
    });
}

startServer();

