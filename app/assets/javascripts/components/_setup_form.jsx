var SetupForm = React.createClass({
    
    
    render() {
        return (
            <div>
            <form className="contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <label>Name</label>
                        <input className="form-control" type="name" placeholder="e.g 'Water Balloon Festival'"/>
                    </div>
                    <div className="col-md-6">
                        <label>Type of Event</label>
                        <input className="form-control" list="eventType" placeholder="e.g Party, Meeting"/>
                        <datalist id="eventType">
                            <option value="Party"></option>
                            <option value="Meeting"></option>
                            <option value="Conference"></option>
                            <option value="Seminar"></option>
                            <option value="Informal Talk"></option>
                        </datalist>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <label for="">When does it start?</label>
                        <input className="datepicker form-control" type="text" placeholder="Start Date"/>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <label for="">When does it end?</label>
                        <input className="datepicker form-control" type="text" placeholder="End Date"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label for="">Guest list</label>
                        <input className="form-control" placeholder="End Date"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label for="">Location</label>
                        <input className="form-control" placeholder="e.g. Ibiza"/>
                    </div>
                </div>
                <label>ADDITIONAL INFORMATION<small><em>( for your guests )</em></small></label>
                <textarea className="form-control" rows="4" placeholder="e.g Please bring food, tents and a sense of humour."></textarea>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <a href="/event_display.html" className="btn btn-danger btn-block btn-lg btn-fill">Organize</a>
                    </div>
                </div>
            </form>
            </div>
        )
    }
});

