const { GIOS_API } = require("../dist/gios-api");

(async () => {
  const giosAPI = new GIOS_API();
  const stations = await giosAPI.findById(944);
  console.log(stations[0].getRaw());
})();
