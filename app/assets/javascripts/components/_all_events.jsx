var AllEvents = React.createClass({
    
    render() {
        var events = this.props.events.map((event) => {
           return (
               <div key={event.id}>
                    <h3>{event.title}</h3>
                    <p>{event.address}</p>
               </div>
           ) 
        });
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
                            {events}
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
});

module.exports = AllEvents;