import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import './Calendar.css'
import useCalender from '../../store/Calender';
import {createEventId} from "../../data/data";
/*eslint-disable no-restricted-globals*/

export default function Calendar() {

  const {currentEvents, setCurrentEvents} = useCalender();
  
  const handleEvents=async(events)=>{
    await Promise.resolve(setCurrentEvents(events))
  }
  const handleDataSelect=(selectInfo)=>{
    let title=prompt("Please enter the title for event");
    let calenderApi=selectInfo.view.calendar;
    calenderApi.unselect();
    if(title){
      calenderApi.addEvent({
        id:createEventId(),
        title,
        start:selectInfo.start,
        end:selectInfo.end,
        allDay:selectInfo.allDay
      })
    }
  }
  const handleEventClick=(clickInfo)=>{
    if(
      confirm("Are you sure you want to delete it?")
    ){
      clickInfo.event.remove();
    }
  }

  return (
    <div className="calender-container">
      <div>
        <FullCalendar
          plugins={[dayGridPlugin,
            interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: "dayGridMonth, timeGridWeek, timeGridDay"
          }}
          allDaySlot={false}
          initialView='timeGridWeek'
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          datMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={
            currentEvents
          }
          eventsSet={handleEvents}
          select={handleDataSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  )
}

