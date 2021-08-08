import React from "react";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom"

const Daily: React.FC = () => {
   const { day } = useParams<{day:string}>()
   const user = useSelector((state:{session: {user: {}}})=>state.session.user)
   console.log(user)
   //TODO: create a day view
   return <></>
}

export default Daily
