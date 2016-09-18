exports.substring_search = (words, sentence) =>
  words.reduce((acc, curr) => {
    const regexp = curr.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    acc[curr] = (sentence.match(new RegExp(regexp, 'g')) || []).length;
    return acc;
  }, {});

