

var firebaseConfig = {
  //   copy your firebase config informations
 
    apiKey: "AIzaSyB75P3Jaxj4ZHvdkM-IrH2xg9WSwiHxn0k",
    authDomain: "boutique-4c43e.firebaseapp.com",
    databaseURL:"https://boutique-4c43e-default-rtdb.firebaseio.com",
    projectId: "boutique-4c43e",
    storageBucket: "boutique-4c43e.appspot.com",
    messagingSenderId: "664532801096",
    appId: "1:664532801096:web:9a1cc9660dd42c80d1ea7d",
    measurementId: "G-RHV9HTEZ2T"
  
};

// initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("suggestions");
resetInput();
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var mail = document.getElementById("email").value;
  var sub = document.getElementById("sub").value;
  var msg = document.getElementById("msg").value;
  
    

  saveMessages(name, mail, sub,msg);

  
  document.querySelector("#form-message-success").style.display = "block";

   setTimeout(resetInput, 4000);

}
function resetInput() {
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("sub").value="";
  document.getElementById("msg").value="";
  
  document.querySelector("#form-message-success").style.display = "none";
}
const saveMessages = (name, mail,sub,msg) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name: name,
    Mail: mail,
    Subject: sub,
    Message: msg,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).Value;
};

var firebaseRef=firebase.database().ref("student");

firebaseRef.once("value",function(snapshot) {
  var data =snapshot.val();

  for(let i in data){
    console.log(data[i]);
  }
});



var stdNo=1;
var MstdNo=1;
var KstdNo=1;
function addItemsToList(price,type,description,image)
{

  readproduct(price,type,description,image);


}
function readproduct(price,type,description,image){


$(document).ready(function(){
  
$("<div class='col-md-6 col-lg-4 col-xl-3'><div id='product-"+stdNo+"' class='single-product'><div class='part-1' id='part-"+stdNo+"'><ul><li><a href='#'><i class='fa fa-heart'></i></a></li></ul></div><div class='part-2'><h3 class='product-title' id='type"+stdNo+"'>"+type+"</h3><h4 class='product-price' id='price"+stdNo+"'>"+"₹"+price+"</h4></div></div></div>").appendTo('#p_img');

$('#women').find('#product-'+stdNo+'').find('.part-1').css('background', 'url('+image+') no-repeat center');
$('#women').find('#product-'+stdNo+'').find('.part-1').css('background-size', 'cover');

stdNo++;
});



}

function  addItemsToListMen(price,type,description,image){


$(document).ready(function(){
  
$("<div class='col-md-6 col-lg-4 col-xl-3'><div id='product-"+MstdNo+"' class='single-product'><div class='part-1' id='part-"+MstdNo+"'><ul><li><a href='#'><i class='fa fa-heart'></i></a></li></ul></div><div class='part-2'><h3 class='product-title' id='type"+MstdNo+"'>"+type+"</h3><h4 class='product-price' id='price"+MstdNo+"'>"+"₹"+price+"</h4></div></div></div>").appendTo('#pm_img');

$('#men').find('#product-'+MstdNo+'').find('.part-1').css('background', 'url('+image+') no-repeat center');
$('#men').find('#product-'+MstdNo+'').find('.part-1').css('background-size', 'cover');

MstdNo++;
});



}
function  addItemsToListKids(price,type,description,image){


$(document).ready(function(){
  
$("<div class='col-md-6 col-lg-4 col-xl-3'><div id='product-"+KstdNo+"' class='single-product'><div class='part-1' id='part-"+KstdNo+"'><ul><li><a href='#'><i class='fa fa-heart'></i></ul></div><div class='part-2'><h3 class='product-title' id='type"+KstdNo+"'>"+type+"</h3><h4 class='product-price' id='price"+KstdNo+"'>"+"₹"+price+"</h4></div></div></div>").appendTo('#pk_img');

$('#kids').find('#product-'+KstdNo+'').find('.part-1').css('background', 'url('+image+') no-repeat center');
$('#kids').find('#product-'+KstdNo+'').find('.part-1').css('background-size', 'cover');

KstdNo++;
});



}

function FetchAllData() {
    firebase.database().ref("Women").once('value',function(snapshot){
      snapshot.forEach(
          function(ChildSnapshot) {
            let price=ChildSnapshot.val().price;
            let type=ChildSnapshot.val().type;
            let description=ChildSnapshot.val().description;
            let image=ChildSnapshot.val().image;
          

            addItemsToList(price,type,description,image);
          }
        );
    });

    firebase.database().ref("Men").once('value',function(snapshot){
      snapshot.forEach(
          function(ChildSnapshot) {
            let Mprice=ChildSnapshot.val().price;
            let Mtype=ChildSnapshot.val().type;
            let Mdescription=ChildSnapshot.val().description;
            let Mimage=ChildSnapshot.val().image;
          

            addItemsToListMen(Mprice,Mtype,Mdescription,Mimage);
          }
        );
    });
    firebase.database().ref("Kids").once('value',function(snapshot){
      snapshot.forEach(
          function(ChildSnapshot) {
            let Kprice=ChildSnapshot.val().price;
            let Ktype=ChildSnapshot.val().type;
            let Kdescription=ChildSnapshot.val().description;
            let Kimage=ChildSnapshot.val().image;
          

            addItemsToListKids(Kprice,Ktype,Kdescription,Kimage);
          }
        );
    });

}

window.onload(FetchAllData());


