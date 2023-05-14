import React from 'react';
import { Calendar } from 'react-big-calendar';
import { RRule } from 'rrule';
import { startOfWeek, addDays, } from 'date-fns';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = {
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS }
};

const RecurringEventCalendar = () => {
  // Create a recurring event every Monday, Wednesday, and Friday from 12-1 PM
  const rrule = new RRule({
    freq: RRule.WEEKLY,
    interval: 1,
    byweekday: [RRule.MO, RRule.WE, RRule.FR],
    dtstart: new Date(2023, 4, 1, 12, 0),
    until: new Date(2023, 5, 1, 13, 0)
  });

  // Convert the recurring event to individual occurrences
  const events = rrule.all().map((date) => ({
    title: 'Recurring Event',
    start: date,
    end: addDays(date, 1),
  }));

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default RecurringEventCalendar;
