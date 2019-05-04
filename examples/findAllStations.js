const { GIOS_API } = require("../dist/gios-api");

(async () => {
  const giosAPI = new GIOS_API();
  const stations = await giosAPI.findAll();
  console.log(stations[0].getRaw());
})();
