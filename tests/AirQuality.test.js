const AirQuality = require('../src/AirQuality');

describe('AirQuality Class', () => {
  const mock_data = {
    id: 944,
    stCalcDate: '2019-05-07 10:12:59',
    stIndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    stSourceDataDate: '2019-05-07 09:00:00',
    so2CalcDate: '2019-05-07 10:12:59',
    so2IndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    so2SourceDataDate: '2019-05-07 09:00:00',
    no2CalcDate: 1557216779000,
    no2IndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    no2SourceDataDate: '2019-05-07 09:00:00',
    coCalcDate: '2019-05-07 10:12:59',
    coIndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    coSourceDataDate: '2019-05-07 09:00:00',
    pm10CalcDate: '2019-05-07 10:12:59',
    pm10IndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    pm10SourceDataDate: '2019-05-07 09:00:00',
    pm25CalcDate: '2019-05-07 10:12:59',
    pm25IndexLevel: null,
    pm25SourceDataDate: '2019-05-07 09:00:00',
    o3CalcDate: '2019-05-07 10:12:59',
    o3IndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    o3SourceDataDate: '2019-05-07 09:00:00',
    c6h6CalcDate: '2019-05-07 10:12:59',
    c6h6IndexLevel: {
      id: 0,
      indexLevelName: 'Bardzo dobry',
    },
    c6h6SourceDataDate: '2019-05-07 09:00:00',
    stIndexStatus: true,
    stIndexCrParam: 'OZON',
  };

  it('new AirQuality()', () => {
    const airQuality = new AirQuality(mock_data);
    expect(airQuality).toBeTruthy();
  });

  it('new AirQuality(data)', () => {
    const airQuality = new AirQuality(mock_data);
    expect(airQuality).toBeTruthy();
    expect(airQuality.airData.stationId).toEqual(944);
  });

  it('new AirQuality(data).getId()', () => {
    const airQuality = new AirQuality(mock_data);
    expect(airQuality.getId()).toEqual(944);
  });

  it('new AirQuality(data).getData()', () => {
    const airQuality = new AirQuality(mock_data);
    expect(airQuality.getData().stationId).toEqual(944);
  });

  it('new AirQuality(data).getParam("PM10")', () => {
    const airQuality = new AirQuality(mock_data);
    const param = airQuality.getParam('PM10');
    expect(param.name).toEqual('Bardzo dobry');
  });

  it('new AirQuality(data).getRaw()', () => {
    const airQuality = new AirQuality(mock_data);
    const raw = airQuality.getRaw();
    expect(raw).toEqual(mock_data);
  });
});
