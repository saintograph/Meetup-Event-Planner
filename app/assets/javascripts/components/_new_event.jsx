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
                console.log('event posted', response)
            }        
        });
    },
    
    render() {
        return (
            <div>
           
            </div>
        )
    }
});

module.exports = NewEvent;