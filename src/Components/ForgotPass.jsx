import axios from "axios";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


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
        <div class="bg-black bg-opacity-30 p-6 rounded-3xl w-96 items-center">
          <h2 class="text-white font-bold text-center text-2xl mb-2 ">QUÊN MẬT KHẨU</h2>
          <div class="border-t-8 border-[#FFFFFF] mb-12 rounded-full w-[255px] mx-auto"></div>
          <form onSubmit={handleChangePass} class="flex flex-col items-center">
            <div class="mb-4 ">
              <input
                class=" h-[50px] p-3 text-white  rounded-2xl"
                type="email"
                name='email'
                placeholder="Email"
                onChange={ChangeInput}
              />
            </div>
            <div class="mb-4 ">
              <input
                class=" h-[50px] p-3 text-white  rounded-2xl"
                type="password"
                name=''
                placeholder="Nhập mã"
                onChange={ChangeInput}
              />
            </div>
            <div class="mb-4 ">
              <input
                class=" h-[50px] p-3 text-white  rounded-2xl"
                type="password"
                name='matKhau'
                placeholder="Mật khẩu mới"
                onChange={ChangeInput}
              />
            </div>
            <div class="mb-4 ">
              <input
                class=" h-[50px] p-3 text-white  rounded-2xl"
                type="password"
                name='matKhau'
                placeholder="Xác nhận lại mật khẩu"
                onChange={ChangeInput}
              />
            </div>
            <div class="mb-6">
              <button
                class="w-[150px] p-3 bg-[#458FFF] text-white rounded-3xl mt-11 font-bold"
                type="submit"
              >
                Xác nhận
              </button>
            </div>
          </form>
        </div>
          <Link to="/SignIn" class=" flex w-[380px]  justify-center  bg-[#7CD0FF]  rounded-3xl p-3 mt-6 ">
            Đăng nhập
          </Link>
      </div>
    </div>
  );
}
