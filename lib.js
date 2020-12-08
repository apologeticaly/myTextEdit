// Write a function that uppercases the first character of string
// Write a function to capitalize every letter
// Write a function that uppercases the first letter of each word in a string
// Write a function that uppercases every other letter
// Write a function that removes all whitespace from a given string
// Write a function that removes only the extra whitespace from a given string (“a      b ” → “a b”)
// Write a function that kebab case
// Write a function that snake case
// Write a function that camel case
// Write a function that shifts each letter

////// LEAN MAP, FILTER, REDUCE IN PYTHON !!!!!!!


// USE FOR_EACH OR MAP, FILTER, REDUCE
function upperCase(input) {
  const corpus = input.split('');
  const string = [];
  // NOT EFFICIENT
  for (let i = 0; i < corpus.length; i += 1) {
    if (i === 0) {
      string.push(corpus[i].toUpperCase());
    } else {
      string.push(corpus[i]);
    }
  }

  return string.join('');
}

function upperCaseEveryWord(input) {
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i - 1] === undefined) {
      string.push(corpus[i].toUpperCase());
      i += 1;
    }
    if (corpus[i - 1] === ' ') {
      string.push(corpus[i].toUpperCase());
    } else {
      string.push(corpus[i]);
    }
  }
  return string.join('');
}

function upperCaseEveryOtherLetter(input) {
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (i % 2 === 0) {
      string.push(corpus[i].toUpperCase());
    } else {
      string.push(corpus[i]);
    }
  }
  return string.join('');
}

function deleteSpaces(input) {
  // Do a .split() on the ' 's, you'd have an array of all characters that aren't a space, then .join()
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i] !== ' ') {
      string.push(corpus[i]);
    }
  }
  return string.join('');
}

function deleteExtraSpaces(input) {
  // Use string.trim() to remove trailing ' 's
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i + 1] === ' ') {
      if (corpus[i] !== ' ') {
        string.push(corpus[i]);
      }
    } else {
      string.push(corpus[i]);
    }
  }
  return string.join('');
}

function kabobCase(input) {
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i] === ' ') {
      string.push('-');
      i += 1;
    }
    string.push(corpus[i]);
  }
  return string.join('');
}

function snakeCase(input) {
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i] === ' ') {
      string.push('_');
      i += 1;
    }
    string.push(corpus[i]);
  }
  return string.join('');
}

function camelCase(input) {
  const corpus = input.split('');
  const string = [];
  for (let i = 0; i < corpus.length; i += 1) {
    if (corpus[i] === ' ') {
      i += 1;
    }
    if (corpus[i - 1] === ' ') {
      string.push(corpus[i].toUpperCase());
    } else {
      string.push(corpus[i]);
    }
  }
  return string.join('');
}
 

// TESTS
// console.log(upperCase('testing'));
// console.log(upperCaseEveryWord('testing one two three four five'));
// console.log(upperCaseEveryOtherLetter('supercalifragilisticexpialidocious'));
// console.log(deleteSpaces('testing one two three four five'));
// console.log(deleteExtraSpaces('testing   one                     two     three    four              five'));
// console.log(kabobCase('testing one'));
// console.log(snakeCase('testing one'));
// console.log(camelCase('chicken fried rice'));

module.exports.upperCase = upperCase
module.exports.upperCaseEveryWord = upperCaseEveryWord
module.exports.upperCaseEveryOtherLetter = upperCaseEveryOtherLetter
module.exports.deleteSpaces = deleteSpaces
module.exports.deleteExtraSpaces = deleteExtraSpaces
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase