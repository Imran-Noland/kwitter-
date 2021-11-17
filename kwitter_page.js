//YOUR FIRE BASE LINKS
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
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_tag= "<h4>" + name + "<img class= 'user_tick' src= 'tick.png'> </h4>";
message_tag= "<h4 class= 'message_h4'>" + message + "</h4>";
like_button= "<button class= 'btn btn-warning' id= "+ firebase_message_id + " value= "+ like +" onclick= 'updatelike(this.id)'>";
span_tag= "<span class= 'glyphicon glyphicon-thumbs-up'> like: " + like + "</span> </button> <hr>";
row= name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
function updatelike(message_id){
button_id= message_id;
likes= document.getElementById(button_id).value;
update_likes= Number(likes) + 1;
firebase.database().ref(room_name).child(message_id).update({
like: update_likes
});
}