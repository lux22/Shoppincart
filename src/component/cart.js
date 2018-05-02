import React from 'react';
import PubSub from 'pubsub-js';
import Product from '../component/product';

var createReactClass = require('create-react-class');
var Cartlist = createReactClass({

    componentDidMount: function() {
        this.token = PubSub.subscribe('MY TOPIC', this.subscriber)
    },

    componentWillUnmount: function() {
        PubSub.unsubscribe(this.token)
    },
    
    subscriber: function(msg, data) {
        console.log(msg, data)
        // set state etc...
    },

    render:function(){
        console.log(this.props.getdata);
        var list = this.props.getdata;
        return(
            <div className="card hoverable">
            </div>
        )
    }



})

export default Cartlist;