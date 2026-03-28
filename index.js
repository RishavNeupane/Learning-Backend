const express = require("express");
const dns = require("node:dns");
dns.setServers(['1.1.1.1'])
const connectToDatabase = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
connectToDatabase();

app.use('/api/auth',require("./routes/userRoutes"));

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is Running on Port: ${port}`)
});

app.get("/", (req,res)=>{
    res.send("Hello World")
});