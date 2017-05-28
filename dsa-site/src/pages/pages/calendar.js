import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Layout from '../modules/Layout';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class calendar extends React.Component {
  render() {
    return(
      <div>
        <Layout>
          <BigCalendar
            events={[]}
            startAccessor='startDate'
            endAccessor='endDate'
          />
        </Layout>
    </div>
    );
  }
}

export default calendar;
