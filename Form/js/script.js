document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const message = document.getElementById('message');
    
    const correctUsername = 'admin@123gmail.com';
    const correctPassword = 'admin';


    if (username === correctUsername && password === correctPassword) {
        message.textContent = 'Login successful, welcome!';
        message.style.color = "green";

    } 	
	else {
        message.textContent = 'Incorrect username or password!';
        message.style.color = "red";
    }
});

function repas() {
    window.open("https://github.com/Gheris-579", '_black');
};