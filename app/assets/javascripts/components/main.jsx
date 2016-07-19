var Main = React.createClass({
    render() {
        return ( 
            <div>
                <div className="wrapper">
                    <div className="profile-background"> 
                        <div className="filter-black"></div>  
                    </div>
                    <div className="profile-content section-nude">
                        <div className="container">
                            <div className="row owner">
                                <div className="col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center">
                                    <div className="avatar">
                                        <img src="/assets/logo.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3 text-center">
                                    <div className="name">
                                        <h4>Hi fellow<br /><small>organize something awesome</small></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 text-center">
                                    <p></p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="section landing-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                <small><em>you're almost done!</em></small>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: 50 + '%' }}>
                                            <span className="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                    <h2 className="text-center">Lets do this! JSX tag below</h2>
                                    {/* <SetupForm /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
});

module.exports = Main;