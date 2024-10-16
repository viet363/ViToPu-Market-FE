import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
export default function User({ Componnent }) {
  const [User, setUser] = useState({});
    const inforUser = () => {
        const ID = window.localStorage.getItem("ID")
        axios.post("http://localhost:9000/Client/GetInfor", { ID: ID}).then(rs => {
          if(rs.data.Status !== "False"){
            setUser(rs.data)
          }
        }).catch(err => {
          console.log(err)
        })
    }
  return <UserContext.Provider value={{User, inforUser}}>{Componnent}</UserContext.Provider>;
}
