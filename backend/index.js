// creating a local server with a port number 4000

const express = require("express");

const app = express();

const port_number = 4000;

// middleware setup

app.use(express.json());

// database setup (mongodb or dbeaver), 4/8/2024 or 4/15/2024

// route for handling prisoner related features
const prisonerRoute = require("./routes/prisonerRoute");
app.use("/p", prisonerRoute);

const guardRoute = require("./routes/guardRoute");
app.use("/g", guardRoute);

app.listen(port_number, () => {
  console.log(`server is running on http://localhost:${port_number}`);
});

// to run the backend server use `node index.js`
