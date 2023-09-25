
    var volAmount;
function pressEnter(e){//e is event object passed from function call
   var keyCode //key code will be stored in variable
    if(e &&e.which) { //if which property of event object is supported (NN4)
        e = e
        keyCode = e.which //key code is contained in NN4's which property
    }
    else{
        e = event
       keyCode = e.keyCode //key code is contained in IE's keyCode property
    }
    if(keyCode == 13) { //if generated key code is equal to ascii 13 (if enter key)
        addFields(); //submit the form
        return false //prevents submission of the form if a field is empty.
    }
    else{
        return true //The "else" tells the function what to do if all fields are filled out then the form can be submitted correctly
    }
}

function addFields() {
    //number of inputs to create
    var number = document.getElementById("recipientNumber").value;
    
    //Container <div> where dynamic content will be placed
    document.getElementById("container").innerHTML = "";
    
    for (i=0;i<number;i++) {
        var volunteerForm = document.createElement("label");
        volunteerForm.type = "label";
        volunteerForm.innerHTML = "Volunteer Name";
            //create an <input> element, set its type and name attributes
        var volunteerInput = document.createElement("input");
        volunteerInput.type = "text";
        volunteerInput.id = "recipientInput"+i;
        volunteerInput.placeholder = "Enter Volunteer Name";
        container.appendChild(volunteerForm);
            //Attach/append a line break
        container.appendChild(document.createElement("br"));
        container.appendChild(volunteerInput);
            //attach/append a line break
        container.appendChild(document.createElement("br"));
    }
    recNumber=document.getElementById("recipientNumber").value;
    document.getElementById("submit").style.visibility="visible";
}
    
//the function 'inviteLetter' is defined//
function inviteLetter() {
    var orgName = document.getElementById("organizationInput").value;
    var eDate = document.getElementById("eventDateInput").value;
    var webURL = document.getElementById("websiteURLInput").value;
    var hName = document.getElementById("hostInput").value;
    for (i=0;i<recNumber; i++) {
        var rName = [document.getElementById("recipientInput" +i).value, orgName, eDate, webURL, hName];
        var volLetter =  document.createElement("label");
        volLetter.innerHTML = "Hello "+rName[0]+"!<br/><br/>"+"You have been invited to volunteer for an even held by " +rName[1] + " on " + rName[2] +". Please come to the following website: " + rName[3] + " to sign up as a volunteer. Thanks!<br/><br/>" + rName[4]+"<br/><br/><hr/>";
    document.getElementById("Volunteer Information").appendChild(volLetter);
    }
}  
