import React from 'react';
import $ from 'jquery'
var createReactClass = require('create-react-class');
var Filteraside = createReactClass({
    
    render: function () {
        return (
            <div className="col s12 l3 clearfix">
                <div className="col s12 l12">
                    <ul className="collapsible expandable">
                        <li className="active">
                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li className="active">
                            <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                        <li className="active">
                            <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

})

export default Filteraside;