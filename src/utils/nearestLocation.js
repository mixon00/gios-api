/**
 * Degrees to Radians
 * @ignore
 * */
const _deg2Rad = deg => {
  return (deg * Math.PI) / 180;
};

/**
 * Pythagoras Equirectangular
 * @ignore
 * */
const _pythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
  lat1 = _deg2Rad(lat1);
  lat2 = _deg2Rad(lat2);
  lon1 = _deg2Rad(lon1);
  lon2 = _deg2Rad(lon2);
  const R = 6371;
  const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  const y = lat2 - lat1;
  const d = Math.sqrt(x * x + y * y) * R;
  return d;
};

/**
 * Find the nearest location by coordinates
 * @ignore
 * */
const nearestLocation = (location, stations) => {
  const distances = [];

  for (let index = 0; index < stations.length; ++index) {
    let distance = Math.round(
      _pythagorasEquirectangular(
        location.lat,
        location.lon,
        stations[index].gegrLat,
        stations[index].gegrLon
      ) * 1000
    );
    distances.push({ distance, index });
  }

  distances.sort((a, b) =>
    a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
  );

  return distances;
};

module.exports = nearestLocation;
