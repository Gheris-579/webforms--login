document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Here ye can add yer logic to check the credentials
    if (username === 'admin@123gmail.com' && password === 'admin') {
        document.getElementById('message').textContent = 'Login successful, welcome!';
        document.getElementById('message').style.color = "green";

    } 	
	else {
        document.getElementById('message').textContent = 'Incorrect username or password!';
        document.getElementById('message').style.color = "red";
    }
});

function repas() {
    alert("Sei Stupito");
};