const API = "https://expense-tracker-erip.onrender.com";

async function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        const response = await fetch(
            `${API}/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok && data.access_token) {

            localStorage.setItem(
                "token",
                data.access_token
            );

            alert("Login Successful");

            window.location =
                "dashboard.html";

        } else {

            alert(
                data.detail ||
                "Login Failed"
            );

        }

    } catch (error) {

        console.log(error);

        alert("Cannot connect to backend");

    }
}