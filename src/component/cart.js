import React from 'react';

var createReactClass = require('create-react-class');
var Cartlist = createReactClass({
    render: function () {
        var item = this.props.dataname;
        console.log(item);
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{item.name}</span>
                            <p>{item.price}&nbsp;{item.currency}</p>
                        </div>
                        <div className="card-action">
                            <a href="">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

});

export default Cartlist;