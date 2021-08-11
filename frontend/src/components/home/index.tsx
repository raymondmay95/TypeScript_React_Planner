import React from "react";
import { IProps } from "../navbar";
import { NavLink, Redirect } from "react-router-dom"
import { useSelector } from "react-redux";

const Home: React.FC<IProps> = () => {
   const sessionUser = useSelector((state:any) => state.session.user);
   if (!sessionUser) return <Redirect to={`/login`} />;

   return (
   <>
      {sessionUser && (
      <div style={{display:"flex", flexDirection:"column", width:"100%", marginLeft:"2rem"}}>
         <NavLink to="/month/01">Jan</NavLink>
         <NavLink to="/month/02">Feb</NavLink>
         <NavLink to="/month/03">Mar</NavLink>
         <NavLink to="/month/04">Apr</NavLink>
         <NavLink to="/month/05">May</NavLink>
         <NavLink to="/month/06">Jun</NavLink>
         <NavLink to="/month/07">Jul</NavLink>
         <NavLink to="/month/08">Aug</NavLink>
         <NavLink to="/month/09">Sep</NavLink>
         <NavLink to="/month/10">Oct</NavLink>
         <NavLink to="/month/11">Nov</NavLink>
         <NavLink to="/month/12">Dec</NavLink>
      </div>
      )}
   </>
   )
}

export default Home
