document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('token-form');
    const result = document.getElementById('token-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        if (username) {
            const token = generateToken(username);
            result.textContent = `Hello, ${username}! Your token number is: ${token}`;
        } else {
            result.textContent = 'Please enter a valid username.';
        }
    });

    function generateToken(username) {
        const timestamp = new Date().getTime();
        return username.length * timestamp;
    }
});
