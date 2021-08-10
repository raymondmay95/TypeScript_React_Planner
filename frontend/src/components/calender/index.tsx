import React from "react";
import "./calender.css"
import {dateInterface} from "../../utils/dateUtils"

// interface CalProps {
//    sessionUser: {
//       email: string,
//       id: number,
//       username: string
//    };
//    date?: dateInterface;
//    month: number | string;
//    day: number | string;
//    year: number | string;
//    numberOfDays: number | string
// }

const Calender: React.FC = () => {
   // const {email, id, username} = sessionUser
   return (
   <>
      <div id="calender">
         <div className="month">
            <div className="W_1 week">
               <div className="D_1 day" id="day_1">Sun</div>
               <div className="D_2 day" id="day_2">Mon</div>
               <div className="D_3 day" id="day_3">Tues</div>
               <div className="D_4 day" id="day_4">Wed</div>
               <div className="D_5 day" id="day_5">Thurs</div>
               <div className="D_6 day" id="day_6">Fri</div>
               <div className="D_7 day" id="day_7">Sat</div>
            </div>
            <div className="W_2 week">
               <div className="D_1 day" id="day_8">Sun</div>
               <div className="D_2 day" id="day_9">Mon</div>
               <div className="D_3 day" id="day_10">Tues</div>
               <div className="D_4 day" id="day_11">Wed</div>
               <div className="D_5 day" id="day_12">Thurs</div>
               <div className="D_6 day" id="day_13">Fri</div>
               <div className="D_7 day" id="day_14">Sat</div>
            </div>
            <div className="W_3 week">
               <div className="D_1 day" id="day_15">Sun</div>
               <div className="D_2 day" id="day_16">Mon</div>
               <div className="D_3 day" id="day_17">Tues</div>
               <div className="D_4 day" id="day_18">Wed</div>
               <div className="D_5 day" id="day_19">Thurs</div>
               <div className="D_6 day" id="day_20">Fri</div>
               <div className="D_7 day" id="day_21">Sat</div>
            </div>
            <div className="W_4 week">
               <div className="D_1 day" id="day_22">Sun</div>
               <div className="D_2 day" id="day_23">Mon</div>
               <div className="D_3 day" id="day_24">Tues</div>
               <div className="D_4 day" id="day_25">Wed</div>
               <div className="D_5 day" id="day_26">Thurs</div>
               <div className="D_6 day" id="day_27">Fri</div>
               <div className="D_7 day" id="day_28">Sat</div>
            </div>
         </div>
      </div>
   </>
   )
}

export default Calender
