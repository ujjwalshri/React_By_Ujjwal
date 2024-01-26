import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function(){
    return (
        <>
       < Header/>
       <Outlet/>
       <h1 className="fixed bottom-0 left-0 right-0 bg-gray-300 p-4 flex justify-center"> footer</h1>
       </>
    )
}