const incomes = [
    new Income("Salary", 2100.00),
    new Income("Car sale", 1500.00)
];

const expenses = [
    new Expense("Apartment rent", 900.00),
    new Expense("Clothes", 400.00)
];

let loadApp = () => {
    loadHeader();
    loadIncomes();
    loadExpenses();
}

let totalIncomes = () => {
    let totalIncome = 0;
    for (let income of incomes){
        totalIncome += income.value; //calling the get value function
    }
    return totalIncome;
}

let totalExpenses = () => {
    let totalExpense = 0;
    for (let expense of expenses){
        totalExpense += expense.value;
    }
    return totalExpense;
}

let loadHeader = () => {
    let budget = totalIncomes() - totalExpenses();
    let percent = totalExpenses() / totalIncomes();
    document.getElementById("budget").innerHTML = coinFormat(budget);
    document.getElementById("percent").innerHTML = percentFormat(percent);
    document.getElementById("incomes").innerHTML = coinFormat(totalIncomes());
    document.getElementById("expenses").innerHTML = coinFormat(totalExpenses());

}

//function to convert the number into currency
const coinFormat = (value) =>{
    return value.toLocaleString('en-US',{
        style:'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

//function to convert the number into a percentage
const percentFormat = (value) =>{
    return value.toLocaleString('en-US',{
        style:'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

//other way to to convert the decimal number into a percentage, with two decimals
function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
}

const loadIncomes = () => {
    let incomesHTML ='';
    for (let income of incomes){
        incomesHTML += createHTMLIncome(income);
    }
    document.getElementById('list-incomes').innerHTML = incomesHTML;
}

//using template string to add the html content
const createHTMLIncome = (income) => {
    let incomeHTML = `
        <div class="element cleanStyles">
            <div class="element_description">${income.description}</div>
            <div class="right cleanStyles">
                <div class="element_value">+ ${coinFormat(income.value)}</div>
                <div class="element_remove">
                    <button class="element_remove--btn">
                        <ion-icon name="skull-sharp" onclick='removeIncome(${income.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return incomeHTML;
}

const removeIncome = (id) => {
    //a little function to find the index for the element to remove on the array
    let index = incomes.findIndex( income =>{
        income.id === id;
    });
    incomes.splice(index, 1); //using the splice function to remove the element, removing  element from this index
    loadHeader();
    loadIncomes();
}

const loadExpenses = () => {
    let expensesHTML ='';
    for (let expense of expenses){
        expensesHTML += createHTMLExpense(expense);
    }
    document.getElementById('list-expenses').innerHTML = expensesHTML;
}

//using template string to add the html content
const createHTMLExpense = (expense) => {
    let expenseHTML = `
        <div class="element cleanStyles">
            <div class="element_description">${expense.description}</div>
            <div class="right cleanStyles">
                <div class="element_value">- ${coinFormat(expense.value)}</div>
                <div class="element_percent">${percentFormat(expense.value/totalExpenses())}</div>
                <div class="element_remove">
                    <button class="element_remove--btn">
                        <ion-icon name="skull-sharp" onclick='removeExpense(${expense.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return expenseHTML;
}

const removeExpense = (id) => {
    //a little function to find the index for the element to remove on the array
    let index = expenses.findIndex( expense =>{
        expense.id === id;
    });
    expenses.splice(index, 1); //using the splice function to remove the element
    loadHeader();
    loadExpenses();
}

//reading the form and adding the new content
//to make the string value a number there are two options, using tyhe function <Number(value.value)> or <+value.value>
let addData = () => {
    let forma = document.forms['forma'];//taking our form from the forms array
    console.log(forma);
    let type = forma['type'];
    let description = forma['description'];
    let value = forma['value'];
    if(description.value !=='' && value.value !==''){
        if(type.value ==='income'){
            incomes.push(new Income(description.value, Number(value.value)));
            loadHeader();
            loadIncomes();
        }else if(type.value === 'expense'){
            expenses.push(new Expense(description.value, +value.value));
            loadHeader();
            loadExpenses();
        }
    }
}