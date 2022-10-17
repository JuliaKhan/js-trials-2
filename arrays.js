'use strict';

// 1. printIndices
function printIndices(items) {
  for (const idx in items){
    console.log(`${items[idx]} ${Number(idx) + 1}`);
  }

}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const idx in items){
    if (idx % 2 === 0){
      result.push(items[idx]);
    }
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const result = items.slice(0,n);
  console.log(result.reverse())
}
