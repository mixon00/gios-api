const GIOS_API = require("./index");

(async () => {
  const giosAPI = new GIOS_API();
  const stations = await giosAPI.findById(145);
  console.log(stations[0].getId());
})();
