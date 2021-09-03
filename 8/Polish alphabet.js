function correctPolishLetters (string) {
  let letters = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  let arr = [...string];
  return arr.map(e => e.replace(/[ąćęłńóśźż]/g, letters[e])).join('');
}
