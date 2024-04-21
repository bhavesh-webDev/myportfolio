// ----------------------------about me section----------------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(  tablink of tablinks){
          tablink.classList.remove("active-link");
    } 
    for(  tabcontent of tabcontents ){
          tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------------------mobile sidebar----------------------------

var sidebar = document.getElementById("sidemenu");


function openmenu(){
      sidebar.style.right = "0";
      
}
function closemenu(){
      sidebar.style.right = "-200px";
      
}


// -------------form validation-----------------
function validate() {
var Name = getElementById("name").value;
var Email = getElementById("email").value;
var ContactNo = getElementById("contactNo").value;
var Message = getElementById("message").value;

if(contactNo.length<10 || contactNo.length>10){
      alert("contact number should contain 10 digits");
      return false;

}
else if(isNaN(contactNo)){
      alert("please enter only number");
      return false;

}
else{
     alert("error")

}
}