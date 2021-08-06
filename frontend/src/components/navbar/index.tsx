import React, {useState} from "react";
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
   enum viewSizes {
      "daily",
      "weekly",
      "monthly"
   }
   //TODO: put and dispatch view from redux store.
   const [view, setView] = useState(viewSizes["daily"])

   const {user} = useSelector((state:any)=>state.session)

   const handleChange = (e:any) => {
      e.preventDefault()
      setView(e.target.value)
   }
   const logOut = async () => {
      await dispatch(sessionActions.logout())
   }


   return <>
      {isLoaded && user ?
         <div style={NavBarStyles}>
            <div onClick={logOut} >Log Out</div>
            <form>
               <select name="viewSelector" id="viewSelector" onChange={handleChange}>
                  <option value={viewSizes["daily"]}>{viewSizes[0]}</option>
                  <option value={viewSizes["weekly"]}>{viewSizes[1]}</option>
                  <option value={viewSizes["monthly"]}>{viewSizes[2]}</option>
               </select>
            </form>
         </div> : null
      }
   </>
}

export default NavBar
