module.exports = function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }

  if(isNaN(date)) {
    throw new Error();
  }

  if (isNaN(Date.parse(date)) === false) {    
    const month = date.getMonth() + 1;
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    if (month < 3 || month === 12) {
      return seasons[0];
    } else if ( month < 6) {
      return seasons[1];
    } else if (month < 9) {
      return seasons[2];
    } else if( month < 12){
      return seasons[3];
    } else {
      return new Error();
    }     
  } else {
    throw new Error();
  }
};