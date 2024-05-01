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
    }
}

function openBtnOne(){
    if(document.getElementById("q1").style.height==="auto"){
        document.getElementById("q1").style.height="56px";
        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("q1").style.transition = "height 0.5s";

    } else{
        document.getElementById("q1").style.height="auto";
        document.getElementById("accordion-icon1").innerHTML="-";
        document.getElementById("accordion-icon1").style.color="#8F8F8F";
        document.getElementById("q1").style.transition ="height 0.5s";

        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q2").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnTwo(){
    if(document.getElementById("q2").style.height==="auto"){
        document.getElementById("q2").style.height="56px";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("q2").style.transition = "height 0.5s";

    } else{
        document.getElementById("q2").style.height="auto";
        document.getElementById("accordion-icon2").innerHTML="-";
        document.getElementById("accordion-icon2").style.color="#8F8F8F";
        document.getElementById("q2").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnThree(){
    if(document.getElementById("q3").style.height==="auto"){
        document.getElementById("q3").style.height="56px";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("q3").style.transition = "height 0.5s";

    } else{
        document.getElementById("q3").style.height="auto";
        document.getElementById("accordion-icon3").innerHTML="-";
        document.getElementById("accordion-icon3").style.color="#8F8F8F";
        document.getElementById("q3").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnFour(){
    if(document.getElementById("q4").style.height==="auto"){
        document.getElementById("q4").style.height="56px";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("q4").style.transition = "height 0.5s";

    } else{
        document.getElementById("q4").style.height="auto";
        document.getElementById("accordion-icon4").innerHTML="-";
        document.getElementById("accordion-icon4").style.color="#8F8F8F";
        document.getElementById("q4").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnFive(){
    if(document.getElementById("q5").style.height==="auto"){
        document.getElementById("q5").style.height="56px";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("q5").style.transition = "height 0.5s";

    } else{
        document.getElementById("q5").style.height="auto";
        document.getElementById("accordion-icon5").innerHTML="-";
        document.getElementById("accordion-icon5").style.color="#8F8F8F";
        document.getElementById("q5").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnSix(){
    if(document.getElementById("q6").style.height==="auto"){
        document.getElementById("q6").style.height="56px";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("q6").style.transition = "height 0.5s";

    } else{
        document.getElementById("q6").style.height="auto";
        document.getElementById("accordion-icon6").innerHTML="-";
        document.getElementById("accordion-icon6").style.color="#8F8F8F";
        document.getElementById("q6").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnSeven(){
    if(document.getElementById("q7").style.height==="auto"){
        document.getElementById("q7").style.height="56px";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("q7").style.transition = "height 0.5s";

    } else{
        document.getElementById("q7").style.height="auto";
        document.getElementById("accordion-icon7").innerHTML="-";
        document.getElementById("accordion-icon7").style.color="#8F8F8F";
        document.getElementById("q7").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnEight(){
    if(document.getElementById("q8").style.height==="auto"){
        document.getElementById("q8").style.height="56px";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("q8").style.transition = "height 0.5s";

    } else{
        document.getElementById("q8").style.height="auto";
        document.getElementById("accordion-icon8").innerHTML="-";
        document.getElementById("accordion-icon8").style.color="#8F8F8F";
        document.getElementById("q8").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnNine(){
    if(document.getElementById("q9").style.height==="auto"){
        document.getElementById("q9").style.height="56px";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("q9").style.transition = "height 0.5s";

    } else{
        document.getElementById("q9").style.height="auto";
        document.getElementById("accordion-icon9").innerHTML="-";
        document.getElementById("accordion-icon9").style.color="#8F8F8F";
        document.getElementById("q9").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";
        document.getElementById("accordion-icon10").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";
        document.getElementById("accordion-icon10").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q3").style.height="56px";
        document.getElementById("q10").style.height="56px";
    }
}

function openBtnTen(){
    if(document.getElementById("q10").style.height==="auto"){
        document.getElementById("q10").style.height="56px";
        document.getElementById("accordion-icon10").innerHTML="+";
        document.getElementById("accordion-icon10").style.color="black";
        document.getElementById("q10").style.transition = "height 0.5s";

    } else{
        document.getElementById("q10").style.height="auto";
        document.getElementById("accordion-icon10").innerHTML="-";
        document.getElementById("accordion-icon10").style.color="#8F8F8F";
        document.getElementById("q10").style.transition ="height 0.5s";

        document.getElementById("accordion-icon1").innerHTML="+";
        document.getElementById("accordion-icon2").innerHTML="+";
        document.getElementById("accordion-icon4").innerHTML="+";
        document.getElementById("accordion-icon5").innerHTML="+";
        document.getElementById("accordion-icon6").innerHTML="+";
        document.getElementById("accordion-icon7").innerHTML="+";
        document.getElementById("accordion-icon8").innerHTML="+";
        document.getElementById("accordion-icon9").innerHTML="+";
        document.getElementById("accordion-icon3").innerHTML="+";

        document.getElementById("accordion-icon1").style.color="black";
        document.getElementById("accordion-icon2").style.color="black";
        document.getElementById("accordion-icon4").style.color="black";
        document.getElementById("accordion-icon5").style.color="black";
        document.getElementById("accordion-icon6").style.color="black";
        document.getElementById("accordion-icon7").style.color="black";
        document.getElementById("accordion-icon8").style.color="black";
        document.getElementById("accordion-icon9").style.color="black";
        document.getElementById("accordion-icon3").style.color="black";

        document.getElementById("q1").style.height="56px";
        document.getElementById("q2").style.height="56px";
        document.getElementById("q4").style.height="56px";
        document.getElementById("q5").style.height="56px";
        document.getElementById("q6").style.height="56px";
        document.getElementById("q7").style.height="56px";
        document.getElementById("q8").style.height="56px";
        document.getElementById("q9").style.height="56px";
        document.getElementById("q3").style.height="56px";
    }
}