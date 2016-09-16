// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Image,
  Spectacle,
  Text
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import WikiSearch from './Wiki-Search.jsx';

const benLeshTalk = 'https://medium.com/@benlesh/' +
 'learning-observable-by-building-observable-d5da57405d87';
const images = {
  partyParrot: require('../assets/party-parrot.png')
};

preloader(images);

const reactBlue = '#00d8ff';

const theme = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue
});

export default class Presentation extends React.Component {
  render() {
    const partyParrot = (
      <Image
        display='inline'
        height={ 20 }
        src={ images.partyParrot }
        style={{ margin: 0 }}
      />
    );
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
              Redux + RxJS === { partyParrot }
            </Heading>
          </Slide>
          {
            /*
          <Slide
            bgColor='secondary'>
            <Link
              href='https://github.com/berkeleytrue/react-rxjs-and-you'
              target='_blank'>
              <Text
                bold={ true }
                caps={ true }
                >
                View on Github:
              </Text>
              <Heading
                caps={ true }
                fit={ true }
                size={ 1 }>
                BerkeleyTrue/react-rxjs-and-you
              </Heading>
            </Link>
          </Slide>
            */
          }
          <Slide>
            <Heading
              textColor='secondary'>
              Who I Am
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Developer at Free Code Camp
              </ListItem>
              <ListItem>
                Teacher at Real World React
              </ListItem>
              <ListItem>
                @BerkeleyTrue on the internet
              </ListItem>
              <ListItem>
                RxJS Advocate
              </ListItem>
              <ListItem>
                Self Taught Programming for over two years
              </ListItem>
              <ListItem>
                Fellow Human
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
                Current Async in Redux
              </ListItem>
              <ListItem>
                How to Observables in Redux
              </ListItem>
            </List>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
              High level look at using RxJS Observables with React and Redux
            `}>
            <Heading>
              What this is?
            </Heading>
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
              Rx => Reactive Extentions
            </Text>
          </Slide>
          <Slide
            notes={`
What is an Observable?
            `}
            transition={['zoom']}>
            <Link
              href={ benLeshTalk }
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'>
                "A function that takes an observer and returns a function"
              </Heading>
              <Text
                textColor='tertiary'
                >
                Ben Lesh - Learning Observables by Building Observables
              </Text>
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
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'>
                "An object with `next`, `error` and `complete` methods on it."
              </Heading>
            </Link>
          </Slide>
          <Slide
            notes={`
So, what's the purpose of an observer?
            `}
            transition={['zoom']}
            >
            <Link
              href={ benLeshTalk }
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'>
                "To connect an observer to a producer of values"
              </Heading>
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
              >
              <Heading
                bold={ true }
                caps={ true }
                size={ 4 }
                textColor='secondary'
                >
                "provide some way to tear down"
              </Heading>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/learn-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], title: 'Observable' },
              { loc: [0, 8], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [16, 17] }
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
              >
              <List>
                <ListItem
                  textColor='secondary'
                  >
Observer doesn’t have all of the methods implemented, that’s okay.
                </ListItem>
                <ListItem
                  textColor='secondary'
                  >
You don’t want to call `next` after a `complete` or an `error`
                </ListItem>
                <ListItem
                  textColor='secondary'
                  >
You don’t want anything called if you’ve unsubscribed.
                </ListItem>
                <ListItem
                  textColor='secondary'
                  >
Calls to `complete` and `error` need to call unsubscription logic.
                </ListItem>
                <ListItem
                  textColor='secondary'
                  >
Observer throws, you want to call your unsubscription
                </ListItem>
                <ListItem
                  textColor='secondary'
                  >
`next`, `error` and `complete` are all actually optional.
                </ListItem>
              </List>
            </Link>
          </Slide>
          <CodeSlide
            code={require('raw!../assets/safe-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], note: 'With Safe Observer' },
              { loc: [0, 8], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [16, 17] }
            ]}
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/ergo-observable.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], note: 'Developer Friendly' },
              { loc: [0, 8], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [16, 17] }
            ]}
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/operator-map.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], note: 'Map Operator' },
              { loc: [0, 8], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [16, 17] }
            ]}
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/operator-map-prototype.example') }
            lang='js'
            ranges={[
              { loc: [0, 270], note: 'Add to prototype' },
              { loc: [0, 8], title: '' },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 8] },
              { loc: [10, 15] },
              { loc: [16, 17] }
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
              How do they relate to Promises?
            </Heading>
            <br />
            <Heading
              size={ 3 }
              textColor='primary'
              >
              Sync or Async
            </Heading>
            <Heading
              size={ 3 }
              textColor='primary'
              >
              Lazy vs Eager
            </Heading>
            <Heading
              size={ 3 }
              textColor='primary'
              >
              Re-usable
            </Heading>
            <Heading
              size={ 3 }
              textColor='primary'
              >
              Multi-value
            </Heading>
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
There is very little you can't do with Observables.
            `}>
            <Heading
              size={ 1 }
              textColor='white'>
              Observable are powerful.
            </Heading>
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
          <Slide>
            <WikiSearch />
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
Anything that is not a simple input-output function is considered a side-effect.
            `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              Side-Effects
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
Changing the document title property on page change
              </ListItem>
              <ListItem>
Reading cookies
              </ListItem>
              <ListItem>
Authentication
              </ListItem>
              <ListItem>
Initiating and listening to websocket
              </ListItem>
              <ListItem>
Responding to user mouse clicks
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Current Async story in Redux
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Redux-Thunk
              </ListItem>
              <ListItem>
                Redux-Promises
              </ListItem>
              <ListItem>
                Redux-Rx
              </ListItem>
              <ListItem>
                Redux-Observable
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
            Redux-Observable
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Why (Epics/Sagas) are better
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Complex logic in one place
              </ListItem>
              <ListItem>
                Action Creators are plain functions
              </ListItem>
              <ListItem>
                Epic's can individually be tested
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/saga.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 2, 6] },
              { loc: [ 7, 10 ] }
            ]}
            textSize={ 25 }
            transition={[ 'zoom', 'fade' ]}
          />
          <Slide>
            <Heading
              textColor='secondary'>
              In comes Redux-Observable
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
                <ListItem>
                  Smaller API surface
                </ListItem>
                <ListItem>
                  Server-Side data pre-fetching (coming soon...)
                </ListItem>
              </List>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/epic.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 3, 10 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 5, 8 ] },
              { loc: [ 8, 9 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={ require('raw!../assets/autocomplete.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 2, 10 ] },
              { loc: [ 11, 26 ] },
              { loc: [ 13, 25 ] },
              { loc: [ 21, 25 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/create-epic.example')}
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 6, 10 ] },
              { loc: [ 10, 11 ] },
              { loc: [ 11, 14 ] },
              { loc: [ 14, 16 ] },
              { loc: [ 17, 24 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <Slide
            notes={`
create composed store enhancer
use store enhancer function to enhance createStore function
call enhanced createStore function with reducer and initialState
to create store
            `}>
            <Link
              href='https://github.com/berkeleytrue/react-rxjs-and-you'
              target='_blank'>
              <Heading
                textColor='secondary'
                textSize={ 60 }>
                github.com/berkeleyTrue/redux-epic
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
