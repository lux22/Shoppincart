import React from 'react';
import PubSub from 'pubsub-js';

var createReactClass = require('create-react-class');

var Navigtion = createReactClass({
    getInitialState: function () {
        return{
            itemcount:0
        }
    },

    componentDidMount: function () {
        this.itemtoken = PubSub.subscribe("itemcount", this.subscriber);
    },

    componentWillUnmount: function () {
        PubSub.unsubscribe(this.itemtoken);
    },

    subscriber: function (msg, data) {
        // console.log(msg, data);
        this.setState({
            itemcount:data
        })
    },

    render: function () {
        var itemcount = (
            <span className="new badge cart-badge">{this.state.itemcount}</span>
        )

        return (
            <div className="nav-wrapper blue-grey darken-2 ">
                <a href="javscript:void(0);" className="brand-logo padding-left-10 white-text">
                    <i className="material-icons green-text accent-3 md-36">shopping_basket</i>Shopaholic</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <div className="center row">
                            <div className="col s12 " >
                                <div className="row" id="topbarsearch">
                                    <div className="input-field col s6 s12 red-text">
                                        <i className="green-text accent-3 material-icons prefix">search</i>
                                        <input type="text" placeholder="search product" id="autocomplete-input" className="autocomplete red-text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="javscript:void(0);" data-activates="slide-out" className="btn-sidenav">
                            <i className="material-icons nav-icon-cart">add_shopping_cart</i>{this.state.itemcount > 0 ?itemcount:false}
                        </a>
                    </li>
                    <li>
                        <a href="javscript:void(0);">
                            <i className="material-icons">more_vert</i>
                        </a>
                    </li>
                </ul>
            </div>
        )

    }

});

export default Navigtion;