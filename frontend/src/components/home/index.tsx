import React from "react";
import { AppProps } from "../../App";
import { IProps } from "../navbar";
import { Redirect } from "react-router-dom"

const Home: React.FC<IProps & AppProps> = ({isLoaded, setIsLoaded, useAppDispatch, useAppSelector}) => {
   const sessionUser = useAppSelector((state:any) => state.session.user);
   if (!sessionUser) return <Redirect to={`/login`} />;

   return (
   <>
      <div>Hello</div>
   </>
   )
}

export default Home
