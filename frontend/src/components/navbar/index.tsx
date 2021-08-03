import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

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
   }

   return <>
      {isLoaded && user ?
         <div style={NavBarStyles}>
            <div onClick={logOut} >Log Out</div>
         </div> : null
      }
   </>
}

export default NavBar
