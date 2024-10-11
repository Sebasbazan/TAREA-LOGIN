document.addEventListener('DOMContentLoaded', function() {
    const formTitle = document.getElementById('form-title');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const forgotPasswordSection = document.getElementById('forgot-password-section');
    const changePasswordSection = document.getElementById('change-password-section');

    
    document.getElementById('register-link').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Register';
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    
    document.getElementById('login-link').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Login';
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    
    document.getElementById('forgot-password-link').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Recover Password';
        loginSection.style.display = 'none';
        forgotPasswordSection.style.display = 'block';
    });

    
    document.getElementById('back-to-login-link').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Login';
        forgotPasswordSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    
    document.getElementById('change-password-btn').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Change Password';
        loginSection.style.display = 'none';
        changePasswordSection.style.display = 'block';
    });

    
    document.getElementById('back-to-login-link-2').addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.innerText = 'Login';
        changePasswordSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    
    document.getElementById('recover-btn').addEventListener('click', function() {
        alert('Recovery link has been sent to your email.');
    });

    
    document.getElementById('register-btn').addEventListener('click', function() {
        alert('Registration successful.');
    });

    
    document.getElementById('change-password-btn').addEventListener('click', function() {
        alert('Password has been changed.');
    });

    
    document.getElementById('change-password-link').addEventListener('click', function() {
        alert('You can change your password here.');
        
    });
});
