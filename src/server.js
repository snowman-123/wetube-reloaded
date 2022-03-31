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

app.get("/",handleHome);
app.get("/login",handleLogin);
app.listen(PORT,handleListening); 

const handleClick = (event) => {

}





console.log("Hello world");