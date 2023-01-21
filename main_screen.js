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

user = localStorage.getItem("User_Name");

function newRoom() {
  room_num = document.getElementById("room_ID").value;
  firebase.database().ref("Room Numbers").child(room_num).update({
    purpose: "adding room number"
  });
}

function getData() {firebase.database().ref("Room Numbers").on('value', function (snapshot) {document.getElementById("room_nums").innerHTML =""; snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          console.log("Room Number: " + room_num);
          row = "<div class='room_num' id=" +Room_names+" onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>";
          document.getElementById("room_nums").innerHTML += row;
          //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room_Number", name);
  window.location = "chat.html";
}