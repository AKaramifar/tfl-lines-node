const express = require("express");
const fetch = require('node-fetch');
const app = express();

app.get('/developer',(req, res) => {
    res.send('Afshin Karamifar')
})
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
    const {vehicle} = req.query;
    fetch(`https://api.tfl.gov.uk/Line/Mode/${vehicle}`)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => console.log(error));
  });
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
  