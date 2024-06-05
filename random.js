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

// Generators in JS
function* createFlow3() {
  yield 4;
  yield 5;
  yield 6;
}

console.log(createFlow3);

const returnNextElement4 = createFlow3();
console.log(returnNextElement4.next());
console.log(returnNextElement4.next());
console.log(returnNextElement4.next());
console.log(returnNextElement4.next());

// Async Generators
function callAfterReceivingData(data) {
  const response = asyncGen.next(data).value;
  console.log({ response });
  response.then(printFinalData);
}

function printFinalData(response) {
  asyncGen.next(response);
}

function* createAnAsyncGenerator() {
  const data = yield fetch("http://jsonplaceholder.typicode.com/posts/1");
  const response = yield data.json();
  console.log(response);
}

const asyncGen = createAnAsyncGenerator();
const futureDataPromise = asyncGen.next().value;

futureDataPromise.then(callAfterReceivingData);

// Async - Await

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("done");
}

async function doSomething() {
  console.log("Me First");
  const data = await fetch("http://jsonplaceholder.typicode.com/posts/1");
  const response = await data.json();
  console.log(response);
  console.log("Me third");
}

doSomething();
console.log("Me Second");

foo();
bar();
