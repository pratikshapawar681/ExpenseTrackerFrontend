
function token(){

return localStorage.getItem("token");

}




async function loadDashboard(){


let t=token();



if(!t){

window.location.href="login.html";

return;

}



let res=await fetch(
API_URL+"/dashboard",
{

headers:{

Authorization:"Bearer "+t

}

});



let data=await res.json();



document.getElementById("totalBudget")
.innerHTML="₹ "+data.total_budget;



document.getElementById("totalExpense")
.innerHTML="₹ "+data.total_expense;



document.getElementById("remaining")
.innerHTML="₹ "+data.remaining;






loadExpenses();

loadBudgets();


}





async function loadExpenses(){


let res=await fetch(
API_URL+"/expenses-list",
{

headers:{

Authorization:"Bearer "+token()

}

});


let data=await res.json();


let html="";


data.forEach(e=>{


html += `

<p>

${e.title}
-
₹${e.amount}
-
${e.category}

</p>

`;

});


document.getElementById(
"expenseList"
).innerHTML=html;


}







async function loadBudgets(){


let res=await fetch(
API_URL+"/budgets-list",
{

headers:{

Authorization:"Bearer "+token()

}

});



let data=await res.json();


let html="";


data.forEach(b=>{


html += `

<p>

${b.month}
-
₹${b.budget_amount}

</p>

`;

});


document.getElementById(
"budgetList"
).innerHTML=html;


}




function logout(){

localStorage.removeItem("token");

window.location.href="login.html";

}





function showExpenses(){

document
.getElementById("expenseSection")
.scrollIntoView();

}



function showBudget(){

document
.getElementById("budgetSection")
.scrollIntoView();

}



window.onload=loadDashboard;