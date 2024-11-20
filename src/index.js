function multiply(i, j) {
  return i * j;
}

function fetchData(url) {
  return fetch(url);
}

module.exports = { multiply, fetchData };
