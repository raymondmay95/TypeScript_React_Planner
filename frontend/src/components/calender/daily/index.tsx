import React from "react";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { eventsInterface } from "../../../store/events";

const Daily: React.FC = () => {
   const { day } = useParams<{day:string}>()
   const {user} = useSelector((state:{session: {user: {}}})=>state.session)
   const event = useSelector((state:{events: {event: eventsInterface}})=>state.events)
   console.log(event)
   //TODO: create a day view
   return (
   <>
      <div id="calender_daily">
         <fieldset>
            <legend title="Daily_Calender">Daily Calender</legend>
            <div className={`day day_${day}`}>
               <div>Data goes here...</div>
            </div>
         </fieldset>
      </div>
   </>
   )
}

export default Daily
