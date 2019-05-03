const Sensor = require("../src/Sensor");

describe("Sensor Class", () => {
  const mock_data = {
    id: 6085,
    stationId: 944,
    param: {
      paramName: "pył zawieszony PM10",
      paramFormula: "PM10",
      paramCode: "PM10",
      idParam: 3
    }
  };

  it("new Sensor()", () => {
    const sensor = new Sensor();
    expect(sensor).toBeTruthy();
  });

  it("new Sensor(data)", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor).toBeTruthy();
    expect(sensor.sensor).toEqual({
      id: 6085,
      stationId: 944,
      param: {
        paramName: "pył zawieszony PM10",
        paramFormula: "PM10",
        paramCode: "PM10",
        idParam: 3
      }
    });
  });

  it("new Sensor(data).getId()", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor.getId()).toEqual(6085);
  });

  it("new Sensor(data).getStationId()", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor.getStationId()).toEqual(944);
  });

  it("new Sensor(data).getName()", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor.getName()).toEqual("pył zawieszony PM10");
  });

  it("new Sensor(data).getCode()", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor.getCode()).toEqual("PM10");
  });

  it("new Sensor(data).getRaw()", () => {
    const sensor = new Sensor(mock_data);
    expect(sensor.getRaw()).toEqual({
      id: 6085,
      stationId: 944,
      param: {
        paramName: "pył zawieszony PM10",
        paramFormula: "PM10",
        paramCode: "PM10",
        idParam: 3
      }
    });
  });
});
