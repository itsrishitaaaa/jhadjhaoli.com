// Simple user storage using localStorage for demo
const users = JSON.parse(localStorage.getItem('users')) || [];



// Registration
const registerForm = document.getElementById('registerForm');
if(registerForm){
    registerForm.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(users.find(u => u.username === username)){
            document.getElementById('registerMsg').textContent = "Username already exists!";
        } else {
            users.push({username, email, password});
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('registerMsg').textContent = "Registered successfully! Go to login.";
            registerForm.reset();
        }
    });
}

// Login
const loginForm = document.getElementById('loginForm');
if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const user = users.find(u => u.username === username && u.password === password);
        if(user){
            localStorage.setItem('currentUser', JSON.stringify(user));
            document.getElementById('loginMsg').textContent = "Login successful!";
            window.location.href = "dashboard.html"; // redirect
        } else {
            document.getElementById('loginMsg').textContent = "Invalid credentials!";
        }
    });
}
