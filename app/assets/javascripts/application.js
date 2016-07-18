// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require components
//= require jquery-ui-1.10.4.custom.min
//= require bootstrap
//= require bootstrap-datepicker
//= require bootstrap-select
//= require ct-paper
//= require ct-paper-checkbox
//= require ct-paper-radio 
//= require hipster-cards
//= require_tree .


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
        console.log("it works here too");
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
         