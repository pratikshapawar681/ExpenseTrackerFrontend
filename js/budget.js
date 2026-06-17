async function addBudget() {

    let t = localStorage.getItem("token");

    let month =
    document.getElementById("month").value;

    let budget_amount =
    document.getElementById("budgetAmount").value;

    try {

        let res = await fetch(
            "https://expense-tracker-erip.onrender.com/budget",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + t
                },

                body: JSON.stringify({
                    month: month,
                    budget_amount: Number(budget_amount)
                })
            }
        );

        let data = await res.json();

        if (res.ok) {

            alert("Budget Saved");

            loadDashboard();

        } else {

            alert(data.detail || "Failed to save budget");

        }

    } catch (error) {

        console.log(error);

        alert("Cannot connect to backend");

    }
}