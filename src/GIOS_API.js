const Station = require("./Station");
const fetch = require("node-fetch").default;
const { api } = require("./constants");
const nearestLocation = require("./utils/nearestLocation");

/**
 * GIOS API Class.
 * */
class GIOS_API {
  /**
   * Find all stations
   *
   * @async
   * @return {Promise<Station[]>} The array of stations data.
   * @throws {TypeError} Connection error
   * @example
   *
   * const giosApi = new GIOS_API();
   * const data = await giosApi.findAll();
   */
  async findAll() {
    try {
      const response = await fetch(`${api.url}${api.all_stations}`);
      const stations = await response.json();
      return stations.map(station => new Station(station));
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Find stations by one ore multiple ids.
   *
   * @async
   * @param {(number|number[])} id - One or multiple stations id.
   * @return {Promise<Station[]>} The array of stations data.
   * @throws {TypeError} Connection error
   * @example
   *
   * const giosApi = new GIOS_API();
   *
   * const data = await giosApi.findById(45);
   *
   * //or
   *
   * const data = await giosApi.findById([488, 145, 732]);
   */
  async findById(id) {
    try {
      const serchedId = Array.isArray(id) ? id : [id];
      const response = await fetch(`${api.url}${api.all_stations}`);
      const stations = await response.json();
      const filtered = await stations.filter(function(station) {
        return this.find(id => id === station.id);
      }, serchedId);
      return filtered.map(station => new Station(station));
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Find stations in range by coordinates.
   *
   * @async
   * @param {number} lat - Latitude.
   * @param {number} lat - Longitude.
   * @param {object} options - Options.
   * @param {number} options.distance - Distance to find in meters.
   * @param {number} options.limit - Result limit to return.
   * @param {boolean} options.showNearest - Return the nearest station if not found in range.
   * @return {Promise<Station[]>} The array of stations data.
   * @throws {TypeError} Connection error
   * @example
   *
   * const giosApi = new GIOS_API();
   *
   * const data = await giosApi.findInRange(52.406376, 16.925167);
   *
   * //or
   *
   * const settings = {
   *  distance: 10000,
   *  limit: 5,
   *  showNearest: true
   * };
   *
   * const data = await giosApi.findInRange(52.406376, 16.925167, settings);
   */
  async findInRange(lat, lon, settings) {
    const defaultSettings = { distance: 5000, limit: 1, showNearest: false };
    const response = await fetch(`${api.url}${api.all_stations}`);
    const stations = await response.json();
    const distances = nearestLocation({ lat, lon }, stations);

    settings = { ...defaultSettings, ...settings };

    let nearestStations = distances.filter(
      station => station.distance < settings.distance
    );

    if (nearestStations.length > 0)
      nearestStations = nearestStations.slice(0, settings.limit);

    if (nearestStations.length === 0 && settings.showNearest)
      nearestStations.push(distances[0]);

    return nearestStations.map(nearest => new Station(stations[nearest.index]));
  }
}

module.exports = GIOS_API;
