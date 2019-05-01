const GIOS_API = require("../src/GIOS_API");

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
    expect(data.length).toBe(175);
    expect(station.getId()).toBe(117);
    expect(station.getName()).toEqual("Wrocław - Korzeniowskiego");
  });
});
