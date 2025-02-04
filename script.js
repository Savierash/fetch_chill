function toggleForm() {
            let loginForm = document.getElementById("loginForm");
            let signupForm = document.getElementById("signupForm");
            
            if (loginForm.style.display === "none") {
                loginForm.style.display = "block";
                signupForm.style.display = "none";
            } else {
                loginForm.style.display = "none";
                signupForm.style.display = "block";
            }
        }