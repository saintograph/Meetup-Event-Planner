
   
// New event form validations 
    
// event name validation 
function checkEventName(obj) {
    var result = true;
    var inputEventNameTest = /[a-zA-Z0-9]+/.test(obj);
    var inputEventNameCh = document.getElementById('eventNameVal');
    if(inputEventNameTest == true) {
        inputEventNameCh.innerHTML = '<small>' + obj + " sounds like fun" + '</small>';
        return result = true;
    } else {
        inputEventNameCh.innerHTML = '<small>' + "Please give your event a name" + '</small>';
        return result = false;
    }
}

    
// event host validation 
function checkEventHost(obj){
    var result = true;
    var inputEventHostTest = /[a-zA-Z0-9]+/.test(obj);
    var inputHostNameCh = document.getElementById('eventHostVal');
    if(inputEventHostTest == true) {
        inputHostNameCh.innerHTML = '<small>' + "Does " + obj + " know any good jokes?" + '</small>';
        return result = true;
    } else {
        inputHostNameCh.innerHTML = '<small>' + "Please give your event a host" + '</small>';
        return result = false;
    }
};
    
// event type validation 
function  checkEventType(obj){
    var result = true;
    var inputEventTypeTest = /[a-zA-Z0-9]+/.test(obj);
    var inputTypeNameCh = document.getElementById('eventTypeVal');
    if(inputEventTypeTest == true) {
        inputTypeNameCh.innerHTML = '<small>' + "A " + obj.toLowerCase() + " it is!" + '</small>';
        return result = true;
    } else {
        inputTypeNameCh.innerHTML = '<small>' + "Please enter the type of event" + '</small>';
        return result = false;
    }
};


$(document).ready(function(){ 
    
    // Date/time validations 
    
    var startDate = new Date($('#startDate').val());
    var endDate = new Date($('#endDate').val());


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
    
    // location validations     
    $('input#eventLocation').blur(function(){
        var location = document.getElementById('eventLocation').value;
        var inputEventLocationTest = /[a-zA-Z0-9]+/.test(location);
        var inputLocationCh = document.getElementById('eventLocationVal');
        if(inputEventLocationTest == true) {
            inputLocationCh.innerHTML = '<small>' + "Thank you!" + '</small>';
        } else {
            inputLocationCh.innerHTML = '<small>' + "Please enter a location" + '</small>';
        }
    });
    
    // guest list validations 
    
    // See main page "application.html.erb" for script         
    

    
    //* End new event form validations *
}); 