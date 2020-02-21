const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let activityFloat = parseFloat(sampleActivity);
    if (isNaN(activityFloat) 
      || activityFloat <= 0 
      || activityFloat > MODERN_ACTIVITY 
      || typeof sampleActivity !== "string") return false;
    else {
      let k = 0.693 / HALF_LIFE_PERIOD;
      let qt_year = Math.ceil(Math.log(MODERN_ACTIVITY / activityFloat) / k);
      return qt_year;
    }    
};
