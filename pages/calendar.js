import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Base from '../modules/Base';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class calendar extends React.Component {
  render() {
    return(
      <div>
        <Base title="Calendar"/>
        <BigCalendar
          events={[]}
          startAccessor='startDate'
          endAccessor='endDate'
        />
    </div>
    );
  }
}

export default calendar;
