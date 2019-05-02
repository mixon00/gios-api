const { GIOS_API } = require("../src");

(async () => {
  const giosAPI = new GIOS_API();
  const stations = await giosAPI.findInRange(52.406376, 16.925167);
  console.log(stations);
})();
