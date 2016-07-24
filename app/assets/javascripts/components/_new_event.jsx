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
        var start_date = $('#startDate').val();
        var end_date = $('#endDate').val();
        var location = document.getElementById('eventLocation').value;
        var add_info = document.getElementById('eventInfo').value;
        var foo = $("#eventGuestList").text();
        var guests = String(foo.split("/").join(", "));
        var hostName = document.getElementById('eventHost').value;
        
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
                host_name: hostName, 
                user_id: "<%= current_user.id %>" 
            }},
            success: (response) => {
                this.props.handleSubmit(event);
                window.location.href = "http://localhost:3000/";
            }        
        });
    },
    
    render() {
        $(document).ready(function(){
            {/* Validations */}
            {/* event name validation */}
            $("input#eventName").blur(function(){
                var inputEventName = document.getElementById('eventName').value;
                var inputEventNameTest = /[a-zA-Z0-9]+/.test(inputEventName);
                var inputEventNameCh = document.getElementById('eventNameVal');
                if(inputEventNameTest == true) {
                    inputEventNameCh.innerHTML = '<small>' + inputEventName + " sounds like fun" + '</small>';
                } else {
                    inputEventNameCh.innerHTML = '<small>' + "Please give your event a name" + '</small>';
                }
            });
            
            {/* event host validation */}
            $("input#eventHost").blur(function(){
                var inputEventHost = document.getElementById('eventHost').value;
                var inputEventHostTest = /[a-zA-Z0-9]+/.test(inputEventHost);
                var inputHostNameCh = document.getElementById('eventHostVal');
                if(inputEventHostTest == true) {
                    inputHostNameCh.innerHTML = '<small>' + "Does " + inputEventHost + " know any good jokes?" + '</small>';
                } else {
                    inputHostNameCh.innerHTML = '<small>' + "Please give your event a host" + '</small>';
                }
            });
            
            {/* event type validation */}
            $("input#eventType").blur(function(){
                var inputEventType = document.getElementById('eventType').value;
                var inputEventTypeTest = /[a-zA-Z0-9]+/.test(inputEventType);
                var inputTypeNameCh = document.getElementById('eventTypeVal');
                if(inputEventTypeTest == true) {
                    inputTypeNameCh.innerHTML = '<small>' + "A " + inputEventType.toLowerCase() + " it is!" + '</small>';
                } else {
                    inputTypeNameCh.innerHTML = '<small>' + "Please enter the type of event" + '</small>';
                }
            });
        
            
            {/* date validations */}
            $("input#endDate").blur(function(){
                var start_date = new Date($('#startDate').val());
                var end_date = new Date($('#endDate').val());
                var test = document.getElementById("dateVal");
                console.log(start_date);
                console.log(end_date);
                if(start_date < end_date){
                    test.innerHTML = "Thank you!"; 
                } else {
                    test.innerHTML = "Please enter an end date after the start date"; 
                }   
            });

            {/* make sure dates selected are not in the past */}
            var yesterday = Datetime.moment().subtract(1,'day');
            var valid = function( current ){
                return current.isAfter( yesterday );
            };
            
            {/* guest list validations */}
            $("input#eventGuestList").blur(function(){
                var guestList = $("#eventGuestList").text();
                var innerGuestList = document.getElementById("guestList2");
                if(guestList == ""){
                    innerGuestList.innerHTML = "Please enter some guest names";
                }
            });
            
            
            {/* location validations */}
            $("input#eventLocation").blur(function(){
                var inputEventLocation = document.getElementById('eventLocation').value;
                var inputEventLocationTest = /[a-zA-Z0-9]+/.test(inputEventLocation);
                var inputLocationCh = document.getElementById('eventLocationVal');
                if(inputEventLocationTest == true) {
                    inputLocationCh.innerHTML = '<small>' + "Thank you!" + '</small>';
                } else {
                    inputLocationCh.innerHTML = '<small>' + "Please enter a location" + '</small>';
                }
            });                              
        }); 
        
        {/* end validations */}
        
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
                                <h2 className="text-center">Create an event</h2>
                                {/* insert form here */}
                                    <form className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6 col-xs-12">
                                                <label htmlFor="eventName">Give your event a name :</label>
                                                <input type="text" id="eventName" className="form-control" placeholder="e.g Battle of Winterfell" required autoFocus/>
                                                <p id="eventNameVal"><small>Give the event a fun name</small></p>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <label htmlFor="eventHost">Who's the host?</label>
                                                <input type="text" autoComplete="on" className="form-control" id="eventHost" placeholder="e.g Ramsay Bolton" required/>
                                                <p id="eventHostVal"><small>Who's hosting it?</small></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="eventType">Type of Event</label>
                                                <input className="form-control" id="eventType" list="eventTypeList" placeholder="e.g Party, Meeting" required/>
                                                <p id="eventTypeVal"><small>What kind of event is it?</small></p>
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
                                                    dateFormat="L"
                                                    input={true}
                                                    inputProps={{id:"startDate"}}
                                                    inputProps={{type:"datetime"}}
                                                    closeOnSelect= {true}
                                                    isValidDate={ valid } />
                                            </div>
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="endDate">When does it end?</label>
                                                <Datetime
                                                    dateFormat="L"
                                                    input={true}
                                                    inputProps={{id:"endDate"}}
                                                    inputProps={{type:"datetime"}}
                                                    closeOnSelect= {true}
                                                    isValidDate={ valid } />
                                                    <p id="dateVal"><small>Please enter an end date and start date above.</small></p>
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
                                                <p id="guestList2"><small>Who's coming?</small></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-xs-12">
                                                <label htmlFor="eventLocation">Location</label>

                                                <Geosuggest
                                                    id="eventLocation"
                                                    className="form-control"
                                                    placeholder="e.g Winterfell" />
                                            <p id="eventLocationVal"><small>Where will the event be held?</small></p>
                                            </div>
                                        </div>
                                        <label htmlFor="eventInfo">ADDITIONAL INFORMATION<small><em> ( optional )</em></small></label>
                                        <textarea id="eventInfo" className="form-control" rows="4" placeholder="e.g Please bring sword, spears and giants."></textarea>
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