
# Top Chicago Vendors

The top vendors Chicago has paid. 

## Getting Started

* npm install -g create-react-app (if you dont have this already)
* yarn install
* yarn start

or

https://chicagodata.herokuapp.com/

### API 


the api set up

```js

const runQuery = 'https://data.cityofchicago.org/resource/rjgc-4h37.json?$order=amount DESC&$limit=10&check_date=';
//the api is stored in a constant

axios.get(runQuery + year, );
// Where we can change the 'year' to retrive the top vendors form a specific year.

```

## Built With

* [City of Chicago API](https://data.cityofchicago.org/Administration-Finance/Payments/s4vu-giwb) - The API used
* [React](https://github.com/facebookincubator/create-react-app) - React
* [lodash](https://lodash.com/) - lodash
* [numeral.js](https://github.com/adamwdraper/Numeral-js) - numeral.js
* [semantic-ui-react](https://react.semantic-ui.com/introduction) - semantic
