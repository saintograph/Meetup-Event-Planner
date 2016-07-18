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
                {events}
            </div>
        )
        
    }
});