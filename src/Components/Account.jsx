import React, { useEffect, useState } from "react";
import { UserContext } from "../Data/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const { User, inforUser, shop, checkShop } = useContext(UserContext);
  const [isWait, setIsWait] = useState(true);
  const [isWaitHistory, setIsWaitHistory] = useState(true);
  const [historyCart, setHistoryCart] = useState({});
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
    if (User._id && shop._id) {
      window.localStorage.setItem("IDS", shop._id);
      setIsWait(false);
      const birthDate = new Date(User.ngaySinh);
      setBirth({
        Ngay: birthDate.getDate(),
        Thang: birthDate.getMonth() + 1,
        Nam: birthDate.getFullYear(),
      });
      getHistoryCart();
    } else if (User._id) {
      setIsWait(false);
      const birthDate = new Date(User.ngaySinh);
      setBirth({
        Ngay: birthDate.getDate(),
        Thang: birthDate.getMonth() + 1,
        Nam: birthDate.getFullYear(),
      });
      getHistoryCart();
    }
  }, [User, shop]);

  const Navigate = useNavigate();

  const getHistoryCart = () => {
    const ID = window.localStorage.getItem("ID");
    axios
      .post("http://localhost:9000/LichSu/GetHistoryCart", { ID: ID })
      .then((rs) => {
        if (rs.data.Status === "Success") {
          setHistoryCart(rs.data.detailHistory);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (historyCart.length > 0) {
      setIsWaitHistory(false);
    } else {
      setTimeout(() => {
        setIsWaitHistory(false);
      }, [3000]);
    }
  }, [historyCart]);

  const signOut = (e) => {
    e.preventDefault();
    window.localStorage.setItem("ID", "");
    window.localStorage.setItem("IDS", "");
    Navigate("/");
  };

  const getAllDate = (date) => {
    const fullDate = new Date(date);
    return (
      "Ngày " +
      fullDate.getDate() +
      ", Tháng " +
      (fullDate.getMonth() + 1) +
      ", Năm " +
      fullDate.getFullYear()
    );
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
                      src={
                        "http://localhost:9000/Image/" +
                        User.hinhAnh +
                        "." +
                        User.loaiAnh
                      }
                      alt={User.hoVaTen}
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
                    <div>{User.hoVaTen}</div>
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
                    <div>{User.gioiTinh}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Địa Chỉ </div>
                    <div>{User.diaChi}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="text-[25px]">
                  <div className="flex">
                    <div className="font-bold px-5 w-[200px]">Email </div>
                    <div>{User.email}</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-slate-400 rounded-xl"></div>
                <div className="translate-y-10">
                  <button
                    onClick={
                      shop._id
                        ? () => {
                            window.localStorage.setItem("IDSP", shop._id);
                            Navigate("/PageShop");
                          }
                        : () => Navigate("/CreateShop")
                    }
                    className="bg-[#458FFF] border-2 border-[#458FFF] text-[25px] text-white rounded-2xl px-3 py-1 duration-200 ease-linear hover:bg-white hover:text-[#458FFF]"
                  >
                    {shop._id ? "Cửa hàng của tôi" : "Trở thành cửa hàng"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#48b9cc]">
            <p className="p-5 text-[25px] text-white font-extrabold">
              Lịch sử mua hàng
            </p>
          </div>
          {isWaitHistory ? (
            <div className="w-full h-[300px] flex flex-col justify-center items-center bg-[rgba(255,255,255,1)]">
              <div>
                <span className="loader"></span>
              </div>
              <div>
                <p>Loading...</p>
              </div>
            </div>
          ) : historyCart.length > 0 ? (
            <div className="w-full flex flex-col bg-slate-200 h-[700px] overflow-auto p-5 gap-5">
              {historyCart.map((e) => (
                <div className="w-full">
                  <button
                    onClick={() => {
                      window.localStorage.setItem("IDPP", e.maSanPham);
                      Navigate("/PageProduct");
                    }}
                    className="flex gap-5 items-center w-full bg-white duration-200 ease-linear shadow-none hover:shadow-default"
                  >
                    <div className="w-[400px] h-[250px]">
                      <img
                        className="w-[400px] h-[250px]"
                        src={
                          "http://localhost:9000/Image/" +
                          e.maSanPham +
                          "." +
                          e.loaiAnh
                        }
                        alt={e.tenSanPham}
                      />
                    </div>
                    <div>
                      <p className="w-[400px] overflow-hidden whitespace-nowrap text-ellipsis">
                        {e.tenSanPham}
                      </p>
                    </div>
                    <div>
                      <p className="w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                        {e.tenCuaHang}
                      </p>
                    </div>
                    <div className="w-1 h-[240px] rounded-xl bg-slate-500"></div>
                    <div className="flex-grow flex flex-col gap-4">
                      <div className="flex gap-3">
                        <div>
                          <p className="w-[200px] text-left font-bold">
                            Ngày mua
                          </p>
                        </div>
                        <div>
                          <p>{getAllDate(e.ngayMua)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <p className="w-[200px] text-left font-bold">
                            Số lượng
                          </p>
                        </div>
                        <div>
                          <p>{e.soLuong}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <p className="w-[200px] text-left font-bold">
                            Số tiền
                          </p>
                        </div>
                        <div>
                          <p>
                            {Intl.NumberFormat().format(e.giaTien) + " VND"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[300px] flex flex-col justify-center items-center bg-white">
              <div>
                <svg
                  className="w-[100px] h-[100px] fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32L360 32l0 102.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23L312 32 120.1 32C111 12.8 91.6 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-slate-300">
                  Bạn chưa mua sản phẩm nào cả!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
