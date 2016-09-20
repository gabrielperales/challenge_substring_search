exports.substring_search =  function(d, e) {
  return d.reduce(function(b, c) {
    var a = c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), a = new RegExp(a, "g");
    for (b[c] = 0;a.lastIndex = (a.exec(e) || {index:-1}).index + 1;) {
      b[c]++;
    }
    return b;
  }, {});
};
