function checkdata(){
    var uname = document.getElementById("fname").value;
    var uedu = document.myform.edu;
    var reg = "^[a-zA-Z ]{3,15}$";
    if(uname == ""){
        window.alert("this field is required");
        document.getElementById("fname").focus();
        return false;
    }
    if(!uname.match(reg)){
        window.alert("Please enter name");
        document.getElementById("fname").focus();
    }
    if(uedu[0].checked == false && uedu[1].checked == false&&uedu[2].checked == false&&uedu[3].checked == false){
        window.alert("Please select your qualification");
    }
}