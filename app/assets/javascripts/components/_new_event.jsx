var NewEvent = React.createClass({
    
    handleClick() {
        var name = this.refs.name.value;
        var start_date = this.refs.start_date.value;
        var end_date = this.refs.end_date.value;
        var location = this.refs.location.value;
        var add_info = this.refs.add_info.value;
        
        $.ajax({
            url: 'api/v1/events',
            type: 'POST',
            data: { event: { title: name, address: location, start_date: start_date, end_date: end_date, agenda: add_info, organizer_id: "<% current_user.id %>" } },
            success: (response) => {
                console.log("yay!");
            }        
        });
    },
    
    render() {
        return (
            <div>
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
                                <h2 className="text-center">Event host</h2>
                                {/* insert form here */}
                                    <form className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 col-xs-12">
                                                <label htmlFor="eventName">Give your event a name :</label>
                                                <input id="eventName" className="form-control" type="name" placeholder="e.g 'Joe's Water Balloon Festival'"/>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <label htmlFor="eventType">Type of Event</label>
                                                <input className="form-control" id="eventType" list="eventTypeList" placeholder="e.g Party, Meeting"/>
                                                <datalist id="eventTypeList">
                                                    <option value="Party"></option>
                                                    <option value="Meeting"></option>
                                                    <option value="Conference"></option>
                                                    <option value="Seminar"></option>
                                                    <option value="Informal Talk"></option>
                                                </datalist>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="startDate">When does it start?</label>
                                                <Datetime 
                                                    closeOnSelect= {true} />
                                            </div>
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="endDate">When does it end?</label>
                                                <Datetime
                                                    closeOnSelect= {true} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="eventGuestList">Guest list</label>
                                                <input id="eventGuestList" className="form-control" placeholder="Type their names and hit 'Enter'" data-role="tagsinput"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="eventLocation">Location</label>

                                                <Geosuggest
                                                    id="eventLocation"
                                                    className="form-control"
                                                    placeholder="e.g Ibiza" />
                                            </div>
                                        </div>
                                        <label htmlFor="eventInfo">ADDITIONAL INFORMATION<small><em> ( for your guests )</em></small></label>
                                        <textarea id="eventInfo" className="form-control" rows="4" placeholder="e.g Please bring food, tents and a sense of humour."></textarea>
                                        <div className="row">
                                            <div className="col-md-4 col-md-offset-4">
                                                <button className="btn btn-danger btn-block btn-lg btn-fill">Organize</button>
                                            </div>
                                        </div>
                                </form>
                                {/* end form here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = NewEvent;