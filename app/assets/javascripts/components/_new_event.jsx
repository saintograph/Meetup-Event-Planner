var NewEvent = React.createClass({

    getInitialState: function(){
      return {
          tags: []
      }  
    },
    
    handleChange(tags) {
        tags = tags.concat("/");
        this.setState({tags})
    },
        
    handleClick() {
        
        var name = document.getElementById('eventName').value;
        var start_date = document.getElementById('startDate').value;
        var end_date = document.getElementById('endDate').value;
        var location = document.getElementById('eventLocation').value;
        var add_info = document.getElementById('eventInfo').value;
        var foo = $("#eventGuestList").text();
        var guests = String(foo.split("/").join(", "));
        
        $.ajax({
            url: 'api/v1/events',
            type: 'POST',
            data: { event: {
                title: name, 
                address: location, 
                start_date: start_date, 
                end_date: end_date, 
                agenda: add_info,
                guests: guests, 
                user_id: "<%= current_user.id %>" 
            }},
            success: (response) => {
                this.props.handleSubmit(event);
                window.location.href = "http://localhost:3000/";
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
                                                <input id="eventName" className="form-control" type="name" placeholder="e.g 'Joe's Water Balloon Festival'" required/>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <label htmlFor="eventType">Type of Event</label>
                                                <input className="form-control" id="eventType" list="eventTypeList" placeholder="e.g Party, Meeting" required/>
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
                                                    dateFormat="dddd"
                                                    input={true}
                                                    inputProps={{id:"startDate"}}
                                                    closeOnSelect= {true} />
                                            </div>
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="endDate">When does it end?</label>
                                                <Datetime
                                                    dateFormat="dddd"
                                                    input={true}
                                                    inputProps={{id:"endDate"}}
                                                    closeOnSelect= {true} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="eventGuestList">Guest list</label>
                                                <span id="eventGuestList">
                                                <TagsInput 
                                                    value={this.state.tags} 
                                                    onChange={this.handleChange}
                                                    onlyUnique
                                                    />
                                                </span>
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
                                                <button className="btn btn-danger btn-block btn-lg btn-fill" onClick={this.handleClick}>Organize</button>
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