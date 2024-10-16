function handleLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById('role').value;

    if (username && password) {
        if(role === 'applicant')
        {
        window.location.href = "apply.html";
        }
    } else {
        alert("Please fill in all fields");
    }
    if (username && password) {
        if(role === 'admin')
        {
        window.location.href = "admin.html";
        }
    } else {
        alert("Please fill in all fields");
    }
}

