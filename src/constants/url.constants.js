/**
 * @constant
 * @type {object}
 * @property {string} url api url
 * @property {string} all_stations station path
 * @property {string} urlConstants.sensors sensors path
 * @property {string} sensor_data sensor data path
 * @property {string} air_quality air quality index path
 */
const urlConstants = {
  url: "http://api.gios.gov.pl/pjp-api/rest/",
  all_stations: "station/findAll/",
  sensors: "station/sensors/",
  sensor_data: "data/getData/",
  air_quality: "aqindex/getIndex/"
};

module.exports = urlConstants;
