import React, { useEffect, useState } from "react";
import "./calender.css"
import { useSelector } from "react-redux";
import { eventsInterface } from "../../../store/events";
import { useParams } from "react-router";
import {v4 as randomKey} from "uuid"

const Monthly: React.FC = () => {
   const [renderedEvents, setRenderedEvents] = useState<eventsInterface[]>([])
   const __events = useSelector((state:{events: eventsInterface[]})=>state.events)
   const { month }: { month: string } = useParams()

   useEffect(()=>{

      function grabEvents() {
         let holder: eventsInterface[] = []
         __events.forEach((event) => {
            if (event && event.updatedAt) {
               const _month = event.updatedAt.split("T")[0].split("-")[1]
               if (_month === month) {
                  holder.push(event)
               }
            }
         })
         setRenderedEvents(holder)
      }
      grabEvents()
   }, [__events, month])
   return (
   <>
      <ul>
         {renderedEvents.map(event=><li key={randomKey()}>{event.updatedAt && event.description ? event.updatedAt.split("T")[0] + " " + event.description : null}</li>)}
      </ul>
   </>
   )
}

export default Monthly
