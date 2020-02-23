const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(activity) || activity > MODERN_ACTIVITY || activity <= 0) {
    return false;
  }
  const ln2 = 0.693;
  return Math.ceil(Math.log(MODERN_ACTIVITY/activity)/(ln2/HALF_LIFE_PERIOD));
};
