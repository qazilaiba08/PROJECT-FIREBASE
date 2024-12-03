import { getAuth,onAuthStateChanged
} from './firebase.js';
const auth = getAuth()

let profile = document.getElementById('update');

if(profile){
    profile.addEventListener('click', () => {
     
onAuthStateChanged(auth, (user) => {
    if (user) {
        const user = auth.currentUser;
        updateProfile(auth.currentUser, {
            displayName: 'qazi',
            photoURL: 'https://res.cloudinary.com/dbsdadme8/image/upload/v1733229811/e9mzbwu1e6bklylpwglw.jpg',
        })
            .then(() => {
                Swal.fire({
                    input: 'url',
                    inputLabel: 'URL address',
                    inputPlaceholder: 'Enter the URL',
                }).then(({ value: url }) => {
                    if (url) Swal.fire(`Entered URL: ${url}`);
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `Please enter a valid URL path!`,
                });
            });
Swal.fire({
    title: "Success!",
    text: "You have signIn up successfully!",
    icon: "success",
  });
location.href = "./Home.html"; // Redirect to dashboard
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
    })
}