import React, { useEffect, useState } from "react";
import { UserContext } from "../Data/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { User, inforUser, shop, checkShop } = useContext(UserContext);
  const [isWait, setIsWait] = useState(true);
  const [birth, setBirth] = useState({
    Ngay: 0,
    Thang: 0,
    Nam: 0,
  });

  useEffect(() => {
    inforUser();
    checkShop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (User.user && shop._id) {
      setIsWait(false);
      const birthDate = new Date(User.user.ngaySinh);
      setBirth({
        Ngay: birthDate.getDate(),
        Thang: birthDate.getMonth() + 1,
        Nam: birthDate.getFullYear(),
      });
    }else if(User.user){
      setIsWait(false);
      const birthDate = new Date(User.user.ngaySinh);
      setBirth({
        Ngay: birthDate.getDate(),
        Thang: birthDate.getMonth() + 1,
        Nam: birthDate.getFullYear(),
      });
    }
  }, [User, shop]);

  const Navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    window.localStorage.setItem("ID", "");
    window.localStorage.setItem("IDU", "");
    Navigate("/");
  };

  return (
    <>
      {isWait ? (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[rgba(255,255,255,1)]">
          <div>
            <span className="loader"></span>
          </div>
          <div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-3xl w-full">
          <div className="flex gap-5 w-full bg-gradient-cloud justify-center items-center ">
            <div className="w-[80%] flex">
              <div className="w-[420px] h-[500px] bg-[rgba(255,255,255,0.5)] rounded-[50px] m-5 flex flex-col items-center justify-center gap-3">
                <div className="w-[400px] h-[400px] rounded-full overflow-hidden flex items-center justify-center">
                  <div>
                    <img
                      src={"http://localhost:9000" + User.hinhAnh}
                      alt={User.user.hoVaTen}
                    ></img>
                  </div>
                </div>
                <div>
                  <button
                    onClick={signOut}
                    className="bg-red-400 border-2 border-red-400 text-[25px] text-white rounded-2xl px-3 py-1 duration-200 ease-linear hover:bg-white hover:text-red-400"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-center gap-3">
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Tên </div>
                    <div>{User.user.hoVaTen}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Ngày Sinh </div>
                    <div>
                      {"Ngày " +
                        birth.Ngay +
                        ", Tháng " +
                        birth.Thang +
                        ", Năm " +
                        birth.Nam}
                    </div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Giới tính </div>
                    <div>{User.user.gioiTinh}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Địa Chỉ </div>
                    <div>{User.user.diaChi}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Email </div>
                    <div>{User.user.email}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="translate-y-10">
                  <button
                    onClick={
                      shop.maCuaHang
                        ? () => {
                            window.localStorage.setItem("IDSP", shop._id);
                            Navigate("/PageShop");
                          }
                        : () => Navigate("/CreateShop")
                    }
                    className="bg-[#458FFF] border-2 border-[#458FFF] text-[25px] text-white rounded-2xl px-3 py-1 duration-200 ease-linear hover:bg-white hover:text-[#458FFF]"
                  >
                    {shop.maCuaHang ? "Cửa hàng của tôi" : "Trở thành cửa hàng"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#48b9cc]">
            <p className="p-5 text-[25px] text-white">Lịch sử mua hàng</p>
          </div>
          <div className="h-[760px] bg-[#a6e2ed]"></div>
        </div>
      )}
    </>
  );
}
