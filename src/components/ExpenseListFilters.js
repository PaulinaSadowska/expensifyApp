import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {

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
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onTextFilterChanged = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortByChanged = (e) => {
        if (e.target.value == "amount") {
            this.props.sortByAmount()
        } else if (e.target.value == "date") {
            this.props.sortByDate()
        }
    }

    render() {
        return <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Search expenses"
                        value={this.props.filters.text}
                        onChange={this.onTextFilterChanged} />
                </div>
                <div className="input-group__item">
                    <select
                        className="select"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortByChanged}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
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
                        showClearDates={true} />
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (textFilter) => dispatch(setTextFilter(textFilter)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);