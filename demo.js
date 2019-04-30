const GIOS_API = require("./index");

const airQuality = new GIOS_API();
const allStations = airQuality
  .findAll()
  .then(data => console.log(data[0].getCoordinates()));