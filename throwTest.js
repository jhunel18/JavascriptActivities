function add(x, y) {
    if (typeof x !== 'number') {
      throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
      throw 'The second argument must be a number';
    }
  
    return x + y;
  }
  
 add('1',20);