## Promises Challenges

### Challenge 1

Let's start by reviewing asynchronous functions! Using setTimeout, print the
string 'Hello!' after 1000ms.

### Challenge 2

Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a
delay of 1000ms, using setTimeout. Print the contents of the promise after it
has been resolved by passing `console.log` to `.then`

### Challenge 3

Create another promise. Now have it reject with a value of "Rejected!" without
using setTimeout. Print the contents of the promise after it has been rejected
by passing `console.log` to `.catch`

### Challenge 4

Promises are asynchronous and we're now going to prove that they indeed are!
Create a promise and have it resolve with the value of "Promise has been
resolved!" Then uncomment the code at bottom of Challenge 4. What order do we
expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

### Challenge 5

Write a function `delay` that returns a promise. And that promise should return
a setTimeout that calls resolve after 1000ms

### Challenge 6

This challenge we'll chain promises together using ".then" Create two variables:
firstPromise and secondPromise Set secondPromise to be a promise that resolves
to "Second!" Set firstPromise to be a promise that resolves to secondPromise
Call the firstPromise with a ".then", which will return the secondPromise
promise. Then print the contents of the promise after it has been resolved by
passing console.log to .then

#### Challenge 7

We have a API that gets data from a database, it takes an index parameter and
returns a promise Your challenge is to use Promise.all to make 3 API calls and
return all the data when the calls are complete

## Iterators Challenges

### Challenge 1

1. Create a for loop that iterates through an array and returns the sum of the
   elements of the array.
2. Create a functional iterator for an array that
   returns each value of the array when called, one element at a time.

### Challenge 2

Create an iterator with a next method that returns each value of the array when
`.next` is called.

### Challenge 3

Write code to iterate through an entire array using your `nextIterator` and sum
the values.

### Challenge 4

Create an iterator with a `next` method that returns each value of a set when
`.next` is called

### Challenge 5

Create an iterator with a `next` method that returns an array with two elements
(where the first element is the index and the second is the value at that index)
when `.next` is called.

### Challenge 6

Create an iterator that returns each word from a string of words on the call of
its `.next method (hint: use regex!) Then attach it as a method to the prototype
of a constructor Words. Hint: research Symbol.iterator!
