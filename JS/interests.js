<script>
// Error reporting to assist with troubleshooting.
    window.onerror = function (message, url, line) {
        alert("Message : " + message );
        alert("File URL : " + url );
        alert("Line Number of Error: " + line );
    }
    // This function is called once HTML has loaded completely.
    // Registration Page.
    getData = function() {
        var userID = getCookie("userName"); 
        var password = getCookie("password"); 
        var psswrdValidation = getCookie("psswrdVerify"); 
        var firstName = getCookie("firstName");
        var lastName = getCookie("lastName"); 
        var email = getCookie("email"); 
        var phoneNumber = getCookie("phoneNumber"); 
        var signUpNewsletter = getCookie("signUpNewsletter"); 
        
        var interests = document.getElementById('interests'); 
        var comments = document.getElementById('comments').value; 
        var Newsletter = document.getElementById('Newsletter'); 
        var referred = document.getElementById('referred').value; 
      
    if(document.getElementById('hiking').checked) {
        var interests = "hiking"; 
    } else if (document.getElementById('swimming').checked) {
        var interests = "swimming"; 
    } else if (document.getElementById('kayaking').checked) {
        var interests = "kayaking"; 
   } else {interests = "No Selection Made."; 
    }
     if(document.getElementById('signUpYes').checked) {
         var Newsletter = "Yes";
     } else if(document.getElementById('signUpNo').checked) {
         var Newsletter = "No";
     } else {Newsletter = "No Selection Made.";
    }
        if(!comments) {
        var comments = "No comment made.";
        }
        if(!referred) {
        var referred = "No referral entered.";
        }
        setCookie("userName", userName, 1); 
        setCookie("password", password, 1); 
        setCookie("passwordVerify", passwordVerify, 1);
        setCookie("firstName", firstName, 1);
        setCookie("lastName", lastName, 1);
        setCookie("email", email, 1);
        setCookie("phoneNumber", phoneNumber, 1);
        setCookie("signUpNewsletter", signUpNewsletter, 1);
        setCookie("interests", interests, 1);
        setCookie("comments", comments, 1); 
        setCookie("Newsletter", Newsletter, 1); 
        setCookie("referred", referred, 1); 
        window.location.replace("confirm.html");return false;
    }
    function setCookie(cname, cvalue, exdays) { 
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 1 * 3600 * 1000)); 
        var expires = "expires=" + d.toUTCString(); 
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
    }
    function getCookie(cname) { 
        var name = cname + "=";
        var ca = decoded Cookie.split(';'); 
        for(var i = 0; i <ca.length; i++) { 
            var c = ca[i];
            while (c.charAt(0) == ' ') {c = c.substring(1);
    }if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);
            }
        }return "";
    }
    window.onload = getData;
    
</script>