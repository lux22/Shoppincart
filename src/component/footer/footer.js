import React from 'react';

var createReactClass = require('create-react-class');
var Footer = createReactClass({
    render: function () {
        return (
            <div className="footer-copyright center footer-custom">
                <div className="container">
                    © 2018 Copyright
                </div>
            </div>
        )

    }

});

export default Footer;