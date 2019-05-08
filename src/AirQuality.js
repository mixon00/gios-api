/**
 * AirQuality raw data object
 * @typedef {object} AirQuality~Object
 * @property {number} id Station id.
 * @property {string|number} stCalcDate ST calculation date
 * @property {object} stIndexLevel ST index level
 * @property {number} stIndexLevel.id ST index level id
 * @property {string} stIndexLevel.indexLevelName ST index level name
 * @property {string} stSourceDataDate ST source data date
 * @property {string|number} so2CalcDate SO2 calculation date
 * @property {object} so2IndexLevel SO2 index level
 * @property {number} so2IndexLevel.id SO2 index level id
 * @property {string} so2IndexLevel.indexLevelName SO2 index level name
 * @property {string} so2SourceDataDate SO2 source data date
 * @property {string|number} no2CalcDate NO2 calculation date
 * @property {object} no2IndexLevel NO2 index level
 * @property {number} no2IndexLevel.id NO2 index level id
 * @property {string} no2IndexLevel.indexLevelName NO2 index level name
 * @property {string} no2SourceDataDate NO2 source data date
 * @property {string|number} coCalcDate CO calculation date
 * @property {object} coIndexLevel CO index level
 * @property {number} coIndexLevel.id CO index level id
 * @property {string} coIndexLevel.indexLevelName CO index level name
 * @property {string} coSourceDataDate CO source data date
 * @property {string|number} pm10CalcDate PM10 calculation date
 * @property {object} pm10IndexLevel PM10 index level
 * @property {number} pm10IndexLevel.id PM10 index level id
 * @property {string} pm10IndexLevel.indexLevelName PM10 index level name
 * @property {string} pm10SourceDataDate PM10 source data date
 * @property {string|number} pm25CalcDate PM2.5 calculation date
 * @property {object} pm25IndexLevel PM2.5 index level
 * @property {number} pm25IndexLevel.id PM2.5 index level id
 * @property {string} pm25IndexLevel.indexLevelName PM2.5 index level name
 * @property {string} pm25SourceDataDate PM2.5 source data date
 * @property {string|number} o3CalcDate O3 calculation date
 * @property {object} o3IndexLevel O3 index level
 * @property {number} o3IndexLevel.id O3 index level id
 * @property {string} o3IndexLevel.indexLevelName O3 index level name
 * @property {string} o3SourceDataDate O3 source data date
 * @property {string|number} c6h6CalcDate C6H6 calculation date
 * @property {object} c6h6IndexLevel C6H6 index level
 * @property {number} c6h6IndexLevel.id C6H6 index level id
 * @property {string} c6h6IndexLevel.indexLevelName C6H6 index level name
 * @property {string} c6h6SourceDataDate C6H6 source data date
 * @property {boolean} stIndexStatus ST status
 * @property {string} stIndexCrParam ST param
 */

/**
 * AirQuality data object
 * @typedef {object} AirQuality~DataObject
 * @property {numbert} stationId Station id
 * @property {object} SO2 SO2 measurement data
 * @property {number} SO2.id  SO2 measurement level id
 * @property {number} SO2.calcTimestamp SO2 calculate date and time
 * @property {number} SO2.sourceTimestamp SO2 source date and time
 * @property {string} SO2.name SO2 measurement level name
 * @property {object} NO2 NO2 measurement data
 * @property {number} NO2.id  NO2 measurement level id
 * @property {number} NO2.calcTimestamp SO2 calculate date and time
 * @property {number} NO2.sourceTimestamp NO2 source date and time
 * @property {string} NO2.name NO2 measurement level name
 * @property {object} CO CO measurement data
 * @property {number} CO.id  CO measurement level id
 * @property {number} CO.calcTimestamp SO2 calculate date and time
 * @property {number} CO.sourceTimestamp CO source date and time
 * @property {string} CO.name CO measurement level name
 * @property {object} PM10 PM10 measurement data
 * @property {number} PM10.id  PM10 measurement level id
 * @property {number} PM10.calcTimestamp SO2 calculate date and time
 * @property {number} PM10.sourceTimestamp PM10 source date and time
 * @property {string} PM10.name PM10 measurement level name
 * @property {object} PM25 PM25 measurement data
 * @property {number} PM25.id  PM25 measurement level id
 * @property {number} PM25.calcTimestamp SO2 calculate date and time
 * @property {number} PM25.sourceTimestamp PM25 source date and time
 * @property {string} PM25.name PM25 measurement level name
 * @property {object} O3 O3 measurement data
 * @property {number} O3.id  O3 measurement level id
 * @property {number} O3.calcTimestamp SO2 calculate date and time
 * @property {number} O3.sourceTimestamp O3 source date and time
 * @property {string} O3.name O3 measurement level name
 * @property {object} C6H6 C6H6 measurement data
 * @property {number} C6H6.id  C6H6 measurement level id
 * @property {number} C6H6.calcTimestamp SO2 calculate date and time
 * @property {number} C6H6.sourceTimestamp C6H6 source date and time
 * @property {string} C6H6.name C6H6 measurement level name
 */

/**
 * Class to parse air data object.
 * @class
 * @property {AirQuality~DataObject} airData Air data object.
 * @property {AirQuality~Object} raw Raw air data object.
 * */
class AirQuality {
  /**
   * Create a AirQuality.
   * @param {AirQuality~Object} airData Raw air data object.
   * @example
   *
   * const airQuality = new AirQuality(airData);
   */
  constructor(airData) {
    this.raw = airData;
    this.airData = {
      stationId: airData.id,
    };

    const keys = Object.keys(airData);
    const calcReg = /(.+)(CalcDate)/gim;
    const levelReg = /(.+)(IndexLevel)/gim;
    const sourceReg = /(.+)(SourceDataDate)/gim;

    for (const key of keys) {
      const result =
        calcReg.exec(key) || levelReg.exec(key) || sourceReg.exec(key);

      if (result && result[1] !== 'st') {
        const [key, code, type] = result;

        this.airData[code.toUpperCase()] =
          this.airData[code.toUpperCase()] || {};

        if (type === 'CalcDate') {
          this.airData[code.toUpperCase()].calcTimestamp =
            typeof airData[key] === 'string'
              ? Date.parse(airData[key])
              : airData[key];
        }

        if (type === 'SourceDataDate') {
          if (airData[key]) {
            this.airData[code.toUpperCase()].sourceTimestamp =
              typeof airData[key] === 'string'
                ? Date.parse(airData[key])
                : airData[key];
          } else this.airData[code.toUpperCase()].sourceTimestamp = null;
        }

        if (type === 'IndexLevel') {
          if (airData[key]) {
            this.airData[code.toUpperCase()].name = airData[key].indexLevelName;
            this.airData[code.toUpperCase()].id = airData[key].id;
          } else {
            this.airData[code.toUpperCase()].name = null;
            this.airData[code.toUpperCase()].id = null;
          }
        }
      }
    }
  }

  /**
   * Returns the station id.
   * @return {number} Station id.
   * @example
   *
   * const airQuality = new AirQuality(airData);
   * const stationID = airQuality.getId();
   */
  getId() {
    return this.airData.stationId;
  }

  /**
   * Returns air quality data.
   * @return {AirQuality~DataObject} Air quality data.
   * @example
   *
   * const airQuality = new AirQuality(airData);
   * const airQualityData = airQuality.getData();
   */
  getData() {
    return this.airData;
  }

  /**
   * Returns air quality data for param.
   * @return {AirQuality~DataObject} Air quality data for param.
   * @example
   *
   * const airQuality = new AirQuality(airData);
   * const airQualityData = airQuality.getParam("PM10");
   */
  getParam(paramName) {
    return this.airData[paramName];
  }

  /**
   * Returns raw air quality data object.
   * @return {AirQuality~Object} Raw air quality data object.
   * @example
   *
   * const airQuality = new AirQuality(airData);
   * const rawAirQualityData = airQuality.raw();
   */
  getRaw() {
    return this.raw;
  }
}

module.exports = AirQuality;
