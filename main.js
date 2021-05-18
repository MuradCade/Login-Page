//This Use To Hide The Javascript Code From Webpage Source Code


function check() {
    var user = document.getElementById("usr");
    var passwd = document.getElementById("ps");

    if (user.value == "MuradCade" && passwd.value == "murad0910") {
        window.location = "dash.html";


    }

    else {

        document.getElementById("msg").innerHTML = "Wrong Username Or Password";

        document.getElementById("usr").value = "";
        document.getElementById("ps").value = "";
    }


}



function forget() {
    window.location = "forgetpage.html";
    document.getElementById("usr").value = "";
    document.getElementById("ps").value = "";
}





