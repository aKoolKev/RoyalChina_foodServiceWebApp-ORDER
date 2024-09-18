auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, you can access user info here
        console.log('User is signed in:', user);
    } else {
        // No user is signed in, you might want to redirect to a sign-in page
        console.log('No user is signed in');
    }
});



//sign up function
function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign-up error:', errorCode, errorMessage);
        });
}

//sign in function
function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            alert("Logging in...");
            const user = userCredential.user;
            console.log('User signed in:', user);
            window.location.href= "order.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign-in error:', errorCode, errorMessage);
        });
}

// Sign Up Form Submission
// document.getElementById('signUpForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = document.getElementById('signUpEmail').value;
//     const password = document.getElementById('signUpPassword').value;
//     signUp(email, password);
// });

window.onload = function(){

    // Sign In Form Submission
    document.getElementById('signInForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;
        signIn(email, password);
    });

    
    
};