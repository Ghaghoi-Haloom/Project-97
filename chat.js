// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEvU5PyQqy-PhJyyNFhZ6Rml26mQQYf0c",
    authDomain: "don-bosco-liluah.firebaseapp.com",
    databaseURL: "https://don-bosco-liluah-default-rtdb.firebaseio.com",
    projectId: "don-bosco-liluah",
    storageBucket: "don-bosco-liluah.appspot.com",
    messagingSenderId: "860763981948",
    appId: "1:860763981948:web:d68e1ffceb2e3a0a9521f9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User_Name");
  room_number = localStorage.getItem("Room_Number");

  function sendMsg() {
    message = document.getElementById("message").value;
    localStorage.setItem("Message: ", message);
    firebase.database().ref(room_number).push({
        name: user_name,
        message_sent: message,
        room_name: room_number,
        like: 0
    })
    document.getElementById("message").innerHTML = "";
}

  function getData() { firebase.database().ref("/"+room_number).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message_sent'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png' height='25'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp;Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_number).child(message_id).update({
		like : updated_likes  
	 });

}
