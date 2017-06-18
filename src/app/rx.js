const { Observable } = require('rxjs/Observable');
const axios = require('axios');

require("rxjs/add/observable/interval");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/mergeMap");

//----- Создание Observable

const URL = 'https://api.github.com/users?since='

//--creating observable 1

// const source = Observable
//   .interval(1000)
//   .mergeMap(_ => (
//     Observable.fromPromise(axios.get(URL + Math.floor(Math.random()*300)))
//   ))
//   .map(res => res.data)
//   .map(users => users.filter(user => user.id % 3 === 0 && user.login.length > 10))
//   .take(1);
//
// source.subscribe(observer);

//--creating observable 2

const source2 = Observable.create(observer => {
  const timer = setInterval(() => {
    const factor = Math.random();
    console.log(factor)
    if (factor < 0.8) {
      observer.next('next value');
    }
    if (factor >= 0.8 && factor < 0.9) {
      throw new Error('Sad but true..');
    }
    if (factor >= 0.9) {
      observer.complete();
    }
  }, 2000);

  return function unsubscribe() {
    clearInterval(timer);
  }
});

const subscriber = source2.subscribe(
  result => console.log(result),
  error => console.log(error),
  () => console.log('completed')
);

//subscriber.unsubscribe();
