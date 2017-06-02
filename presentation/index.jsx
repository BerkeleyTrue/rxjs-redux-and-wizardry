// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  // Image,
  Spectacle,
  Text
} from 'spectacle';

// import preloader from 'spectacle/lib/utils/preloader';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import WikiSearch from './Wiki-Search.jsx';

const benLeshTalk = 'https://medium.com/@benlesh/' +
 'learning-observable-by-building-observable-d5da57405d87';
// const images = {
//   partyParrot: require('../assets/party-parrot.png')
// };

// preloader(images);

const reactBlue = '#00d8ff';

const theme = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide
            bgColor='primary'
            transition={['zoom']}>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              >
              Redux Wizardry Using RxJS Observables
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'>
            <Link
              href='https://rxjs-redux-and-wizardry.netlify.com'
              target='_blank'>
              <Text
                bold={ true }
                caps={ true }
                >
                View at:
              </Text>
              <Heading
                caps={ true }
                fit={ true }
                size={ 1 }>
                rxjs-redux-and-wizardry.netlify.com
              </Heading>
            </Link>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Who I Am
            </Heading>
            <List
              bold={ true }
              caps={ false }>
              <ListItem>
                internet('BerkeleyTrue');
              </ListItem>
              <ListItem>
                freeCodeCamp('developer');
              </ListItem>
              <ListItem>
                realWorldReact('teacher');
              </ListItem>
              <ListItem>
                const isRxJSAdvocate = true;
              </ListItem>
              <ListItem>
                taughtBy('internet');
              </ListItem>
            </List>
          </Slide>
          <Slide
            bgColor='black'>
            <Heading
              caps={ true }
              size={ 2 }
              textColor='white'>
              What it's inside:
            </Heading>
            <List
              bold={ true }
              caps={ true }
              textColor='white'>
              <ListItem>
                What are Observables?
              </ListItem>
              <ListItem>
                Why are Observables awesome?
              </ListItem>
              <ListItem>
                How to use Observables in Redux
              </ListItem>
            </List>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
            `}>
            <Heading>
              What should you expect?
            </Heading>
            <Appear>
              <Text
                bold={ true }
                size={ 4 }
                >
High level look at using Observables with Redux
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              What is RxJS?
            </Heading>
            <Text
              bold={ true }
              caps={ true }
              textColor='primary'>
              A library for creating Observables
            </Text>
            <Text
              bold={ true }
              caps={ true }
              textColor='primary'>
              Rx === Reactive Extensions
            </Text>
            <Appear>
              <Text
                bold={ true }
                caps={ true }
                textColor='primary'>
                Observables are a reactive paradigm
              </Text>
            </Appear>
          </Slide>
          <Slide
            notes={`
What is an Observable?
In it's most basic form it's a function that takes an observer and
returns a cancel or tear down function
            `}
            transition={['zoom']}>
            <Link
              href={ benLeshTalk }
              target='_blank'
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'
                >
                "A function that takes an observer and returns a function"
              </Heading>
              <Text
                textColor='tertiary'
                >
                Ben Lesh - Learning Observables by Building Observables
              </Text>
              <Appear>
                <Text
                  size={ 4 }
                  textColor='secondary'
                  >
                  Observable: observer => function
                </Text>
              </Appear>
            </Link>
          </Slide>
          <Slide
            notes={`
What is an Observer?
            `}
            transition={['zoom']}
            >
            <Link
              href={ benLeshTalk }
              target='_blank'
              >
              <Heading
                caps={ true }
                size={ 2 }>
                What is an Observer?
              </Heading>
              <Appear>
                <Heading
                  bold={ true }
                  caps={ false }
                  size={ 4 }
                  textColor='secondary'>
                  "An object with `next`, `error` and `complete` methods on it."
                </Heading>
              </Appear>
              <Appear>
                <Text textColor='secondary'>
                  Observer: {
                    '{ next: Func, error: Func, complete: Func }'
                  }
                </Text>
              </Appear>
            </Link>
          </Slide>
          <Slide
            notes={`
What about the returned function?
            `}
            transition={['zoom']}
            >
            <Link
              href={ benLeshTalk }
              target='_blank'
              >
              <Heading
                bold={ true }
                caps={ false }
                size={ 4 }
                textColor='secondary'
                >
                What about the returned function?
              </Heading>
              <Appear>
                <Heading
                  bold={ true }
                  caps={ false }
                  size={ 4 }
                  textColor='secondary'
                  >
                  Provide some way to tear down
                </Heading>
              </Appear>
              <Appear>
                <Text textColor='secondary'>
                  Observable: observer => TearDown
                </Text>
              </Appear>
            </Link>
          </Slide>
          <Slide
            notes={`
            `}
            transition={['zoom']}
            >
            <Link
              href='http://jsbin.com/yazedu/1/edit?js,console,output'
              target='_blank'
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'>
                What is the purpose of an Observable?
              </Heading>
              <Appear>
                <Heading
                  size={ 5 }
                  textColor='secondary'
                  >
                  "To connect an observer to something that produces values"
                </Heading>
              </Appear>
              <Appear>
                <Text textColor='secondary'>
                  [ 1, 2, 3 ]
                </Text>
              </Appear>
              <Appear>
                <Text textColor='secondary'>
                  Websocket
                </Text>
              </Appear>
              <Appear>
                <Text textColor='secondary'>
                  Reactive Database
                </Text>
              </Appear>
              <Appear>
                <Heading
                  size={ 6 }
                  textColor='secondary'> (RIP: RethinkDB)
                </Heading>
              </Appear>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/learn-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'Observable' },
              { loc: [0, 9], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [11, 12] },
              { loc: [12, 13] },
              { loc: [13, 14] },
              { loc: [16, 17] },
              { loc: [18, 24] }
            ]}
            transition={[]}
          />
          <Slide
            notes={`
Observer guarentees
            `}
            transition={['zoom']}
            >
            <Link
              href={ benLeshTalk }
              target='_blank'
              >
              <Heading>
                Observer DX
              </Heading>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Missing Methods? No worries
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Error? Prevent future `next`, `complete` calls
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Make `next`, `error` and `complete` optional
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Only want `next`? Skip the object, pass in a plain function
              </Text>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/safe-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'With Safe Observer' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 6] },
              { loc: [11, 15] },
              { loc: [16, 17] },
              { loc: [18, 20] },
              { loc: [21, 28] }
            ]}
            transition={[]}
          />
          <Slide
            notes={`
Observer guarentees
            `}
            transition={['zoom']}
            >
            <Link
              href={ benLeshTalk }
              target='_blank'
              >
              <Heading>
                Observable DX
              </Heading>
              <Text
                textAlign='left'
                textColor='secondary'
                >
unsubscribed? Prevent future `next`, `complete` calls
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Complete or error? Auto tear down
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Observer throws? Auto tear down
              </Text>
              <Text
                textAlign='left'
                textColor='secondary'
                >
Prevent multiple teardown calls
              </Text>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/ergo-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'Developer Friendly' },
              { loc: [0, 1], note: 'Observable is now a class' },
              {
                loc: [0, 12],
                note: 'We pass in a subscribe function to the constructor'
              },
              {
                loc: [0, 12],
                note: `This function is called with new observers by
                  the subscribe method`
              },
              {
                loc: [ 0, 1 ],
                note: `Observer is made safe transparently by Observable
                subscribe method`,
                title: ''
              },
              {
                loc: [ 5, 8 ],
                note: `TearDown function is now wrapped in an unsubscribe
                  object by the class`,
                title: ''
              },
              {
                loc: [ 5, 8 ],
                note: `This prevents teardown logic from being called
                  more than once`,
                title: ''
              },
              {
                loc: [ 13, 15 ],
                note: 'we now subscribe to an observable instance',
                title: ''
              },
              {
                loc: [13, 15],
                note: 'This returns the subscription object'
              },
              {
                loc: [13, 15],
                note: `We use this to teardown our observable subcription
                  in the future`
              },
              {
                loc: [16, 22],
                note: 'We unsubscribe from the observable'
              },
              {
                loc: [16, 22],
                note: 'This calls the teardown logic of the ds observable'
              }
            ]}
            transition={[]}
          />
          <Slide>
            <Link
              href=''
              target='_blank'
              >
              <Heading>Operators are also Functions</Heading>
              <Text textColor='secondary'>filter, map, reduce...</Text>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/operator-map-prototype.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'Operators' },
              { loc: [0, 10], note: 'Add to prototype' },
              { loc: [ 2, 3 ], note: 'We return an new Observable' },
              {
                loc: [ 1, 2 ],
                note: 'Our producer is the observable instance'
              },
              { loc: [ 3, 8 ], note: 'We create a new observer' },
              {
                loc: [ 3, 8 ],
                note: 'Connects your observer to the producer'
              },
              { loc: [ 4, 5 ], note: 'Projects the values from the producer' },
              { loc: [ 4, 5 ], note: 'Then sends that to your observer' },
              { loc: [ 8, 9 ], note: 'Subscribe to source'},
              {
                loc: [ 8, 9 ],
                note: 'Pass our mapObserver to the original observable'
              },
              {
                loc: [ 8, 9 ],
                note: `We return the subscription object from the
                source directly to the user`
              },
              {
                loc: [11, 22],
                note: 'Same ds observable as before'
              },
              {
                loc: [22, 23],
                note: 'Our observer'
              },
              { loc: [24, 27] },
              {
                loc: [ 25, 26 ],
                note: 'We call the map method',
                title: ''
              },
              {
                loc: [ 25, 26 ],
                note: 'we pass in a projection function',
                title: ''
              },
              {
                loc: [ 26, 27 ],
                note: 'This creates a new observable that we then subscribe to',
                title: ''
              },
              { loc: [28, 32] }
            ]}
            transition={[]}
          />
          <Slide
            bgColor='secondary'
            notes={`
Observables are often compared to promises.
The comparison falls short.
            `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              Observables vs Promises?
            </Heading>
            <br />
            <Appear>
              <Heading
                size={ 3 }
                textColor='primary'
                >
                Async Or Sync|Always async
              </Heading>
            </Appear>
            <Appear>
              <Heading
                size={ 3 }
                textColor='primary'
                >
                Lazy|Eager
              </Heading>
            </Appear>
            <Appear>
              <Heading
                size={ 3 }
                textColor='primary'
                >
                Re-usable|Single Use
              </Heading>
            </Appear>
            <Appear>
              <Heading
                size={ 3 }
                textColor='primary'
                >
                Multi Value|Single Value
              </Heading>
            </Appear>
          </Slide>
          <Slide
            bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='primary'>
              Why are they awesome?
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
Declaratively: Write what the code should do not how to do it
Composable: Combine Observables in a veriaty of ways
            `}>
            <Heading
              size={ 1 }
              textColor='white'>
              Observable are powerful.
            </Heading>
            <Appear>
              <Heading
                size={ 3 }>
There is very little you can't do with Observables.
              </Heading>
            </Appear>
            <Appear>
              <Heading
                size={ 3 }>
Declaratively write async code
              </Heading>
            </Appear>
            <Appear>
              <Heading
                size={ 3 }>
Composable
              </Heading>
            </Appear>
          </Slide>
          <Slide>
            <WikiSearch />
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
In Redux, What is a side-effect?
              `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              How to add Observables in Redux?
            </Heading>
          </Slide>
      {
        /*
          <Slide
            bgColor='secondary'
            notes={`
            `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              Side-Effects
            </Heading>
            <Heading size={ 3 }>
Anything that is not a simple input-output function is considered a side-effect.
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Some Examples
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
Making a request to the server for data
              </ListItem>
              <ListItem>
Add a time counter(tick)
              </ListItem>
              <ListItem>
Adding items to localStorage
              </ListItem>
              <ListItem>
Changing the document title
              </ListItem>
              <ListItem>
Reading cookies
              </ListItem>
              <ListItem>
Authenticating a user
              </ListItem>
              <ListItem>
Listening to WebSocket
              </ListItem>
              <ListItem>
user mouse events
              </ListItem>
            </List>
          </Slide>
         */
         }
          <Slide>
            <Heading
              textColor='secondary'>
              Redux-Observable
            </Heading>
            <Heading
              size={ 3 }
              textColor='tertiary'>
              An elegant and idiomatic way to
              encapsulate side-effects in your Redux app
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Why Redux-Observable?
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Observables are powerful
              </ListItem>
              <List>
                <Appear>
                  <ListItem>
                    Smaller API surface
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Server-Side rendering w/ data pre-fetching
                  </ListItem>
                </Appear>
              </List>
            </List>
            <Appear>
              <List
                bold={ true }
                caps={ true }>
                <ListItem>
                  Observables are idiomatic
                </ListItem>
                <List>
                  <Appear>
                    <ListItem>
                      functions
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      chaining
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                      functional
                    </ListItem>
                  </Appear>
                </List>
              </List>
            </Appear>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/epic.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'EPIC!'},
              { loc: [ 4, 15 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 5, 6 ] },
              { loc: [ 6, 7 ] },
              { loc: [ 7, 12 ] },
              { loc: [ 11, 12 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={ require('raw!../assets/autocomplete.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'AUTOCOMPLETE' },
              { loc: [ 10, 33 ] },
              { loc: [ 11, 12 ] },
              { loc: [ 12, 13 ] },
              { loc: [ 13, 15 ] },
              { loc: [ 15, 17 ] },
              { loc: [ 17, 19 ] },
              { loc: [ 19, 21 ] },
              { loc: [ 21, 23 ] },
              { loc: [ 23, 25 ] },
              { loc: [ 25, 27 ] },
              { loc: [ 27, 32 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/wiki-auto-imperative.example')}
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'Autocomplete' },
              {
                loc: [ 87, 94 ],
                note: 'We create an onChange handler',
                title: ''
              },
              {
                loc: [ 68, 86 ],
                note: 'onChange handler takes the event object',
                title: ''
              },
              {
                loc: [ 56, 64 ],
                note: 'search takes a callback',
                title: ''
              },
              {
                loc: [ 65, 66 ],
                note: 'add debounce to search',
                title: ''
              },
              {
                loc: [ 44, 53 ],
                note: 'create a search when distinct function',
                title: ''
              },
              {
                loc: [ 25, 41 ],
                note: '',
                title: ''
              },
              {
                loc: [ 31, 32 ],
                note: '',
                title: ''
              },
              {
                loc: [ 3, 23 ],
                note: 'make a get request',
                title: ''
              },
              {
                loc: [ 8, 13 ],
                note: 'this will cancel previous in-flight requests',
                title: ''
              },
              {
                loc: [ 68, 69 ],
                note: 'This is where we start',
                title: ''
              },
              { loc: [69, 73], note: 'map event to input value' },
              { loc: [73, 79], note: '' },
              { loc: [79, 85] },
              { loc: [46, 53] },
              { loc: [5, 13] },
              { loc: [13, 23] },
              { loc: [32, 36] },
              { loc: [36, 38] },
              { loc: [38, 42] },
              { loc: [62, 63]},
              {
                loc: [ 83, 84 ],
                note: '',
                title: ''
              },
            ]}
            transition={[]}
          />
          <Slide>
            <WikiSearch />
          </Slide>
          <CodeSlide
            code={require('raw!../assets/create-epic.example')}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'CREATE EPIC!' },
              { loc: [ 0, 3 ] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 6, 7 ] },
              { loc: [ 8, 9 ] },
              { loc: [ 10, 15 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <Slide
            notes={`
            `}>
            <Link
              href='https://github.com/redux-observable/redux-observable'
              target='_blank'>
              <Heading
                textColor='secondary'
                textSize={ 60 }>
                github.com/redux-observable/redux-observable
              </Heading>
            </Link>
          </Slide>
          <Slide
            notes={`
            `}
            >
            <Heading
              textColor='secondary'
              textSize={ 60 }>
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
