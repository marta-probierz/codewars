function swapVowelCase(str) {
  let chars = {'a':'A','e':'E','i':'I', 'o':'O', 'u':'U','A':'a', 'E':'e', 'I':'i', 'O':'o', 'U':'u'};
  return str.replace(/[aeiouAEIOU]/g, i => chars[i]);
}
