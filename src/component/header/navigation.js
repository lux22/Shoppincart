import React from 'react';

var createReactClass = require('create-react-class');
var Navigtion = createReactClass({
    render: function () {
        return (
            <div className="nav-wrapper blue-grey darken-2 ">
                <a href="#" className="brand-logo padding-left-10 white-text">
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
                        <a href="#" data-activates="slide-out" className="btn-sidenav">
                            <i className="material-icons ">add_shopping_cart</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="material-icons">more_vert</i>
                        </a>
                    </li>
                </ul>
            </div>
        )

    }

});

export default Navigtion;