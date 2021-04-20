import React from 'react';

export const EditExpensePage = (props) => {
    console.log(props)
    return <div>
        Editing the expense with id = {props.match.params.id}
        <button onClick={props.history.goBack}>back</button>
    </div>
};