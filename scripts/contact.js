var vName, email, myConsole, qual, feedback, theDate;
var index, msg;

$(document).ready(main);

function main(){
    var sButton = $('#iSubmitButton')[0];
    sButton.addEventListener('click', clicked, false);
    ShowConsole();
};

function GetElements(){
    vName = $('#iName')[0];
    email = $('#iEmail')[0];
    myConsole = $('#console')[0];
    qual = $('#quality');
    feedback = $('#iFeedback')[0];
    theDate = $('#iDate')[0];
    theDate.value = (new Date).toLocaleString();
}

function ShowConsole(){
    GetElements();
    msg = "<p>Date: " + theDate.value + "</p>";
    msg += "<p>Name: " + vName.value + "</p>";
    msg += "<p>Email: " + email.value + "</p>";
    if ($("#quality")[0].is(":checked")){
        msg += "<p>Quality: Great</p>";
    } else if ($("#isGood").is(":checked")){
        msg += "<p>Quality: Good</p>";
    } else if ($("#isAverage").is(":checked")){
        msg += "<p>Quality: Average</p>";
    } else if ($("#isPoor").is(":checked")){
        msg += "<p>Quality: Poor</p>";
    } else if ($("#isTerrible").is(":checked")){
        msg += "<p>Quality: Terrible</p>";
    } else {
        msg += "<p>Quality: ERROR!</p>";
    }
    msg += "<p>Feedback: " + feedback.value + "</p>";
    myConsole.innerHTML = msg;
}

function clicked(){
    GetElements();
    if (CheckName()){
        alert("Name OK!");
    } else {
        alert("Bad Name!");
    }
    ShowConsole();
};

function CheckName(){
    var patt = new RegExp(/^[a-zA-Z]+$/);
    return patt.test(name);
    
}