import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";

const NavBarStyles = {
   backgroundColor: "eee",
   height: "28px",
   fontSize: "20px",
   lineHeight:"26px",
   display: "flex",
   justifyContent: "space-around",
   alignItems: "center"
}

export interface IProps {
   isLoaded: boolean
   setIsLoaded: (a:boolean) => void
}

const NavBar: React.FC<IProps> = ({isLoaded, setIsLoaded}) => {
   const dispatch = useDispatch()

   const {user} = useSelector((state:any)=>state.session)

   const logOut = async () => {
      await dispatch(sessionActions.logout())
      setIsLoaded(false)
   }


   return <>
      {isLoaded && user ?
         <div style={NavBarStyles}>
            <NavLink to="/login" onClick={logOut} >
               <p>
                  Log Out
               </p>
            </NavLink>
         </div> : null
      }
   </>
}

export default NavBar
