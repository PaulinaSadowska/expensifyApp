import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: undefined
    }

    onFocusChange = (focused) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }

    onDatesChanged = ({ startDate, endDate }) => {
        console.log(startDate)
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    render() {
        return <div>
            <input
                type="text"
                value={this.props.filters.text}
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
            <select
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    if (e.target.value == "amount") {
                        this.props.dispatch(sortByAmount())
                    } else if (e.target.value == "date") {
                        this.props.dispatch(sortByDate())
                    }
                }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChanged}
                focusedInput={this.state.calendarFocused}
                startDateId="startId1"
                endDateId="endId1"
                onFocusChange={this.onFocusChange}
                numberOfMonths={2}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);