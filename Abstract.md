# React, RxJS, and You

## Brain storm

* The hardest part of JavaScript is asynchronicity.
    * Ajax
    * Events
    * input

* Rx solves all these and adds the ability to compose events and data streams.
    * Websocket returns an event, send ajax request, display loading event to user
    * ajax request returns. Stream data to view and build list, while removing loading event

* But how do you use Rx with React?
    * Use Rx to make your data calls
    * Use Rx as your primary data pipeline
    * Abstract data into pipelines
    * Manage state and data loading
        * Use cycle.js principals and React as the view layer

* How do you manage asynchronicity in react?

* Use Rx in place of flux?
* Building Redux pattern using Rx? (using `scan`)

## (OLD)Abstract

ReactJS has ushered in a fundamental change to web application development:
Utilizing views that react to data changes in a functional manner. This change
has led the front-end community to embrace React with increasing optimism. But
there is still one thing that React is not very good at: asynchronous data fetching.

Reactive Extensions for JavaScript (RxJS) solves the hardest problem with
JavaScript, asynchronicity. It does this by combining functional programming
concepts and event based data streams.

Learn how to combine synchronous and asynchronous code flawlessly using Rx and take your
real world React app to the next level.


## Abstract
