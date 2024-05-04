function btnIgniteClick(){
    document.getElementById("igniteButton").style.backgroundImage="linear-gradient(to bottom, #000000, #2D2D2D)";
    document.getElementById("igniteButton").style.color="#FFFFFF"
    document.getElementById("igniteButton").style.border=" 0.5px solid #00000033";
    document.getElementById("igniteButton").style.fontWeight="600";
    document.getElementById("igniteButton").style.boxShadow="0px 4px 6.70px rgba(0, 0, 0, 0.25)"
    document.getElementById("igniteLogo").src="./images/ignitLogo.svg"
    document.getElementById("batchType1").innerHTML="Ignite"
    document.getElementById("batchType2").innerHTML="Ignite"
    document.getElementById("batchType1").style.color="#FF6E00"
    document.getElementById("batchType2").style.color="#FF6E00"
    document.getElementById("batchIcon").src="./images/ignitOrangeLogo.svg"
    document.getElementById("batchIcon2").src="./images/ignitOrangeLogo.svg"
    document.getElementById("cardFlag1").style.border="1px solid #FFE9D9"
    document.getElementById("cardFlag2").style.border="1px solid #FFE9D9"
    document.getElementById("cardFlag1").style.width="86px";
    document.getElementById("cardFlag2").style.width="86px";
    


    document.getElementById("intesiveButton").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)"
    document.getElementById("intesiveButton").style.color="#888888"
    document.getElementById("intesiveButton").style.border="0.5px solid #00000033";
    document.getElementById("intesiveButton").style.fontWeight="500";
    document.getElementById("intesiveLogo").src="./images/intesivLogo.svg";

    document.getElementById("intesiveButton").style.boxShadow="0px 0px 0px white"
}

function btnIntensiveClick(){
    document.getElementById("intesiveButton").style.backgroundImage="linear-gradient(to bottom, rgba(13, 153, 255, 1), rgba(82, 182, 255, 1), rgba(181, 224, 255, 1))";
    document.getElementById("intesiveButton").style.color="#FFFFFF";
    document.getElementById("intesiveButton").style.border="1.3px solid #B5E0FF";
    document.getElementById("intesiveButton").style.boxShadow="0px 4px 10px #92D2FF"
    document.getElementById("intesiveButton").style.fontWeight="600";
    document.getElementById("intesiveLogo").src="./images/intesivDarkLogo.svg";
    document.getElementById("intesiveLogo").style.filter = "drop-shadow(0px 0px 10px white)";
    document.getElementById("batchType1").innerHTML="Intensive"
    document.getElementById("batchType2").innerHTML="Intensive"
    document.getElementById("batchType1").style.color="#1EA0FF"
    document.getElementById("batchType2").style.color="#1EA0FF"
    document.getElementById("batchIcon").src="./images/blueIntensive.svg"
    document.getElementById("batchIcon2").src="./images/blueIntensive.svg"
    document.getElementById("cardFlag1").style.border="1px solid #1EA0FF30"
    document.getElementById("cardFlag2").style.border="1px solid #1EA0FF30";
    document.getElementById("cardFlag1").style.width="111px";
    document.getElementById("cardFlag2").style.width="111px";
 

    document.getElementById("igniteButton").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)"
    document.getElementById("igniteButton").style.color="#878787"
    document.getElementById("igniteButton").style.border="0.5px solid #00000033";
    document.getElementById("igniteButton").style.fontWeight="500";
    document.getElementById("igniteLogo").src="./images/ignitDarkLogo.svg"
    document.getElementById("igniteButton").style.boxShadow="0px 0px 0px white"

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
        useremail.focus();
        nameError.innerHTML="";
        emailError.innerHTML="Enter email address";
        numberError.innerHTML="";
    } else if(usernumber.value===""){
        usernumber.focus();
        nameError.innerHTML="";
        emailError.innerHTML="";
        numberError.innerHTML="Enter Number";
    } else{
        const scriptURL = "https://script.google.com/macros/s/AKfycbwwJ77bH4MSSgx7E5JVEpc-m6M2OYilxL6t8ayyfOdl50CEE_bqwGP0QhXYEkVER9SpIQ/exec"
        const form = document.forms["google-sheet"];
        alert("Please wait form is in submitting process...")
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
    document.querySelector("body").style.position="static";
    document.getElementById("txtNamePopUp").value="";
    document.getElementById("txtEmailPopUp").value="";
    document.getElementById("txtNumberPopUp").value="";
    document.getElementById("nameErrorPopUp").innerHTML="";
    document.getElementById("numberErrorPopUp").innerHTML=""
    document.getElementById("emailErrorPopUp").innerHTML="";

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
        useremailpopup.focus();
        nameErrorpopup.innerHTML="";
        emailErrorpopup.innerHTML="Enter email address";
        numberErrorpopup.innerHTML="";
    } else if(usernumberpopup.value===""){
        usernumberpopup.focus();
        nameErrorpopup.innerHTML="";
        emailErrorpopup.innerHTML="";
        numberErrorpopup.innerHTML="Enter Number";
    } else{
        const scriptURL = "https://script.google.com/macros/s/AKfycbyV7ESH7CnGwP3g6Er3-VaEe0BSvF72_r17fAEw4HSrxd7Tom3TPYE_EJTql8kTE5gf/exec"
        const form = document.forms["google-sheet-popup"];
        alert("Please wait form is in submitting process..")

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

        usernamepopup.value="";
        useremailpopup.value="";
        usernumberpopup.value="";
        nameErrorpopup.innerHTML=""
        emailErrorpopup.innerHTML=""
        numberErrorpopup.innerHTML=""
    }
}

function handleLeavingForm(event){
    event.preventDefault();
    alert("hi");
}