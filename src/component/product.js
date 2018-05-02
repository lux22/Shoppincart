import React from 'react';
import ReactDOM from 'react';
import PubSub from 'pubsub-js';
import Productlist from '../component/productlist';
import Cartlist from '../component/cart';
import Addtocart from '../component/addtocart';


var createReactClass = require('create-react-class');
var Product = createReactClass({
    addtocart: function (data) {
        var token = PubSub.publish('addcart','helloworld');
    },

    render: function () {
        var list = this.props.dataname;

        return (
            <div className="card hoverable">
                <div className="card-image">
                    <img src={list.image} alt={list.name} className='shop-img' />
                </div>
                <div className="card-content">
                    <span className="card-title blue-text text-darken-2">{list.price}&nbsp;{list.currency}</span>
                    <p>{list.name}</p>
                </div>
                <Addtocart onClick={() => this.addtocart(list)} />
            </div>
    
        )
    }

})


export default Product;
