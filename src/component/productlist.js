import React from 'react';
import Product from "../component/product";
import Cartlist from '../component/cart';
import datalist from '../assets/js/data.json';


var createReactClass = require('create-react-class');
var Productlist = createReactClass({

    getInitialState: function () {
        return {
            getitems: [],
            items: [],
            total: 0,
        }
    },


    totalprice: function (data) {
        var total = this.state.total;
        this.state.items.forEach(function (item, index) {
            total += item.price;
        });
        this.setState({
            total: total
        })
    },

    //adding product to item array
    movetocart: function (data) {
        this.setState(state => ({
            items: [...state.items, data]
        }));
        this.totalprice();
    },

    render: function () {
        //Product list collection.
        var products = datalist.map(function (list) {
            return <Product dataname={list} key={list.id} onClick={this.movetocart} />
        }.bind(this));

        //displaying product item
        var items = this.state.items.map(function (item) {
            return (
                <div>
                    <Cartlist dataname={item} key={item.id} />
                </div>
            )
        });

        var empty = (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Empty Cart</span>
                            <p>No Item inside Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        )


        return (
            //Displaying items to cart.
            <div>
                {/* <div className="col s12 m2">
                    <h5>Total Price : {this.state.total}</h5>
                    {items.length > 0 ? items : empty}
                </div> */}
                <div className="col s12 m12">
                    {products}
                </div>
            </div>
        )
    },

})

export default Productlist;