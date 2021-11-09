// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCRh8ef8kLB9ESprUJklVFvLBFdMIG7kbQ",
      authDomain: "kwitterlol.firebaseapp.com",
      databaseURL: "https://kwitterlol-default-rtdb.firebaseio.com",
      projectId: "kwitterlol",
      storageBucket: "kwitterlol.appspot.com", //ukindasmeelliekasussybaka
      messagingSenderId: "674954325306",
      appId: "1:674954325306:web:173352e067af8a0ea17403"
     };
      
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
      
     user_name = localStorage.getItem("user_name");
      
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
     function addRoom()
     {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      
        localStorage.setItem("room_name", room_name);
       
        window.location = "kwitter_page.html";
     }
      
     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
      
     }
      
     getData();
      
     function redirectToRoomName(name)
     {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
     }
      
     function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
        window.location = "index.html";
     }
     