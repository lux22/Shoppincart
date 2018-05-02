import React from 'react';

var createReactClass = require('create-react-class');
var Addtocart = createReactClass({
    render:function(){
        return (
            <div className="card-action grey lighten-3">
                <a class="waves-effect" onClick={this.props.onClick}><i class="material-icons ">add_shopping_cart
</i>&nbsp;Add Cart</a>
            </div>
        )
    }
})

export default Addtocart;