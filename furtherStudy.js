'use strict';

function wordsInCommon(words1, words2) {
  const set1 = new Set(words1);
  for (const word of words2){
    set1.add(word);
  }
  return Array.from(set1);
}

function kidsGame(names) {
  if (names.length === 0){
    return [];
  }

  const result = [];
  let word = names[0]
  delete names[0]
  let lastLetter = word[word.length - 1];
  result.push(word);

  let checkedAll = false;
  while (! checkedAll){
    checkedAll = true;
    for (const idx in names){
      if (names[idx][0] === lastLetter){
        lastLetter = names[idx][names[idx].length - 1];
        result.push(names[idx]);
        delete names[idx]
        checkedAll = false;
        break;
      }
    }
  }
  return result;
}
