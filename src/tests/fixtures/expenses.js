import moment from 'moment'

export const now = moment("12-25-2005", "MM-DD-YYYY")
export const expenses = [
    {
        id: "1",
        description: 'Gum',
        note: "",
        amount: 195,
        createdAt: now.valueOf()
    },
    {
        id: "2",
        description: 'Rent',
        note: "",
        amount: 109500,
        createdAt: now.clone().subtract(4, 'd').valueOf()
    },
    {
        id: "3",
        description: 'Credit card',
        note: "",
        amount: 4500,
        createdAt: now.clone().add(4, 'd').valueOf()
    }
];