/** Class to parse station object. */
class Station {
  /**
   * Create a station.
   * @param {object} station - The station object.
   * @example
   *
   * const station = new Station(stationObject);
   */
  constructor(station) {
    this.station = station;
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
   * @return {object} Station coordinates.
   * @property {number} lat The latitude value
   * @property {number} lon The longitude value
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
   * @return {object} Station city.
   * @property {number} id The city id
   * @property {string} name The city name
   * @property {string} address The city address
   * @property {string} voivodeship The city voivodeship
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
}

module.exports = Station;
