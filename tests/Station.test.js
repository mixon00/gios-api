const Station = require("../src/Station");

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

it("create station class", () => {
  const station = new Station();
  expect(station).toBeTruthy();
});

it("has correct property", () => {
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

it("returns station id", () => {
  const station = new Station(mock_data);
  expect(station.getId()).toEqual(944);
});

it("returns station name", () => {
  const station = new Station(mock_data);
  expect(station.getName()).toEqual("Poznan-Dabrowskiego");
});

it("returns station coordinates", () => {
  const station = new Station(mock_data);
  expect(station.getCoordinates()).toEqual({
    lat: 52.420319,
    lon: 16.877289
  });
});

it("returns station city", () => {
  const station = new Station(mock_data);
  expect(station.getCity()).toEqual({
    id: 729,
    name: "Poznań",
    address: "ul. Dąbrowskiego 169",
    voivodeship: "WIELKOPOLSKIE"
  });
});
