'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCount = {}
  for (const word of phrase.split(' ')){
    if (wordCount[word] === undefined){
      wordCount[word] = 1;
    }
    else{
      wordCount[word] ++;
    }
  }
  return wordCount;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {}
    melon_prices[2.50] = ['Cantaloupe', 'Honeydew'];
    melon_prices[2.95] = ['Watermelon'];
    melon_prices[3.25] = ['Musk', 'Crenshaw'];
    melon_prices[14.25] = ['Christmas'];
  const result = melon_prices[price]
  if (result === undefined){
    return
  }
  return result.sort()
}
