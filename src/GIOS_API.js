const Station = require("./Station");
const fetch = require("node-fetch");
const { api } = require("./constants");

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
   * //or
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
}

module.exports = GIOS_API;
