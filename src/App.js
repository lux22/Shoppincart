import React from 'react';
import Productlist from './component/productlist';
import Navigtion from './component/header/navigation';
import Asidenav from './component/header/asidenav';
import Footer from './component/footer/footer';


var createReactClass = require('create-react-class');
var Productcollection = createReactClass({
  render: function () {
    return (
      <div>
        <div id='navigation'>
          <nav>
            <Navigtion />
          </nav>
          <Asidenav />
        </div>
        <div className="row">
          <div className="container">
            <Productlist />
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    )
  }
});

export default Productcollection;
