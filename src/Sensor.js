const fetch = require("node-fetch").default;
const { api } = require("./constants");

/**
 * Sensor object
 * @typedef {object} Sensor~Object
 * @property {number} id Sensor id.
 * @property {number} stationId Station id.
 * @property {object} param Sensor params.
 * @property {string} param.paramName Sensor param name.
 * @property {string} param.paramFormula Sensor param formula.
 * @property {string} param.paramCode Sensor param code.
 * @property {string} param.idParam Sensor param id.
 */

/**
 * Sensor data
 * @typedef {object} Sensor~Data
 * @property {string} data Date and time of measurement.
 * @property {number} value The value of the measurement.
 */

/**
 * Class to parse sensor object.
 * @class
 * @property {Sensor~Object} sensor The station object.
 * */
class Sensor {
  /**
   * Create a sensor.
   * @param {Sensor~Object} sensor - The sensor object.
   * @param {Sensor~Data[]} data - The sensor data.
   * @example
   *
   * const sensor = new Sensor(sensorObject);
   */
  constructor(sensor) {
    this.sensor = sensor;
  }

  /**
   * Returns the sensor id.
   * @return {number} Sensor id.
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorID = sensor.getId();
   * // => 6085
   */
  getId() {
    return this.sensor.id;
  }

  /**
   * Returns the sensor station id.
   * @return {number} Sensor station id.
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorStationID = sensor.getStationId();
   * // => 6085
   */
  getStationId() {
    return this.sensor.stationId;
  }

  /**
   * Returns the sensor name.
   * @return {string} Sensor name.
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorName = sensor.getName();
   * // => "pył zawieszony PM10"
   */
  getName() {
    return this.sensor.param.paramName;
  }

  /**
   * Returns the sensor code.
   * @return {string} Sensor code.
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorCode = sensor.getCode();
   * // => "PM10"
   */
  getCode() {
    return this.sensor.param.paramCode;
  }

  /**
   * Fetch sensor data.
   * @async
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorCode = sensor.fetchData();
   */
  async fetchData() {
    try {
      const response = await fetch(
        `${api.url}${api.sensor_data}${this.getId()}`
      );
      const data = await response.json();
      this.data = data.values;
      return this.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  getData() {
    return this.data;
  }

  /**
   * Returns the sensor raw object.
   * @return {Sensor~Object} Sensor raw object.
   * @example
   *
   * const sensor = new Station(sensorObject);
   * const sensorCode = sensor.getRaw();
   */
  getRaw() {
    return this.sensor;
  }
}

module.exports = Sensor;
