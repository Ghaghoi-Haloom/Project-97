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

function addUser() {
  document.getElementById("next").style.visibility = "visible";
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("User_Name", user_name);
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
}

function nextPage() {
  window.location = "main_screen.html";
}