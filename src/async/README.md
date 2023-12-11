## Introduction

`Promise` is an object that represents the completion or failure of an asynchronous operation. When the asynchronous
operation completes, call `resolve`, and if it fails, call `reject` to let you know the error.

The `async` keyword allows you to perform asynchronous operations within a function. If you put `async` in front of a
function, the function always returns a `Promise`, and you can use `await` inside.

Now `await` is a keyword that waits for the `Promise` to complete before moving on to the next code. Using this, you
can write asynchronous code synchronously, making the code more concise and easier to understand.

## What to test?

- [x] `Promise` and `async/await` syntax
- [x] `await` makes asynchronous code synchronous
