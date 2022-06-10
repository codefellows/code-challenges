"use strict";

function towersWithViews(towers) {
  if (!Array.isArray(towers) || towers.length === 0) {
    return [];
  }

  // add the last index to the result because there's never another tower blocking it
  let result = [towers.length - 1];
  let maxSeen = towers[towers.length - 1];
  for (let i = towers.length - 1; i >= 0; i--) {
    if (towers[i] > maxSeen) {
      maxSeen = towers[i];
      result.push(i)
    }
  }
  result.reverse();
  return result;
}

module.exports = towersWithViews
