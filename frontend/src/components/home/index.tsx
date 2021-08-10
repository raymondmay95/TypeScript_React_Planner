import React from "react";
import { IProps } from "../navbar";
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux";

const Home: React.FC<IProps> = () => {
   const sessionUser = useSelector((state:any) => state.session.user);
   if (!sessionUser) return <Redirect to={`/login`} />;

   return (
   <>
      {sessionUser && <div>Hello</div>}
   </>
   )
}

export default Home
