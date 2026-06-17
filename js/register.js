async function registerUser() {

    const username =
        document.getElementById("username").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    if (
        username === "" ||
        email === "" ||
        password === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(
            API_URL + "/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            }
        );

        const data =
            await response.json();

        if (response.ok) {

            alert(
                "Registration Successful"
            );

            window.location.href =
                "login.html";

        } else {

            alert(
                data.detail ||
                "Registration failed"
            );
        }

    } catch (error) {

        console.log(error);

        alert(
            "Cannot connect to server"
        );
    }
}