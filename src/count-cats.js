module.exports = function countCats(backyard) {
  let number = 0;
  backyard.forEach( item => {
    item.forEach( elem => {
      if (elem === '^^') {
        number += 1;
      }
    });
  }); 

  return number;
};
