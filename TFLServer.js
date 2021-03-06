const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    App: "TFL Lines Node js",
    Student_FullName: "Afshin Karamifar",
    Position: "Trainee at Code Your Future",
    Company: "Code Your Future",
    URL: "https://codeyourfuture.io/"
  });
});
app.get("/mode", (req, res) => {
  fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});
app.get("/vehicle", (req, res) => {
  const { vehicle } = req.query;
  fetch(`https://api.tfl.gov.uk/Line/Mode/${vehicle}`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.get("/route", (req, res) => {
  const { route } = req.query;
  fetch(`https://api.tfl.gov.uk/Line/${route}/Route`)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});
//Listen to port 3000 or any available
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
