import React from 'react';
import Productlist from './component/productlist';
var createReactClass = require('create-react-class');

var Productcollection = createReactClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <Productlist/>
        </div>
      </div>
    )
  }
});

export default Productcollection;
