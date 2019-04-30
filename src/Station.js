/**
 * @typedef {Object} Station~Coordinates
 * @property {number} lat The latitude value
 * @property {number} lon The longitude value
 */

/**
 * @typedef {Object} Station~City
 * @property {number} id The city id
 * @property {string} name The city name
 * @property {string} address The city address
 * @property {string} voivodeship The city voivodeship
 */

/** Class to parse station object. */
class Station {
  /**
   * Create a station.
   * @param {object} station - The station object.
   */
  constructor(station) {
    this.station = station;
  }
  /**
   * Returns the station id.
   * @return {number} Station id.
   */
  getId() {
    return this.station.id;
  }
  /**
   * Returns the station name.
   * @return {string} Station name.
   */
  getName() {
    return this.station.stationName;
  }
  /**
   * Returns the station coordinates.
   * @return {Station~Coordinates} Station coordinates.
   */
  getCoordinates() {
    return {
      lat: parseFloat(this.station.gegrLat),
      lon: parseFloat(this.station.gegrLon)
    };
  }
  /**
   * Returns the station city information.
   * @return {Station~City} Station city.
   */
  getCity() {
    const {
      city: {
        id,
        name,
        commune: { provinceName: voivodeship }
      },
      addressStreet: address
    } = this.station;
    return {
      id,
      name,
      address,
      voivodeship
    };
  }
}

module.exports = Station;
