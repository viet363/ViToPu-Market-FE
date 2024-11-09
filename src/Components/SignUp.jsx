import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const currentDay = new Date();
  const [dataUser, setDataUser] = useState({
    hoVaTen: "",
    gioiTinh: "",
    diaChi: "",
    email: "",
    matKhau: "",
    xacNhanMatKhau: "",
    loaiAnh: "",
  });
  const [ngay, setNgay] = useState({
    ngay: currentDay.getDate(),
    thang: currentDay.getMonth() + 1,
    nam: currentDay.getFullYear(),
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      setSelectedImage(file);
      setDataUser({ ...dataUser, loaiAnh: fileExtension });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const ChangeInput = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const ChangeDate = (e) => {
    const { name, value } = e.target;
    setNgay({ ...ngay, [name]: value });
  };

  const ChangeInputDate = (e) => {
    const { name, value } = e.target;
    let newDate;
    if (name === "ngay") {
      newDate = new Date(ngay.nam, ngay.thang - 1, value);
    } else if (name === "thang") {
      newDate = new Date(ngay.nam, value - 1, ngay.ngay);
    } else {
      if (value <= 1950) {
        newDate = new Date(1950, ngay.thang - 1, ngay.ngay);
      } else {
        newDate = new Date(value, ngay.thang - 1, ngay.ngay);
      }
    }
    setNgay({
      ngay: newDate.getDate(),
      thang: newDate.getMonth() + 1,
      nam: newDate.getFullYear(),
    });
  };

  const Navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (dataUser.matKhau !== dataUser.xacNhanMatKhau) {
      alert("Mật khẩu không trùng nhau!");
    } else {
      const ngaySinh = new Date(ngay.nam, ngay.thang - 1, ngay.ngay);
      const fd = new FormData();
      fd.append("DataImage", selectedImage);
      fd.append("hoVaTen", dataUser.hoVaTen);
      fd.append("gioiTinh", dataUser.gioiTinh);
      fd.append("diaChi", dataUser.diaChi);
      fd.append("email", dataUser.email);
      fd.append("matKhau", dataUser.matKhau);
      fd.append("loaiAnh", dataUser.loaiAnh);
      fd.append("ngaySinh", ngaySinh);
      axios
        .post("http://localhost:9000/Client/SignUp", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((rs) => {
          if (rs.data.Status === "False") {
            alert("Tài khoản này đã được tạo!");
          } else if (rs.data.Status === "Not Found") {
            alert("Dịa chỉ Email này không tồn tại!");
          } else {
            window.localStorage.setItem("ID", rs.data.ID);
            Navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" >
      <div class="bg-[#253133] bg-opacity-70 rounded-lg p-8 w-[1150px] h-[700px] flex flex-col justify-center items-center">
        <div class="text-center mb-8 ">
          <h2 class="text-2xl font-bold text-center  text-white">ĐĂNG KÝ</h2>
          <div class="border-t-8 mt-3 border-[#e5e5e5] rounded-full w-[255px]"></div>
        </div>
        <div class="flex w-full justify-center items-center ml-20">
          {/* Ảnh đại diện */}
          <div class="w-1/3 flex flex-col items-center">
            <div class="relative mb-8">
              <button class="bg-gray-200 rounded-full flex items-center justify-center w-[300px] h-[300px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[220px] h-[220px] text-gray-500" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              </button>
              {/* input file */}
              <div class=" overflow-hidden absolute bg-white w-[75px] h-[75px] rounded-full flex items-center justify-center right-[-10px] bottom-[-40px]">
                <input type="file" class="absolute  rounded-full opacity-0 cursor-pointer" />
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px]" viewBox="0 0 512 512" fill="blue">
                  <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-[10px] h-[500px] bg-[#00D1FF] rounded-full ml-24 "></div>
          {/* Form đăng ký */}
          <div class="w-1/2">
            <form class="space-y-4 flex-col w-[450px] ml-20 ">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  class="mt-1 w-full border border-gray-300 rounded-2xl p-2"
                  name="hoVaTen"
                  onBlur={ChangeInput}
                  required
                />
              </div>
              <div class="flex items-center space-x-4 mt-1 text-black">
                <div class="flex justify-center items-center w-[155px] h-[55px] bg-white rounded-2xl">
                  Ngày sinh
                </div>
                <input
                  type="number"
                  id="birthDateDay"
                  class="w-16 p-2 text-center rounded-full border border-gray-300 "
                  name="ngay"
                  value={ngay.ngay}
                  required
                  onChange={ChangeDate}
                  onBlur={ChangeInputDate}
                />
                <span class="text-[40px] font-bold text-white ">/</span>
                <input
                  type="number"
                  id="birthDateMonth"
                  class="w-16 p-2 text-center rounded-full border border-gray-300  "
                  name="thang"
                  value={ngay.thang}
                  required
                  onChange={ChangeDate}
                  onBlur={ChangeInputDate}
                />
                <span class="text-[40px] font-bold text-white ">/</span>
                <input
                  type="number"
                  id="birthDateYear"
                  class="w-20 p-2 text-center rounded-full border border-gray-300 "
                  name="nam"
                  value={ngay.nam}
                  required
                  onChange={ChangeDate}
                  onBlur={ChangeInputDate}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Địa chỉ"
                  class="mt-1 w-full border border-gray-300 rounded-2xl p-2"
                  name="diaChi"
                  onChange={ChangeInput}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  class="mt-1 w-full border border-gray-300 rounded-2xl p-2"
                  name="email"
                  onChange={ChangeInput}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  class="mt-1 w-full border border-gray-300 rounded-2xl p-2"
                  name="matKhau"
                  onChange={ChangeInput}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  name="xacNhanMatKhau"
                  class="mt-1 w-full border border-gray-300 rounded-2xl p-2"
                  onChange={ChangeInput}
                  required
                />
              </div>
              <div class="flex items-center space-x-16 mt-1 text-black">
                <div class="flex justify-center items-center w-[155px] h-[55px] bg-white rounded-2xl">
                  Giới tính
                </div>
                <label class="flex justify-center items-center w-[95px] h-[55px] bg-white rounded-2xl cursor-pointer ">
                  <input
                    type="radio"
                    name="gioiTinh"
                    value="Nam"
                    class="hidden peer"
                    onChange={ChangeInput}
                    required
                  />
                  <span class="peer-checked:bg-blue-500 peer-checked:text-white w-full h-full flex justify-center items-center rounded-2xl">
                    Nam
                  </span>
                </label>
                <label class="flex justify-center items-center w-[95px]  h-[55px] bg-white rounded-2xl cursor-pointer">
                  <input
                    type="radio"
                    name="gioiTinh"
                    value="Nu"
                    class="hidden peer"
                    required
                    onChange={ChangeInput}
                  />
                  <span class="peer-checked:bg-pink-500 peer-checked:text-white w-full h-full flex justify-center items-center rounded-2xl">
                    Nữ
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center  w-[150px] mt-5  ">
          <button type="submit" class="w-full bg-[#458FFF] text-white font-semibold py-2 rounded-3xl ">
            Xác nhận
          </button>
        </div>
      </div>
      <div class="text-center mt-14">
        <a href="/SignIn" class="w-[350px] p-3 bg-[#7CD0FF] text-center rounded-3xl">
          Đăng nhập nếu đã có tài khoản
        </a>
      </div>
    </div>
  );
}
