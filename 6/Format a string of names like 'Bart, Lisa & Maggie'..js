function list(names){
 if (names.length > 1) {
   return `${otherNames(names)} & ${names[names.length - 1].name}`
 } else if (names.length === 1) {
   return names[0].name
 }
  return '';
}

function otherNames(array) {
  return array.splice(0, array.length - 1).map(person => person.name).join(', ');
}
