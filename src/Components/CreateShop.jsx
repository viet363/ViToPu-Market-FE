import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "../Data/User";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateShop() {
  const { User, inforUser } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [shop, setShop] = useState({
    tenCuaHang: "",
    diaChi: "",
    loaiAnh: "",
    maKhachHang: "",
  });
  const inputFile = useRef(null);

  useEffect(() => {
    inforUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (User.user) {
      setShop({ ...shop, maKhachHang: User.user.maKhachHang });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [User]);

  const ChangeInput = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      setSelectedImage(file);
      setShop({ ...shop, loaiAnh: fileExtension });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickInput = () => {
    inputFile.current.click();
  };

  const Navigate = useNavigate()

  const handleCreateShop = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("DataImage", selectedImage);
    fd.append("tenCuaHang", shop.tenCuaHang);
    fd.append("diaChi", shop.diaChi);
    fd.append("maKhachHang", shop.maKhachHang);
    fd.append("loaiAnh", shop.loaiAnh);
    axios.post("http://localhost:9000/CuaHang/CreateShop", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(rs => {
      if(rs.data.Status === "Success"){
        window.localStorage.setItem("IDS", rs.data.maCuaHang)
        window.localStorage.setItem("IDSP", rs.data.maCuaHang)
        Navigate("/PageShop")
      }
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div class="flex items-center justify-center w-full h-full bg-gradient-cloud">
      <div className="w-[80%] flex bg-[rgba(242,244,255,0.65)] rounded-3xl p-5 shadow-default gap-4">
        <div className="w-[400px] h-[400px] flex justify-center items-center overflow-hidden rounded-full">
          <div>
            <button onClick={handleClickInput}>
              <img
                className="w-[400px]"
                src={imagePreview ? imagePreview : "/Image/Shop.jpg"}
                alt="Avatar"
              ></img>
            </button>
            <input
              ref={inputFile}
              onChange={handleImageChange}
              className="hidden"
              type="file"
              required
            ></input>
          </div>
        </div>
        <div className="w-1 justify-stretch bg-slate-600 rounded-xl"></div>
        <div className="flex flex-grow justify-center items-center">
          <div>
            <form onSubmit={handleCreateShop} className="flex flex-col justify-center items-center gap-5" >
              <div>
                <p className="text-[30px] font-bold">TẠO CỬA HÀNG</p>
              </div>
              <div className="w-[200px] h-1 bg-slate-400 rounded-xl"></div>
              <div>
                <input
                  name="tenCuaHang"
                  className="px-4 py-3 w-[450px] rounded-xl"
                  placeholder="Nhập tên cửa hàng"
                  onChange={ChangeInput}
                  required
                ></input>
              </div>
              <div>
                <input
                  name="diaChi"
                  className="px-4 py-3 w-[450px] rounded-xl"
                  placeholder="Nhập địa chỉ cửa hàng"
                  onChange={ChangeInput}
                  required
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
        </div>
      </div>
    </div>
  );
}
