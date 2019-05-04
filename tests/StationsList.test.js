const SensorsList = require("../src/SensorsList");
const Sensor = require("../src/Sensor");

describe("SensorsList Class", () => {
  const sensor_mock_data = {
    id: 6087,
    stationId: 944,
    param: {
      paramName: "dwutlenek siarki",
      paramFormula: "SO2",
      paramCode: "SO2",
      idParam: 1
    }
  };
  const mock_data = [sensor_mock_data];

  it("new SensorsList()", () => {
    const sensorsList = new SensorsList(mock_data);
    expect(sensorsList).toBeTruthy();
  });

  it("new SensorsList(data)", () => {
    const sensorsList = new SensorsList(mock_data);
    const mockSensor = new Sensor(sensor_mock_data);
    expect(sensorsList).toBeTruthy();
    expect(sensorsList.sensors).toEqual({
      SO2: mockSensor
    });
  });

  it("new SensorsList(data).getList()", () => {
    const sensorsList = new SensorsList(mock_data);
    const mockSensor = new Sensor(sensor_mock_data);
    const sensors = sensorsList.getList();
    expect(sensors).toEqual({
      SO2: mockSensor
    });
  });

  it("new SensorsList(data).getSensor()", () => {
    const sensorsList = new SensorsList(mock_data);
    const mockSensor = new Sensor(sensor_mock_data);
    const sensor = sensorsList.getSensor("SO2");
    expect(sensor).toEqual(mockSensor);
  });

  it("new SensorsList(data).getCodes()", () => {
    const sensorsList = new SensorsList(mock_data);
    const sensor = sensorsList.getCodes();
    expect(sensor).toEqual(["SO2"]);
  });

  it("new SensorsList(data).prefetchData()", async () => {
    const sensorsList = new SensorsList(mock_data);
    await sensorsList.prefetchData();
    const sensor = sensorsList.getSensor("SO2");
    expect(sensor.data.length).toBeGreaterThan(0);
  });
});
