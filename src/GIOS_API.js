const Station = require("./Station");
const fetch = require("node-fetch");
const { api } = require("./constants");

/** GIOS API Class. */
class GIOS_API {
  /**
   * Find all stations.
   *
   * @async
   * @return {Promise<Station[]>} The array of stations data.
   * @throws {TypeError} connection error
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
}

module.exports = GIOS_API;
