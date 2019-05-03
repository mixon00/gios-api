/**
 * Station object
 * @typedef {object} Station~Object
 * @property {number} id The station id
 * @property {string} stationName The station name
 * @property {string} gegrLat The station Latitude
 * @property {string} gegrLon The station Longitude
 * @property {object} city The station city object
 * @property {number} city.id The station city id
 * @property {string} city.name The station city name
 * @property {object} city.commune The station city commune
 * @property {string} city.commune.communeName The city commune name
 * @property {string} city.commune.districtName The city district name
 * @property {string} city.commune.provinceName The city voivodeship
 */

/**
 * Station city object
 * @typedef {object} Station~City
 * @property {number} id The city id
 * @property {string} name The city name
 * @property {string} address The city address
 * @property {string} voivodeship The city voivodeship
 */

/**
 * Staion coordinates object
 * @typedef {object} Station~Coordinates
 * @property {number} lat The latitude value
 * @property {number} lon The longitude value
 */

/**
 * Class to parse station object.
 * @class
 * @property {Station~Object} station The station object.
 * */
class Station {
  /**
   * Create a station.
   * @param {Station~Object} station - The station object.
   * @example
   *
   * const station = new Station(stationObject);
   */
  constructor(station) {
    this.station = station;
    this.sensors = [];
  }

  /**
   * Returns the station id.
   * @return {number} Station id.
   * @example
   *
   * const station = new Station(stationObject);
   * const stationID = station.getId();
   * // => 944
   */
  getId() {
    return this.station.id;
  }

  /**
   * Returns the station name.
   * @return {string} Station name.
   * @example
   *
   * const station = new Station(stationObject);
   * const stationName = station.getName();
   * // => "Poznan-Dabrowskiego"
   */
  getName() {
    return this.station.stationName;
  }

  /**
   * Returns the station coordinates.
   * @return {Station~Coordinates} Station coordinates.
   * @example
   *
   * const station = new Station(stationObject);
   * const stationCoordinates = station.getCoordinates();
   * // => { lat: 52.420319, lon: 16.877289 }
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
   * @example
   *
   * const station = new Station(stationObject);
   * const stationCity = station.getCity();
   * // => { id: 729, name: "Poznań", address: "ul. Dąbrowskiego 169", voivodeship: "WIELKOPOLSKIE" }
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

  /**
   * Returns the station raw object.
   * @return {Station~Object} Raw station object.
   * @example
   *
   * const station = new Station(stationObject);
   * const stationCity = station.getRaw();
   */
  getRaw() {
    return this.station;
  }
}

module.exports = Station;
