const Sensor = require("./Sensor");

/**
 * Class to parse sensors list.
 * @class
 * @property {Object.<string, Sensor>} sensors The sensors list.
 * */
class SensorsList {
  /**
   * Create a sensor.
   * @async
   * @param {Sensor~Object[]} sensors - The array of sensor objects.
   * @example
   *
   * const sensorsList = new SensorsList(sensorObjects);
   */
  constructor(sensors) {
    this.sensors = sensors.reduce((obj, item) => {
      obj[item.param.paramCode] = new Sensor(item);
      return obj;
    }, {});
  }

  /**
   * Returns the sensors list.
   * @return {Object.<string, Sensor>} Return the sensors list.
   * @example
   *
   * const sensorsList = new SensorsList(sensorObjects);
   * const sensors = sensorsList.getList();
   */
  getList() {
    return this.sensors;
  }

  /**
   * Returns the sensor by code.
   * @param {string} code - The sensor code.
   * @return {Sensor} Return the sensor.
   * @example
   *
   * const sensorsList = new SensorsList(sensorObjects);
   * const sensor = sensorsList.getSensor("PM10");
   */
  getSensor(code) {
    return this.sensors[code];
  }

  /**
   * Returns the codes array.
   * @return {string[]} Return the codes array.
   * @example
   *
   * const sensorsList = new SensorsList(sensorObjects);
   * const codes = sensorsList.getCodes();
   */
  getCodes() {
    return Object.keys(this.sensors);
  }

  /**
   * Prefetch data for all sensors.
   * @async
   * @example
   *
   * const sensorsList = new SensorsList(sensorObjects);
   * const codes = sensorsList.prefetchData();
   */
  async prefetchData() {
    for(const code of this.getCodes()) {
      await this.getSensor(code).fetchData()
    }
  }
}

module.exports = SensorsList;
