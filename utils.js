'use strict';

const path = require('path');

module.exports = {

  isOutside(base, location) {
    let b = base;
    if(base.indexOf('.webpack') >= 0) {
      b = base.replace('/.webpack', '');
    }
    const relative = path.relative(b, location);

    return !!(relative && relative.indexOf('..') !== -1);
  }

};
