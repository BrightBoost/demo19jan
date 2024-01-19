window.onload = () => {
    let users = document.getElementById("users");
    fetch("https://localhost:7037/api/Users")
        .then(data => data.json())
        .then(jsonUsers => {
            for (let user of jsonUsers) {
                let li = document.createElement("li");
                li.innerText = user.name;
                users.appendChild(li);
            }
        })
}