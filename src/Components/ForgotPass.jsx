import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


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
      <div>
        <form onSubmit={handleChangePass} className="bg-[rgba(0,0,0,0.5)] flex flex-col items-center gap-5 p-5 rounded-3xl border-2 border-gray-600">
          <div>
            <p className="text-white text-[40px] font-bold">QUÊN MẬT KHẨU</p>
          </div>
          <div className="w-[200px] h-[5px] rounded-xl bg-white"></div>
          <div>
            <input
              onChange={ChangeInput}
              disabled={hiddenInput.Email}
              className="h-[50px] w-[360px] rounded-2xl text-[25px] pl-3"
              placeholder="Nhập Email"
              name="Email"
            ></input>
          </div>
          <div>
            <input
              onChange={ChangeInput}
              disabled={hiddenInput.ChangePass}
              className="h-[50px] w-[360px] rounded-2xl text-[25px] pl-3"
              placeholder="Nhập mã"
              name="ConfirmCode"
            ></input>
          </div>
          <div>
            <input
              onChange={ChangeInput}
              disabled={hiddenInput.ChangePass}
              className="h-[50px] w-[360px] rounded-2xl text-[25px] pl-3"
              placeholder="Nhập mật khẩu mới"
              type="password"
              name="NewPass"
            ></input>
          </div>
          <div>
            <input
              onChange={ChangeInput}
              disabled={hiddenInput.ChangePass}
              className="h-[50px] w-[360px] rounded-2xl text-[25px] pl-3"
              placeholder="Xác nhận mật khẩu"
              type="password"
              name="ConfirmPass"
            ></input>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#458FFF] border-2 border-[#458FFF] text-[25px] text-white rounded-2xl px-3 py-1 duration-200 ease-linear hover:bg-white hover:text-[#458FFF]"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link to="/SignIn" className="bg-[#458FFF] border-2 border-[#458FFF] text-[25px] text-white rounded-2xl px-3 py-1 duration-200 ease-linear hover:bg-white hover:text-[#458FFF]">
          Quay về đăng nhập
        </Link>
      </div>
    </div>
  );
}
