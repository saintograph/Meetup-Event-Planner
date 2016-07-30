  
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

// Date validations

function checkEventDate(){
    var result = true;
    var dateA = new Date(document.getElementById('startDate').value);
    var dateB = new Date(document.getElementById('endDate').value);
    var dateNow = new Date();
    var inputDateCh = document.getElementById('dateVal'); 
    if (dateA < dateNow) {
      inputDateCh.innerHTML = '<small>' + "Dates can't be in the past" + "</small>";
      return result =  false;
    } else if (dateB.getTime() == dateA.getTime()) {
      if (dateA < dateNow ) {
        inputDateCh.innerHTML = '<small>' + "Dates can't be in the past" + "</small>";
      }
      inputDateCh.innerHTML = '<small>' + "Start date can't be the same as end date" + "</small>";
      return result = false;
    } else if (dateA > dateB) {
      if (dateA < dateNow ) {
        inputDateCh.innerHTML = '<small>' + "Dates can't be in the past" + "</small>";
      } else {
        inputDateCh.innerHTML = '<small>' + "End date should be after start date" + "</small>";
      } 
      return result = false;
    } else if (dateA == "Invalid Date") {
      inputDateCh.innerHTML = '<small>' + "Please provide valid dates" + "</small>";
      return result = false;  
    } else if (dateB == "Invalid Date") {
      inputDateCh.innerHTML = '<small>' + "Please provide valid dates" + "</small>";
      return result = false;
    } else {
      inputDateCh.innerHTML = '<small>' + "Thank you!" + "</small>";
      return result = true;
    }
}

// Guest input validations

function checkGuest() {
    var result = true;
    guestNames = document.getElementById('eventGuestList').value;
    if (guestNames == "") {
        return result = false;
    } else if (guestNames == " ") {
        return result = false;
    } else {
        return result = true;        
    }
}

// Location validations

function checkLocation() {
    var result = true;
    locationName = document.getElementById('eventLocation').value;
    if (locationName == "") {
        return result = false;
    } else if (locationName == " ") {
        return result = false;
    } else {
        return result = true;        
    }
}

// End new event form validations 