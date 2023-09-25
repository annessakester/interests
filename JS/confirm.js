<script>
window.onerror = function (message, url, line) {
    alert("Message : " + message );
    alert("File URL : " + url );
    alert("Line Number of Error: " + line );
}

getData = function() {
    var userID = getCookie("userName"); 
    var password = getCookie("password"); 
    var psswrdValidation = getCookie("passwordVerify"); 
    var firstName = getCookie("firstName");
    var lastName = getCookie("lastName");
    var email = getCookie("email"); 
    var phoneNumber = getCookie("phoneNumber"); 
    var signUpNewsletter = getCookie("signUpNewsletter"); 
    var interests = getCookie('interests');
    var comments = getCookie('comments'); 
    var Newsletter = getCookie('Newsletter'); 
    var referred = getCookie('referred'); 
  
    document.getElementById("form").innerHTML = "";
    // Displays the combined validated or corrected input from theregistration.html and interests.html pages.
    document.getElementById("regCon").innerHTML +='<section id="pageForm">'+'<article id="placeholderContent">' +'The following information has been saved in cookies: <br>' +'<br/> User Name: ' + '<span id="userName">' + userName + '</div>' + '<br/> User Password: ' + '<span id="pssswordVerify">' + password +'</div>' + '<br/> Verified Password: ' + '<span id="passwordVerify">' +passwordVerify + '</div>' + '<br/> First Name: ' + '<span id="firstName">' + firstName + '</div>' + '<br/> Last Name: ' + '<span id="lastName">' + lastName + '</div>' + '<br/> Email Address: ' + '<span id="email">' + email + '</div>' + '<br/> Phone Number: ' + '<span id="phoneNumber">' + phoneNumber + '</div>'+ '<br/> News Letter Selection: ' + '<span id="signUpNewsletter">' +signUpNewsletter + '</div>' + '<br/> Interests Selection: ' + '<span id="interests">' + interests +'</div>' + '<br/> Comments: ' + '<span id="comments">' + comments + '</div>' + '<br/> Send Sports News Letter: ' + '<span id="Newsletter">' + Newsletter +'</div>' + '<br/> Referral: ' + '<span id="referred">' + referred + '</div>' + '<br/>' +'</article> <br/><br/><br/>';
    return false;
}
function getCookie(cname) { 
    var name = cname + "="; 
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';'); 
    for(var i = 0; i <ca.length; i++) { 
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }return "";
}
    window.onload = getData;
    
</script>