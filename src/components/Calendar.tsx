'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useRouter } from 'next/navigation'  // Add this import

export default function Calendar({events}: {events: any[]}) {
  const router = useRouter()
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
      headerToolbar={
        {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        }
      }
      eventClick={(info) => {
        router.push(`/list/lessons/${info.event.id}`)
      }}
      
      initialView="dayGridMonth"
      events={events}
      editable={true}
    />
  )
}