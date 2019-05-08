const { GIOS_API } = require('../dist/gios-api');

(async () => {
  const giosAPI = new GIOS_API();
  const airQuality = await giosAPI.fetchAirQuality(944);
  console.log(airQuality.getData());
})();
