import React from 'react';

var createReactClass = require('create-react-class');
var Product = createReactClass({

    addtocart: function () {
        this.props.onClick(this.props.dataname);
    },

    render: function () {
        var list = this.props.dataname;
        return (
            <div className="col s12 m3" >
                <div className="card hoverable">
                    <div className="card-image">
                        <img src={list.image} alt={list.name} className='shop-img' />
                    </div>
                    <div className="card-content margin-bottom-10">
                        <span className="card-title blue-text text-darken-2">{list.name}</span>
                        <p className="left"><i className="left material-icons icon-margin-x-0">attach_money</i>{list.price}</p>
                        <p className="right"><i className="material-icons amber-text lighten-1">grade</i></p>
                    </div>
                    <div className="card-action red lighten-1">
                        <a className="waves-effect white-text" onClick={this.addtocart}><i className="material-icons ">add_shopping_cart
</i>&nbsp;Add Cart</a>
                    </div>
                </div>
            </div>

        )
    }

})


export default Product;
