import React from 'react';

var createReactClass = require('create-react-class');
var Asidenav = createReactClass({
    render: function () {
        return (
            <div>
                <ul id="slide-out" className="sidenav blue-grey darken-2 ">
                    <li>
                        <a href="#!"><i className="material-icons right icon-margin-x-0 white-text">close</i></a>
                    </li>
                    <li className="cart-empyt-color">
                        <div className="user-view">
                            <div className="center">
                                <i className="material-icons green-text accent-3 md-120">remove_shopping_cart</i>
                                <p className="black-text center white-text">Cart empty</p>
                            </div>
                        </div>
                    </li>
                        <li className="no-padding">
                            <ul className="collection">
                                <li className="collection-item avatar">
                                    <img src="images/01.jpg" alt="" className="circle" />
                                    <span className="title">Title</span>
                                    <p>First Line</p>
                                    <a href="#!" className="secondary-content white-text">$120</a>
                                </li>
                                </ul>
                            </li>
                        </ul>
                        </div>

                    )
            
                }
            
            });
            
export default Asidenav;