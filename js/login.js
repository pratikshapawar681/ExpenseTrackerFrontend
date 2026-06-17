const API_URL = "https://expense-tracker-erip.onrender.com";


async function loginUser() {


    const email =
        document.getElementById("email").value;


    const password =
        document.getElementById("password").value;



    if (!email || !password) {

        alert("Fill all fields");
        return;
    }



    try {


        const response = await fetch(
            API_URL + "/login",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },


                body: JSON.stringify({

                    email: email,

                    password: password

                })

            }
        );



        const data = await response.json();



        console.log(data);



        if(response.ok){


            localStorage.setItem(
                "token",
                data.access_token
            );


            alert("Login Successful");


            window.location.href =
                "dashboard.html";


        }
        else{


            alert(data.detail);

        }



    }
    catch(error){


        console.log(error);

        alert(
          "Backend connection failed"
        );

    }

}