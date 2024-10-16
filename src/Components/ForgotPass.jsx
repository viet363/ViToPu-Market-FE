import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const [user, setUser] = useState({
    Email: "",
    Code: 0,
    ConfirmCode: 0,
    NewPass: "",
    ConfirmPass: "",
  });
  const [hiddenInput, sethiddenInput] = useState({
    Email: false,
    ChangePass: true,
  });

  const ChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const Navigate = useNavigate()

  const handleChangePass = (e) => {
    e.preventDefault();
    if (!hiddenInput.Email) {
      axios
        .post("http://localhost:9000/Client/SendCode", { Email: user.Email })
        .then((rs) => {
          if (rs.data.Status === "Not Found") {
            alert("Mail không tồn tại!");
          } else {
            sethiddenInput({
              Email: true,
              ChangePass: false,
            });
            setUser({ ...user, Code: rs.data.Code });
          }
        }).catch(err => {
            console.log(err)
          });
    } else {
      if (user.ConfirmPass === user.NewPass) {
        axios
          .post("http://localhost:9000/Client/ChangePass", user)
          .then((rs) => {
            window.localStorage.setItem("ID", rs.data.ID)
            Navigate("/")
          }).catch(err => {
            console.log(err)
          });
      }
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center -translate-y-[80px] gap-3">
      
    </div>
  );
}
