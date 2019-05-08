const Station = require('./Station');
const SensorsList = require('./SensorsList');
const AirQuality = require('./AirQuality');
const fetch = require('node-fetch').default;
const { api } = require('./constants');
const nearestLocation = require('./utils/nearestLocation');

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
    try {
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

      return nearestStations.map(
        nearest => new Station(stations[nearest.index])
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch station sensors by station id.
   *
   * @async
   * @param {number} id - The station id.
   * @param {boolean} [prefetch=false] Flag to prefecth all sensors data.
   * @return {Promise<StationsList>} Return the StationList class.
   * @throws {TypeError} Connection error
   * @example
   *
   * const giosApi = new GIOS_API();
   * const sensors = await giosApi.fetchStationSensors(944);
   *
   * //or
   *
   * const sensors = await giosApi.fetchStationSensors(944, true);
   */
  async fetchStationSensors(stationId, prefetch = false) {
    try {
      const response = await fetch(`${api.url}${api.sensors}${stationId}`);
      const sensors = await response.json();
      const sensorsList = new SensorsList(sensors);

      if (prefetch) await sensorsList.prefetchData();

      return sensorsList;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Fetch station air quality by station id.
   *
   * @async
   * @param {number} id - The station id.
   * @return {Promise<AirQuality>} Return the StationList class.
   * @throws {TypeError} Connection error
   * @example
   *
   * const giosApi = new GIOS_API();
   * const airQuality = await giosApi.fetchAirQuality(944);
   */
  async fetchAirQuality(stationId) {
    try {
      const response = await fetch(`${api.url}${api.air_quality}${stationId}`);
      const airQuality = await response.json();

      return new AirQuality(airQuality);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = GIOS_API;
