var emailSubmission =[];

function submitInput(){
    var newEmail = document.getElementById('emailSub').value;
    emailSubmission.push(newEmail);
    localStorage.setItem("emailSubmission", emailSubmission);
    document.getElementById("confirmation").innerHTML = "submitted";

    }

function timeout(){
setTimeout(timeout,50000);
window.location.reload(true);
}

function accessList(){
    var txt;
    var password = prompt("Enter the password", );
    if(password == "toast" ){
    txt = "here is the list";
    //document.getElementById("list").innerHTML = txt;
    document.getElementById("list").innerHTML = emailSubmission;
    //show emails variable here
    }
    else{
        txt = "password incorrect";
        document.getElementById("list").innerHTML = txt;
    }
 //also add emails variable here
}