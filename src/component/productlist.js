import React from 'react';
import Product from "../component/product";
// import Cartlist from '../component/cart';
import datalist from '../assets/js/data.json';


var createReactClass = require('create-react-class');
var Productlist = createReactClass({
  
    render: function () {
        //Product list collection.
        var products = datalist.map(function (list) {
            return <Product dataname={list} key={list.id} onClick={this.movetocart} />
        }.bind(this));

        return (
            //Displaying products
                <div className="col s12 l9">
                    {products}
                </div>
        )
    },

})

export default Productlist;