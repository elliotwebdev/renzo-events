import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { eachWeekOfInterval, addWeeks } from 'date-fns';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: enUS
});


const initialEvent = 
  {
    start: new Date(2023, 4, 2, 10, 30),
    end: new Date(2023, 4, 2, 12, 30),
    title: 'Test Event'
  }


const generateRecurringEvents = (startDate, endDate, numWeeks) => {
  const events = [];

  const weeks = eachWeekOfInterval({ start: startDate, end: endDate });

  for (let i = 0; i < numWeeks; i++) {
    const start = addWeeks(startDate, i );
    const end = addWeeks(endDate, i );

      weeks.forEach(() => {
        
        const eventStart = new Date(start);
    
        const eventEnd = new Date(end);
    
        events.push({
          start: eventStart,
          end: eventEnd,
          title: initialEvent.title,
        });

      });
  
  }
  return events;
};

const App = () => {

  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([]);

  const handleShowEvents = () => {
    if (showEvents) {
      setEvents([]);
    } else {
      setEvents(generateRecurringEvents(
        initialEvent.start,
        initialEvent.end,
        52 // number of weeks to generate events for
      ));
    }
    setShowEvents(!showEvents);
  };


 

  const minTime = new Date(2023, 0, 1, 6, 0, 0)
  const maxTime = new Date(2023, 0, 1, 22, 0, 0)
  
  return (
    <div>
      <button onClick={handleShowEvents}>{showEvents ? 'Hide Events' : 'Show Events'}</button>
        {showEvents && (
        <div style={{ height: '100vh' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%', width: "100%" }}
            views={['day', 'week', 'agenda']}
            defaultView="day"
            min={minTime}
            max={maxTime}
          />
        </div>
    )}
  </div>
  )
}

export default App;
