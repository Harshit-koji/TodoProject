
import { useEffect, useState } from "react";

export const TodoDate = ()=>{
    const [dateTime , setDateTime] = useState("");
//todo date or time var--
useEffect(()=>{
    const interval = setInterval(()=>{
        const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`)
    // console.log("hey")
    },
    1000);
    return ()=> clearInterval(interval);
},[]);

    return  <h2 className="date-time text-light  ">{dateTime}</h2>
}