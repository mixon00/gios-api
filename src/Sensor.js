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
 * Class to parse sensor object.
 * @class
 * @property {Sensor~Object} sensor The station object.
 * */
class Sensor {
  /**
   * Create a sensor.
   * @param {Sensor~Object} sensor - The sensor object.
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
