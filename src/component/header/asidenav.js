import React from 'react';
import PubSub from 'pubsub-js';

var createReactClass = require('create-react-class');
var Asidenav = createReactClass({

    getInitialState: function () {
        return {
            items: [],
            total: 0,
        }
    },

    componentDidMount: function () {
        this.token = PubSub.subscribe("addcart", this.subscriber);
    },

    componentWillUnmount: function () {
        PubSub.unsubscribe(this.token);
    },

    subscriber: function (msg, data) {
        console.log(msg, data);
        this.setState(state => ({
            items: [...state.items, data]
        }));
        this.totalprice();
        this.itemcount();
    },

    itemcount:function(){
        PubSub.publish('itemcount',this.state.items.length);
    },

    totalprice: function (data) {
        var total = 0;
        //console.log(total);
        this.state.items.forEach(function (item, index) {
            total += item.price;
        });
        this.setState({
            total: total
        })
        return total;
    },

    render: function () {

        var cartitem = this.state.items.map(function (item) {
            return (
                <li className="no-padding" key={item.id}>
                    <ul className="collection">
                        <li className="collection-item avatar">
                            <img src={item.image} alt="" className="circle" />
                            <span className="title white-text">{item.name}</span><br />
                            <span className="white-text"><i className="material-icons green-text accent-3">attach_money</i><span className="cart-money">{item.price}</span></span>
                            <a href="no-script-url:0" className="secondary-content white-text"><i className="material-icons icon-margin-x-0 ">delete_forever</i></a>
                        </li>
                    </ul>
                </li>
            )
        })
        var Checkout = (
            <a className="waves-effect waves-light btn"><i className="material-icons left white-text">cloud</i>Checkout</a>
        )

        return (
            <div>
                <ul id="slide-out" className="sidenav blue-grey darken-2 ">
                    <li>
                        <a href="#!"><i className="material-icons right icon-margin-x-0 white-text">close</i></a>
                    </li>
                    <li className="cart-empyt-color">
                        <div className="user-view">
                            <div className="center">
                                <i className="material-icons green-text accent-3 md-70">{cartitem.length > 0 ? 'add_shopping_cart' : 'remove_shopping_cart'}</i><br />
                                <div className="white-text ">Added {cartitem.length} items</div>
                                <div className="h3-mtop-0 center white-text item-total">{cartitem.length > 0 ? 'Total : $'+this.state.total : 'Cart is empty'}</div>
                                {cartitem.length > 0 ? Checkout: false }
                            </div>
                        </div>
                    </li>
                    <div>
                    {cartitem}
                    </div>
                </ul>
            </div>

        )

    }

});

export default Asidenav;