const form = document.getElementById("contactForm");
const alert = document.getElementById("alert");

const firebaseConfig = {
  apiKey: "AIzaSyA9-DO3bEXQ4qCIwDjSsVD1JtBaPRGpQjo",
  authDomain: "stitchn-style.firebaseapp.com",
  databaseURL: "https://stitchn-style-default-rtdb.firebaseio.com",
  projectId: "stitchn-style",
  storageBucket: "stitchn-style.appspot.com",
  messagingSenderId: "773978844594",
  appId: "1:773978844594:web:208fe6b66235b463fc88ab",
  measurementId: "G-SN5BZDXVJB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const ref = database.ref("data");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const permission = document.getElementById("permission").checked;

  ref.push({
    fName: fName,
    lName: lName,
    email: email,
    phone: phone,
    permission: permission,
  });
  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);

  form.reset();
});
