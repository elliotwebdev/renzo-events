import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US'
import {academies} from './components/Academies'
import {generateRecurringEvents} from './components/GenerateEvents'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales: enUS
});

const App = () => {

      const [selectedLocation, setSelectedLocation] = useState(null)
      const [events, setEvents] = useState([])

      const handleShowEvents = (location) => {
           
            const generatedEvents = []
              
            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  
                  classEvents.forEach((event) => {
                        generatedEvents.push(...generateRecurringEvents([event], 52).map((event) => ({
                              ...event,
                              title: `${className}`
                              
                              }))
                        )
                  })
            })
            setEvents(generatedEvents)
            setSelectedLocation(location)
          };
          
      const minTime = new Date(2023, 0, 1, 6, 0, 0)
      const maxTime = new Date(2023, 0, 1, 21, 0, 0)
  
      return (
      <div>
            <div>
                  <button onClick={() => handleShowEvents("Houston")}>
                  Show Houston Events
                  </button>
                  <button onClick={() => handleShowEvents("Grove")}>
                  Show Grove Events
                  </button>
            </div>
            
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
                  // eventPropGetter={eventStyleGetter}
                  
            />
            </div>
            
      </div>
      )
}

export default App;
