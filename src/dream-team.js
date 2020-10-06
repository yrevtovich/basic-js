module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let firstLetters = [];
    
    members.forEach( item => {      
      if (typeof item === 'string') {
        let name = item.replace(/\s/g, '');
        firstLetters.push(name[0].toUpperCase());      
      }
    });

    firstLetters.sort();
    return firstLetters.join('');
  } else {
    return false;
  }  
};
