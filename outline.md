# React, RxJS, and You

## Outline

### Title Card

### Whose that guy?

### TOC

#### What this isn't

* Not an intro to React
* Not an intro to Redux
* Not an intro to RxJS

#### What it is

High level look at using RxJS Observables with React and Redux

### What is RxJS?

* A library for creating Observables

#### What are Observables?

The shortest answer?

You can think of Observables in an abstract way as a special type of function
that can return multiple items over time.

#### Relationship to Promises?

Observables are often compared to promises. While they can do what promises do,
the comparison falls short.

Promises are immediate. As soon as you create the promise it is working to
fulfill itself. Observables are lazy, meaning you can define them to perform a
task and it won't actually do anything until you tell it too.

Promises are always async. Observables can be either sync or async.

### Why not just use promises?

Promise are great for single value requests but often fall short in real life.

* You can't represent WebSocket emissions using promises.
* You can't retry a promise if it fails without recreating the promise
* Limited composability

### Why is it awesome?

Observable are powerful. There is very little you can't do with Observables.

Need to create an tinder-like app where you can swipe left for no and right for `hell yeah`?

Observables.

Need to cache a database query for any number of request that expires after two
hours and refreshes itself on the next request?

Observables.

Need to fetch the latest data from your server, retry 4 times if it fails, and then gracefully show your user a message informing them that the zombie
apocalypse has cause your request to fail and that they should run for their
lives?

Observables.

### RxJS in React


#### Purpose build libraries

There are a couple of libraries built to sprinkle Rx all over your React.

* [rx-react](https://github.com/fdecampredon/rx-react): RxJS bindings for React
* [rx-recompose](https://github.com/acdlite/recompose/tree/master/src/packages/rx-recompose):
    compose React function components or Higher Order Components(HOC)
    using RxJS

#### Add observability yourself


> example adding plain rx to do data fetching

### RxJS in Redux


#### Side-effects

In Redux, What is a side-effect?
> Anything that is not a simple input-output
  function is considered a side-effect.

Some examples:

* Making a request to the server for data
* Add a time counter(tick)
* Adding items to localStorage
* Changing the document title property on page change
* Reading cookies
* Authentication
* Initiating and listening to websocket
* responding to user mouse clicks

#### Current ways to do this


* Redux-Thunk
* Redux-Promises
* Redux-Rx

### Redux-Epic

Benefits

* sagas let you put your complex logic in one place
* Let's you inject dependencies in you sagas
* Makes server side rendering with pre-fetching data easy

> Example of a saga

> Example of a saga with dep injection
