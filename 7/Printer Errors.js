function printerError(s) {
    let errors = 0;
    let arr = s.split('').forEach(e => {
      if (e === 'n' || e === 'o' || e === 'p' || e === 'q' || e === 'r' || e === 's' || e === 't' || e === 'u' || e === 'v' || e === 'w' || e === 'x' || e === 'y' || e === 'z') {
        errors++;
      } 
    });
    return errors + '/' + s.length;
}
