// We want to create a function that holds both our array, the position we are
// currently at in our 'stream' of elements and has the ability to return the
// next element

function createFunction(arr) {
  let i = 0;

  return function () {
    const element = arr[i];
    i++;
    return element;
  };
}

const returnNextElement = createFunction([1, 2, 3]);
console.log(returnNextElement());
console.log(returnNextElement());
console.log(returnNextElement());
console.log(returnNextElement());

// Generators
function createFlow(array) {
  let i = 0;
  const inner = {
    next: function () {
      const element = array[i];
      i++;
      return element;
    },
    done: function () {
      return i >= array.length;
    },
  };

  return inner;
}

const returnNextElement1 = createFlow([4, 5, 6]);
console.log(returnNextElement1.next());
console.log(returnNextElement1.next());
console.log(returnNextElement1.next());
console.log(returnNextElement1.next());
