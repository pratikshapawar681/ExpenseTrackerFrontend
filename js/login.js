async function loginUser() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    if (email === "" || password === "") {
        alert("Fill all fields");
        return;
    }


    try {

        const response = await fetch(
            API_URL + "/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },

                body: new URLSearchParams({
                    username: email,
                    password: password
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


            window.location.href =
                "dashboard.html";


        } else {

            alert(
                data.detail ||
                "Invalid email or password"
            );
        }


    } catch (error) {

        console.log(error);

        alert("Unable to connect to server");
    }
}