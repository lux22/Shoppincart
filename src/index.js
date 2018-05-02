import React from 'react';
import ReactDOM from 'react-dom';
import Productcollection from './App';
import './assets/css/materialize.min.css';
import './assets/css/materialize.css';
import './assets/css/custom.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Productcollection/>, document.getElementById('productlist'));
// ReactDOM.render(<Cartlist/>, document.getElementById('cart'));
registerServiceWorker();
