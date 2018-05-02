import React from 'react';
import Product from "../component/product";

var createReactClass = require('create-react-class');
var Productlist = createReactClass({
    render:function(){
        var products = this.props.list.map(function (list) {
            return (
                <div className="col s12 m3" key={list.id}>
                    <Product dataname={list} />
                </div>
            )
        })

        return (
            <div>
                {products}
            </div>
        )
    },

})

export default Productlist;