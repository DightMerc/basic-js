module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const team = []
  for (let index = 0; index < members.length; index++) {
    if (typeof members[index] === 'string') {
      team.push(members[index].trim()[0].toUpperCase())
    }
  }

  return team.sort().join('');
};