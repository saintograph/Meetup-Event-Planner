var App = React.createClass({
    
    getInitialState() { 
        return { events: [] } 
    }, 
    
    componentDidMount() { 
        $.getJSON('https://pure-fortress-81588.herokuapp.com/api/v1/events.json', (response) => { this.setState({ events: response }) }); 
    }, 
    
    handleSubmit(event) { 
        var newState = this.state.events.concat(event); 
        this.setState({ events: newState }) 
    },
    
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
                                        <h4>Hey there,<br /><small>organize something awesome</small></h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button className="btn btn-warning btn-block btn-fill"><Link to="new"><span className="button-text">New Event</span></Link></button>
                                            </div>
                                            <div className="col-md-6">
                                                <button className="btn btn-warning btn-block btn-fill"><Link to="/"><span className="button-text">All Events</span></Link></button>
                                            </div>
                                        </div>
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
                    {React.cloneElement(
                        this.props.children, 
                        { handleSubmit: this.handleSubmit, 
                         events: this.state.events} 
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}); 


module.exports = App;
