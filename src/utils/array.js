const addToArray = (array, item) => {
  array.push(item);
  return array;
};

const removeFromArray = (array, item) => {
  return array.filter((arrItem) => arrItem !== item);
};

const arrayContains = (array, item) => {
  return array.includes(item);
};

module.exports = { addToArray, removeFromArray, arrayContains };
