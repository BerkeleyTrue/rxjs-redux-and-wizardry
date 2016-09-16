import { Subject, DOM } from 'rx-dom';
import React, { Component } from 'react';

function searchWikipedia(term) {
  const cleanTerm = global.encodeURIComponent(term);
  const url = 'http://en.wikipedia.org/w/api.php?' +
    'action=opensearch&format=json&search=' +
    cleanTerm +
    '&callback=JSONPCallback';
  // 6. Make Request
  return DOM.jsonpRequest(url);
}

export default class extends Component {
  static displayName = 'WikiSearch';
  constructor(...args) {
    super(...args);
    this.keyUp$ = new Subject();
  }

  componentDidMount() {
    this.__subscription = this.keyUp$
      .map(event => event.target.value)
      .filter(text => text.length > 2)
      .debounce(500)
      .distinctUntilChanged()
      .flatMapLatest(text => searchWikipedia(text))
      .map(({ response }) => response)
      .filter(data => data.length >= 2)
      .map(results => ({ results: results[1] }))
      .subscribe(
        state => this.setState(state),
        err => { throw err; }
      );
  }

  componentWillUnmount() {
    if (!this.__subscription) {
      return null;
    }
    return this.__subscription.dispose();
  }

  render() {
    const results = this.state && this.state.results || [];
    return (
      <div>
        <div>Wiki Search with Autocomplete</div>
        <input
          id='searchtext'
          onKeyUp={ e => this.keyUp$.onNext(e) }
          type='text'
        />
        <ul id='results'>
            {
                results.map((result) =>
                    <li key={ result }>{ result }</li>
                )
            }
        </ul>
      </div>
    );
  }

}
