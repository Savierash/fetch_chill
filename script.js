//sign up and sign in form
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//auuthentication
//document.getElementById("loginForm").addEventListener("submit", function(event) {
    //event.preventDefault(); // Pigilan ang default form submission
    
    // Kunin ang input values
    //let username = document.getElementById("username").value;
    //let password = document.getElementById("password").value;

    // Simpleng validation (palitan ito ng actual authentication method kung may backend)
    //if (username === "admin" && password === "password123") {
        //sessionStorage.setItem("isLoggedIn", "true"); // I-save ang login state
        //window.location.href = "home.html"; // Redirect sa homepage
    //} else {
        //alert("Invalid username or password!");
    //}
//});