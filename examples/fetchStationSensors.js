const { GIOS_API } = require("../dist/gios-api");

(async () => {
  const giosAPI = new GIOS_API();
  const sensors = await giosAPI.fetchStationSensors(944);
  console.log(sensors.getList());
})();
