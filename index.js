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

async function handleTicketForm(event){
    event.preventDefault();
    var username = document.getElementById("txtName");
    var useremail = document.getElementById("txtEmail");
    var usernumber = document.getElementById("txtNumber");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var numberError = document.getElementById("numberError");

    if(username.value===""){
        username.focus();
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
    } else{
        const scriptURL = "https://script.google.com/macros/s/AKfycbzZ_IikYjJSxwzzvh8ChoeuStExOwT2Gd4mi7_espv7KKag6W1EMtiObIhyzPQ8LDHE/exec"
        const form = document.forms["google-sheet"];

        await fetch(scriptURL, {method: "POST", body: new FormData(form)})
        .then(response=> alert("Thanks you for contacting us, we will call you shortly..."))
        .catch(error => console.error("Error!", error.message))

        username.value="";
        useremail.value="";
        usernumber.value="";
        nameError.innerHTML="";
        emailError.innerHTML="";
        numberError.innerHTML="";
    }
} 


function popupClose(){
    document.getElementById("curriculum-form").style.display="none"
    document.querySelector("body").style.position="static"
}
function popupOpen(){
    document.getElementById("curriculum-form").style.display="flex"
    document.querySelector("body").style.position="fixed"
}

async function handleCurriculumForm(event){
    event.preventDefault();
    var usernamepopup = document.getElementById("txtNamePopUp");
    var useremailpopup = document.getElementById("txtEmailPopUp");
    var usernumberpopup = document.getElementById("txtNumberPopUp");
    var nameErrorpopup = document.getElementById("nameErrorPopUp");
    var emailErrorpopup = document.getElementById("emailErrorPopUp");
    var numberErrorpopup = document.getElementById("numberErrorPopUp");

    if(usernamepopup.value===""){
        usernamepopup.focus();
        nameErrorpopup.innerHTML="Enter user name";
        emailErrorpopup.innerHTML="";
        numberErrorpopup.innerHTML="";
    } 
    else if(useremailpopup.value===""){
        nameErrorpopup.innerHTML="";
        emailErrorpopup.innerHTML="Enter email address";
        numberErrorpopup.innerHTML="";
    } else if(usernumberpopup.value===""){
        nameErrorpopup.innerHTML="";
        emailErrorpopup.innerHTML="";
        numberErrorpopup.innerHTML="Enter Number";
    } else{
        const scriptURL = "https://script.google.com/macros/s/AKfycbz-lvNj7ErRTbLRa-GMk-hk6lzzgI6afeWIN9gPtupi1FSHdSZVimT5zHSeAMlCR005Xg/exec"
        const form = document.forms["google-sheet-popup"];

        await fetch(scriptURL, {method: "POST", body: new FormData(form)})
        .then(response=> alert("Thanks you for contacting us, we will call you shortly..."))
        .catch(error => console.error("Error!", error.message))

        var pdfUrl = "./images/DzgnJamSuper30.pdf";
        var link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "DzgnJamSuper30.pdf";
        link.click();

        document.getElementById("curriculum-form").style.display="none";
        document.querySelector("body").style.position="static"
    }
}
  