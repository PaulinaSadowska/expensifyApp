
export default (expenses) => {
    return (expenses.length>0) ? sumNonEmptyExpenses(expenses) : 0
};

const sumNonEmptyExpenses = (expenses) => {
   return expenses.map(expense => expense.amount).reduce((sum, value)=> sum + value)
}