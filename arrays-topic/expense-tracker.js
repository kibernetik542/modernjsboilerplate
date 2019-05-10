const account = {
    name: 'Kama Milanka',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has a balance $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}


account.addExpense('Rent', 380)
account.addExpense('Albert', 5)
account.addIncome('Job', 2000)
console.log(account.getAccountSummary())