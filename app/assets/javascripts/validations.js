

$(document).ready(function(){
   
    // New event form validations 
    
    // event name validation 
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
    
    // event host validation 
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
    
    // event type validation 
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
    
    
    // Date/time validations 
    
    var startDate = new Date($('#startDate').val());
    var endDate = new Date($('#endDate').val());
    $("#dtBox").DateTimePicker({
        dateTimeFormat: "MM-dd-yyyy hh:mm:ss AA",
        maxDateTime: moment(endDate).add(30, 'minutes').format("MM-D-YYYY hh:mm:ss A"),
        minDateTime: moment(startDate).format("MM-D-YYYY hh:mm:ss A"),
        animationDuration: 100
    });
    
    $("input#endDate").blur(function(){
        var startDate = new Date($('#startDate').val());
        var endDate = new Date($('#endDate').val());
        var inputDateCh = document.getElementById('dateVal');
        if(endDate == "Invalid Date") {
            inputDateCh.innerHTML = '<small>' + "Please enter valid dates" + "</small>";
            console.log(startDate);
            console.log(endDate);
        } else if(startDate == "Invalid Date"){
            inputDateCh.innerHTML = '<small>' + "Please enter valid dates" + "</small>";
        } else if (startDate > endDate) {
            inputDateCh.innerHTML = '<small>' + "End date must be after start date" + "</small>";
            console.log(startDate);
            console.log(endDate); 
        } else {
            inputDateCh.innerHTML = '<small>' + "Thank you!" + "</small>";
            console.log(startDate);
            console.log(endDate);
        }
    });
    
        
    $("input#startDate").blur(function(){
        var startDate = new Date($('#startDate').val());
        var endDate = new Date($('#endDate').val());
        var now = new Date();
        var inputDateCh = document.getElementById('dateVal');
        if(endDate == "Invalid Date") {
            inputDateCh.innerHTML = '<small>' + "Please enter valid dates" + "</small>";
            console.log(startDate);
            console.log(endDate);
        } else if(startDate == "Invalid Date"){
            inputDateCh.innerHTML = '<small>' + "Please enter valid dates" + "</small>";
        } else if (startDate > endDate) {
            inputDateCh.innerHTML = '<small>' + "End date must be after start date" + "</small>";
            console.log(startDate);
            console.log(endDate); 
        } else {
            inputDateCh.innerHTML = '<small>' + "Thank you!" + "</small>";
            console.log(startDate);
            console.log(endDate);
        }
    });
    
    // guest list validations 
    
            
    $("input#eventGuestList").blur(function(){
        var guestList = $("#eventGuestList").text();
        var innerGuestList = document.getElementById("guestList2");
        if(guestList == ""){
            innerGuestList.innerHTML = "Please enter some guest names";
        }
    });
    
    
    // location validations 
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
    
    //* End new event form validations *
}); 