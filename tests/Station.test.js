const Station = require("../src/Station");
describe("Station Class", () => {
  const mock_data = {
    id: 944,
    stationName: "Poznan-Dabrowskiego",
    gegrLat: "52.420319",
    gegrLon: "16.877289",
    city: {
      id: 729,
      name: "Poznań",
      commune: {
        communeName: "Poznań",
        districtName: "Poznań",
        provinceName: "WIELKOPOLSKIE"
      }
    },
    addressStreet: "ul. Dąbrowskiego 169"
  };

  it("new Station()", () => {
    const station = new Station();
    expect(station).toBeTruthy();
  });

  it("new Station(data)", () => {
    const station = new Station(mock_data);
    expect(station.station).toEqual({
      id: 944,
      stationName: "Poznan-Dabrowskiego",
      gegrLat: "52.420319",
      gegrLon: "16.877289",
      city: {
        id: 729,
        name: "Poznań",
        commune: {
          communeName: "Poznań",
          districtName: "Poznań",
          provinceName: "WIELKOPOLSKIE"
        }
      },
      addressStreet: "ul. Dąbrowskiego 169"
    });
  });

  it("new Station(data).getId()", () => {
    const station = new Station(mock_data);
    expect(station.getId()).toEqual(944);
  });

  it("new Station(data).getName()", () => {
    const station = new Station(mock_data);
    expect(station.getName()).toEqual("Poznan-Dabrowskiego");
  });

  it("new Station(data).getCoordinates()", () => {
    const station = new Station(mock_data);
    expect(station.getCoordinates()).toEqual({
      lat: 52.420319,
      lon: 16.877289
    });
  });

  it("new Station(data).getCity()", () => {
    const station = new Station(mock_data);
    expect(station.getCity()).toEqual({
      id: 729,
      name: "Poznań",
      address: "ul. Dąbrowskiego 169",
      voivodeship: "WIELKOPOLSKIE"
    });
  });

  it("new Station(data).getRaw()", () => {
    const station = new Station(mock_data);
    expect(station.getRaw()).toEqual({
      id: 944,
      stationName: "Poznan-Dabrowskiego",
      gegrLat: "52.420319",
      gegrLon: "16.877289",
      city: {
        id: 729,
        name: "Poznań",
        commune: {
          communeName: "Poznań",
          districtName: "Poznań",
          provinceName: "WIELKOPOLSKIE"
        }
      },
      addressStreet: "ul. Dąbrowskiego 169"
    });
  });
});
