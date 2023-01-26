import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a to="/">about us</a></li>
                            <li><a to="/">our services</a></li>
                            <li><a to="/">privacy policy</a></li>
                            <li><a to="/">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a to="/">FAQ</a></li>
                            <li><a to="/">shipping</a></li>
                            <li><a to="/">returns</a></li>
                            <li><a to="/">order status</a></li>
                            <li><a to="/">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a to="/">watch</a></li>
                            <li><a to="/">bag</a></li>
                            <li><a to="/">shoes</a></li>
                            <li><a to="/">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                        <box-icon name='facebook-square' type='logo' color='#2b8bd4' /> 
                        <box-icon name='twitter' type='logo' color='#3bb8ec' ></box-icon>
                        <box-icon name='instagram' type='logo' color='#e41467' ></box-icon>
                        <box-icon name='linkedin-square' type='logo' color='#4f4fd8' ></box-icon>
                    </div>                   
                    </div>
                </div>
            </div>
    </footer>
    )
}
