import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();
export default function User({ Componnent }) {
  const [User, setUser] = useState({});
  const [shop, setShop] = useState({});
  const [shopPreview, setShopPreview] = useState({});
  const inforUser = () => {
    const ID = window.localStorage.getItem("ID");
    axios
      .post("http://localhost:9000/Client/GetInfor", { ID: ID })
      .then((rs) => {
        if (rs.data.Status !== "False") {
          setUser(rs.data);
          window.localStorage.setItem("IDU", rs.data.user.maKhachHang);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkShop = () => {
    const IDU = window.localStorage.getItem("IDU");
    axios
      .post("http://localhost:9000/CuaHang/CheckShop", { IDU: IDU })
      .then((rs) => {
        if (rs.data.Status === "Success") {
          setShop(rs.data.shop);
          window.localStorage.setItem("IDS", rs.data.shop._id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inforShop = () => {
    const IDSP = window.localStorage.getItem("IDSP");
    axios
      .post("http://localhost:9000/CuaHang/InforShop", { IDSP: IDSP })
      .then((rs) => {
        if (rs.data.Status === "Success") {
          setShopPreview(rs.data.shop);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{ User, inforUser, shop, checkShop, shopPreview, inforShop }}
    >
      {Componnent}
    </UserContext.Provider>
  );
}
