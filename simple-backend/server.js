require("dotenv").config(); //parse .env file
require("./config/mongo");

const express = require('express'); //really needed
const server = express(); //create the server out of express function
const cors = require('cors');

server.use(express.json());
// we need to parse json body in HTTP requests : this middleware exactly does that


server.use(cors("*"));

server.get("/", (req, res) => {
    res.send("ok toto"); // sending back a simple string as a rsponse for each request on http://localhost:9000/
})


//ROUTING

const studentsRouter = require("./routes/students");
const cohortRouter = require("./routes/cohorts");

server.use(studentsRouter);
server.use(cohortRouter);


server.listen(process.env.PORT, () => {
    console.log("simple-backend started @ http://localhost:" + process.env.PORT);
}); //access .env key/values