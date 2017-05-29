import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Layout from '../modules/Layout';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends React.Component {
  render() {
    return(
      <div style={{ height: '75vh'}}>
        <BigCalendar
          events={this.props.events}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    );
  }
}

export default Calendar;
