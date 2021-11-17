
var firebaseConfig = {
      apiKey: "AIzaSyDe7OiXDI8tuCXzpx_ikC2hv2fkJ3aLdSs",
      authDomain: "imran-brlo.firebaseapp.com",
      databaseURL: "https://imran-brlo-default-rtdb.firebaseio.com",
      projectId: "imran-brlo",
      storageBucket: "imran-brlo.appspot.com",
      messagingSenderId: "796199461529",
      appId: "1:796199461529:web:435ea820b1fd0f7bb74e08"
    };
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome -" + user_name + "!";
function addRoom(){
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name" 
});
localStorage.setItem("room_name", room_name);
window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row= "<div class= 'room_name' id= "+ Room_names +" onclick= 'redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}