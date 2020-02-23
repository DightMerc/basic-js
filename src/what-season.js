module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw 'Invalid argument';
  if ((typeof date.getTime() === 'function')) throw 'Tricky moment';
  const seasons = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }
  const month = date.getMonth();
  for (const key in seasons) {
    if (seasons.hasOwnProperty(key)) {
      if (seasons[key].includes(month)) {
        return key;
      }
    }
  }

};
