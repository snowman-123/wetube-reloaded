import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>I love you.</h1>");
}
const handleLogin = (req,res) =>{
    return res.send("Login here.");
}

const handleListening = (req,res) =>{
    console.log("Server listening on port 4000");
} 
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };


app.get("/", logger, handleHome);
app.get("/login",handleLogin);


app.listen(PORT,handleListening); 



console.log("Hello world");