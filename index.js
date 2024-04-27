function btnIgniteClick(){
    document.getElementById("igniteButton").style.backgroundImage="linear-gradient(to bottom, #000000, #2D2D2D)";
    document.getElementById("igniteButton").style.color="#FFFFFF"
    document.getElementById("igniteButton").style.border=" 0.5px solid #00000033";
    document.getElementById("igniteButton").style.fontWeight="600";
    document.getElementById("igniteLogo").src="./images/ignitLogo.svg"
    document.getElementById("batchType1").innerHTML="Ignite"
    document.getElementById("batchType2").innerHTML="Ignite"
    


    document.getElementById("intesiveButton").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)"
    document.getElementById("intesiveButton").style.color="#888888"
    document.getElementById("intesiveButton").style.border="0.5px solid #00000033";
    document.getElementById("intesiveButton").style.fontWeight="500";
    document.getElementById("intesiveLogo").src="./images/intesivLogo.svg";
}

function btnIntensiveClick(){
    document.getElementById("intesiveButton").style.backgroundImage="linear-gradient(to bottom, #0D99FF, #52B6FF, #B5E0FF)";
    document.getElementById("intesiveButton").style.color="#FFFFFF"
    document.getElementById("intesiveButton").style.border="1.3px solid #B5E0FF";
    document.getElementById("intesiveButton").style.fontWeight="600";
    document.getElementById("intesiveLogo").src="./images/intesivDarkLogo.svg";
    document.getElementById("batchType1").innerHTML="Intensive"
    document.getElementById("batchType2").innerHTML="Intensive"
 

    document.getElementById("igniteButton").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)"
    document.getElementById("igniteButton").style.color="#878787"
    document.getElementById("igniteButton").style.border="0.5px solid #00000033";
    document.getElementById("igniteButton").style.fontWeight="500";
    document.getElementById("igniteLogo").src="./images/ignitDarkLogo.svg"
}

function handleTicketForm(event){
    event.preventDefault();
    var username = document.getElementById("txtName");
    var useremail = document.getElementById("txtEmail");
    var usernumber = document.getElementById("txtNumber");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var numberError = document.getElementById("numberError");

    if(username.value===""){
        nameError.innerHTML="Enter user name";
        emailError.innerHTML="";
        numberError.innerHTML="";
    } 
    else if(useremail.value===""){
        nameError.innerHTML="";
        emailError.innerHTML="Enter email address";
        numberError.innerHTML="";
    } else if(usernumber.value===""){
        nameError.innerHTML="";
        emailError.innerHTML="";
        numberError.innerHTML="Enter Number";
    }
} 