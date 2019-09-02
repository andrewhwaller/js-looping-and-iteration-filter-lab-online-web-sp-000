// Code your solution in this file
function findMatching(drivers, name) {
<<<<<<< HEAD
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  let nameLength = name.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === name;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
=======
  return drivers.filter(function (name) {
    return name.toLowerCase() === name.toLowerCase();
>>>>>>> 7a6b9a576f3d3c9e461feffc266c2f8ef60d173a
  });
}
