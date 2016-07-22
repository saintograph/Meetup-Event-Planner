var AllEvents = React.createClass({
    
    render() {
        var events = this.props.events.map((event) => {
           return (
               <div key={event.id} className="mainList">
                    <div>
                        <h4 className="listSub">{event.title}</h4>
                        <p><small>{event.address}</small></p>
                    </div>
                        <p><strong>Start:</strong> {event.start_date}</p>
                        <p>End: {event.end_date}</p>
                        <p>Guests: {event.guests}</p>
                        <p>Agenda: {event.agenda}</p>
               </div>
           ) 
        });
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            {events}
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
});

module.exports = AllEvents;