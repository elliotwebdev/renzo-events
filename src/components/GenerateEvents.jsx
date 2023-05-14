import { addWeeks } from 'date-fns';

export const generateRecurringEvents = (events, numWeeks) => {
      const generatedEvents = [];
    
      for (let i = 0; i < numWeeks; i++) {
            events.forEach((event) => {
                  const start = addWeeks(event.start, i)
                  const end = addWeeks(event.end, i)
                  const eventStart = new Date(start)
                  const eventEnd = new Date(end)
                  const bgColor = event.color
                  
                  generatedEvents.push({
                        start: eventStart,
                        end: eventEnd,
                        color: bgColor
                  })
            })
      }
      
      return generatedEvents
};