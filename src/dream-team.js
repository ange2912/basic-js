module.exports = function createDreamTeam(members) {
  let teamName = '';
  if (!Array.isArray(members) || members.length === 0) return false
  else {
    members.forEach(i => {
      if (typeof (i) === 'string') {
        teamName += i.trim()[0].toUpperCase();
      }
    })
    teamName = teamName.split('').sort().join('');
    return teamName;
  }
};