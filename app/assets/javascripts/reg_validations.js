

$(document).ready(function(){
    valid= true;
    function validate() {
        var valid = true;
        valid = checkName();
        console.log(valid);
    }

    
    $("input#inputName").blur(function checkName(){
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
});