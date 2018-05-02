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
                    <div className="card-content">
                        <span className="card-title blue-text text-darken-2">{list.price}&nbsp;{list.currency}</span>
                        <p>{list.name}</p>
                    </div>
                    <div className="card-action grey lighten-3">
                <a class="waves-effect" onClick={this.addtocart}><i class="material-icons ">add_shopping_cart
</i>&nbsp;Add Cart</a>
            </div>
                    {/* <Addtocart onClick={() => this.addtocart(this, list)} /> */}
                </div>
            </div>

        )
    }

})


export default Product;
