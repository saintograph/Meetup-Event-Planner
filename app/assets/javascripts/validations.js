  
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
function checkEventType(obj){
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

function checkEventDate(){
    var result = true;
    var dateA = new Date(document.getElementById('startDate').value);
    var dateB = new Date(document.getElementById('endDate').value);
    var dateNow = new Date(); 
    if(dateA < now) {
      return result =  false;
    } else if (dateB < now) {
      return result = false;
    } else if (dateA == "Invalid Date") {
      return result = false;  
    } else if (dateB == "Invalid Date") {
      return result = false;
    } else if (dateA > dateB) {
      return result = false;
    } else {
      return result = true;
    }
}

// Guest input validations

function checkGuest() {
    var result = true;
    guestNames = $('.bootstrap-tagsinput').text();
    if (guestNames == "") {
        return result = false;
    } else if (guestNames == " ") {
        return result = false;
    } else {
        return result = true;        
    }
}


// End new event form validations 