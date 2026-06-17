async function addExpense() {

    let t = localStorage.getItem("token");

    let title =
        document.getElementById("title").value;

    let amount =
        document.getElementById("amount").value;

    let category =
        document.getElementById("category").value;

    let res = await fetch(
        API_URL + "/expenses",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + t
            },

            body: JSON.stringify({
                title: title,
                amount: Number(amount),
                category: category
            })
        }
    );

    let data = await res.json();

    console.log(data);

    alert("Expense Added");

    loadDashboard();
}