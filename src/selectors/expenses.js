import moment from 'moment';

const sortExpensesBy = (expense1, expense2, sortBy) => {
    if (sortBy == "amount") {
        return (expense1.amount < expense2.amount) ? 1 : -1;
    } else if (sortBy == "date") {
        return (expense1.createdAt < expense2.createdAt) ? 1 : -1;
    }
}

export default (expenses, { text = "", sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => sortExpensesBy(a, b, sortBy))
};