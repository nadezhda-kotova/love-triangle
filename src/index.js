/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let element = preferences[i] - 1;
    let element2 = preferences[element] - 1;
    if (preferences[element2] - 1 == i && element != i) {
      count++;
      preferences [i] = 0
    }
  }
  return count
};
