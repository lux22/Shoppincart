import React from 'react';
import Product from "../component/product";
import datalist from '../assets/js/data.json';

var createReactClass = require('create-react-class');
var Productlist = createReactClass({

    getInitialState: function () {
        return {
            getitems: [],
            items: [],
            total:0,
            currency:'INR'
        }
    },

    //adding product to item array
    movetocart: function (data) {
        this.setState(state => ({
            items: [...state.items, data]
        }));
        this.totalprice();
    },

    totalprice: function(data){
        var total=0;
        this.state.items.forEach(function(item, index) {
            total += item.price;
          });
          this.setState({
            total: total
          })
    },
    
    render: function () {
        //Product list collection.
        var products = datalist.map(function (list) {
            return <Product dataname={list} key={list.id} onClick={this.movetocart} />
        }.bind(this));

        //Displaying items added to cart.
        var items = this.state.items.map(function (item) {
            return (
                <div className="card blue-grey darken-1" key={item.id}>
                    <div className="card-content white-text">
                        <span className="card-title">{item.name}</span>
                        <p>{item.price}&nbsp;{item.currency}</p>
                    </div>
                    <div className="card-action">
                        <a href="">Checkout</a>
                    </div>
                </div>
            )
        });

        var body = (
            <div className="row">
                <div className="col s12 m12">
                    {items}
                </div>
            </div>
        )

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
            <div>
                <div className="col s12 m9">
                    {products}
                </div>
                <div className="col s12 m3">
                    {items.length > 0 ? body : empty}
                    <div>
                        <h5>Total Price : {this.state.total} {this.state.currency}</h5>
                    </div>
                </div>

            </div>
        )
    },

})

export default Productlist;