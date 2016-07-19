var NavBar = React.createClass({
    render () {
        return (
            <div>
                <nav className="navbar navbar-ct-transparent navbar-relative " role="navigation-demo" id="register-navbar">
                    <div className="container">

                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Evejet</a>
                        </div>
                    

                        <div className="collapse navbar-collapse" id="navigation-example-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="new">New Event</Link>
                            </li>
                            <li>
                                <Link to="/">All Events</Link>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn btn-simple"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="btn btn-simple"><i className="fa fa-facebook"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> 
            </div>
        )
    }
});

module.exports = NavBar;