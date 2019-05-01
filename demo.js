const GIOS_API = require("./index");

(async () => {
  const giosAPI = new GIOS_API();
  const stations = await giosAPI.findAll();
  console.log(stations);
})();
