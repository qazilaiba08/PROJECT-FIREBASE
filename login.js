
import { getAuth,onAuthStateChanged
      } from './firebase.js';
      const auth = getAuth()

      let loginBtn = document.getElementById('Login')

      if(loginBtn){
        loginBtn.addEventListener('click', () => {

            let emailField = document.getElementById('email')
            let passwordField = document.getElementById('password')

            if (!emailField || !passwordField) 
        
                return
                    const email = emailField.value.trim();
                    const password = passwordField.value.trim();
                
                    // Validation patterns
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                
                    if (!email || !password) {
                      return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "All fields are mandatory to fill.",
                      });
                    }
                    if (!emailPattern.test(email)) {
                      return Swal.fire({
                        icon: "error",
                        title: "Invalid Email",
                        text: "Please enter a valid email address.",
                      });
                    }
                    if (!passwordPattern.test(password)) {
                      return Swal.fire({
                        icon: "error",
                        title: "Weak Password",
                        text: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 8 characters long.",
                      });
                    }
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const user = auth.currentUser;
            console.log("User is logged in:", user);
            console.log("UID:", user.uid);
            console.log("Email:", user.email);

            Swal.fire({
                title: "Success!",
                text: "You have signIn up successfully!",
                icon: "success",
              });
           location.href = "/dashboard.html"; // Redirect to dashboard
        } else {
            // No user is signed in
            console.log("No user is logged in.");
            Swal.fire({
                icon: "error",
                title: "Sign-in Error",
                text: "An error occurred Please try a valid email.",
              });
            location.href = "/login.html"; // Redirect to login page
          }
        });
       
        } )
      }