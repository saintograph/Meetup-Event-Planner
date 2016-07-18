var Footer = React.createClass({
    render () {
        return (
            <div>
                <footer className="footer-demo section-nude">
                    <div className="container">
                        <nav className="pull-left">
                            <ul>
                
                                <li>
                                    <a href="#">
                                        Evejet
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Licenses 
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright pull-right">
                            &copy; 2016, made with <i className="fa fa-heart heart"></i> by Winfred Selwyn
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
});

module.exports = Footer;