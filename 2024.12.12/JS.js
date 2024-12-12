document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsCheckbox = document.getElementById('termsCheckbox').checked; 
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/.test(email) || email.length < 5 || email.length > 30) {
        document.getElementById('message').innerText = 'Please enter a valid email address.';
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('error');
        return;
    }

    if (username.length < 2 || username.length > 50) {
        document.getElementById('message').innerText = 'Username must be between 2 and 50 characters.';
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('error');
        return;
    }

    if (password.length < 6 || password.length > 10 || password !== confirmPassword || !/^[a-zA-Z0-9]{6,10}$/.test(password)) {
    document.getElementById('message').innerText = 'Password must be between 6 and 10 characters, contain only letters and numbers, and match the confirm password.';
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('message').classList.add('error');
    return;
}

    if (!termsCheckbox) {
        document.getElementById('message').innerText = 'You must accept the terms and conditions.';
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').classList.add('error');
        return;
    }

    document.getElementById('message').innerText = 'Success! The form has been submitted.';
    document.getElementById('message').classList.remove('hidden', 'error');
    document.getElementById('message').classList.add('success');

    window.location.href = 'success.html';
});