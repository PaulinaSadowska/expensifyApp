
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expense1, expense2) => {
        if(sortBy == "amount"){
            return (expense1.amount < expense2.amount) ? 1 : -1;
        } else if(sortBy == "date"){
            return (expense1.createdAt < expense2.createdAt) ? 1 : -1;
        }
    })
};