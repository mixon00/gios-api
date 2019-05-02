const GIOS_API = require("../src/gios_api");

describe("GIOS_API Class", () => {
  it("new GIOS_API()", () => {
    const giosAPI = new GIOS_API();
    expect(giosAPI).toBeTruthy();
  });

  it("new GIOS_API().findAll()", async () => {
    fetch = jest.fn(() => new Promise(resolve => resolve()));
    const giosAPI = new GIOS_API();
    const data = await giosAPI.findAll();
    const station = data[1];
    expect(station.getId()).toBe(117);
    expect(station.getName()).toEqual("Wrocław - Korzeniowskiego");
  });

  it("new GIOS_API().findById()", async () => {
    fetch = jest.fn(() => new Promise(resolve => resolve()));
    const giosAPI = new GIOS_API();
    const data = await giosAPI.findById(842);
    const station = data[0];
    expect(data.length).toBe(1);
    expect(station.getId()).toBe(842);
    expect(station.getName()).toEqual("Ustroń, ul. Sanatoryjna 7");
  });

  it("new GIOS_API().findInRange()", async () => {
    fetch = jest.fn(() => new Promise(resolve => resolve()));
    const giosAPI = new GIOS_API();
    const data = await giosAPI.findInRange(52.406376, 16.925167);
    const station = data[0];
    expect(station.getId()).toBe(943);
    expect(station.getCoordinates()).toEqual({
      lat: 52.398175,
      lon: 16.959519
    });
  });
});
