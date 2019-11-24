let myAccount = {
    name: 'Gulshan',
    expenses: 0,
    income: 0
};

const addExpenses = function(account, amount){
    account.expenses = account.expenses + amount;
};

const addincome = function(account, income){
    account.income = account.income + income;
};

const resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
};

const getAccountSummary = function(account){
    return `${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`;
};

addincome(myAccount, 100);
addExpenses(myAccount, 10);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));