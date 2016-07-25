

$(document).ready(function(){
    $("input#inputName").blur(function(){
        var input2 = document.getElementById('inputName').value;
        var inputT = /[a-zA-Z0-9]+/.test(input2);
        var change2 = document.getElementById('testName');
        if( inputT == true) {
            change2.innerHTML = '<small>' + 'Hello ' + '</small>' + input2;
        } else {
            change2.innerHTML = '<small>' + 'Please provide a valid name' + '</small>';
        }
    });
    $("input#inputEmail").blur(function(){
        var item = document.getElementById('inputEmail').value;
        var itemC = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(item);
        var change = document.getElementById('testEmail');
        if(itemC == true) {
            change.innerHTML = '<small>' + 'Thank you!' + '</small>';
        } else {
            change.innerHTML = '<small>' + 'Valid email address please' + '</small>';
        }
    });
    $("input#inputPassword").blur(function(){
        var item = document.getElementById('inputPassword').value;
        var itemC = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(item);
        var change = document.getElementById('testPassword');
        if(itemC == true) {
            change.innerHTML = '<small>' + 'Enigma has nothing on you' + '</small>';
        } else {
            change.innerHTML = '<small>' + 'Passwords require a symbol, number, lowercase and uppercase letter' + '</small>';
        }
    });
    $("input#confirmPassword").blur(function(){
        var item = document.getElementById('confirmPassword').value;
        var change2 = document.getElementById('inputPassword').value;
        var change = document.getElementById('confirmPassword2');
        if(item == change2 && item !== "") {
            change.innerHTML = '<small>' + 'Passwords match!' + '</small>';
        } else if(item == "") {
            change.innerHTML = '<small>' + 'Password confirmation needed' + '</small>';
        } else {
            change.innerHTML = '<small>' + 'Password must match the above' + '</small>';
        }
    });
    
    {/* New event form validations */}
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