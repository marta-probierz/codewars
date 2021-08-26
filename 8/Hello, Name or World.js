function hello(name) {
  if (name === '' || name === undefined) {
    return 'Hello, World!'
  } else {
    let low = name.toLowerCase().split('');
    let res = low[0].toUpperCase().split('');
    let tog = res.concat(low);
    let rem = tog.splice(1,1);
    return `Hello, ${tog.join('')}!`;
  }
}
