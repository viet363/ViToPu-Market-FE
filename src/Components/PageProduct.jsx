/* eslint-disable no-unused-vars */
import axios from "axios";
import { UserContext } from "../Data/User";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageProduct() {
  const {
    user,
    inforUser,
    shop,
    checkShop,
    shopPreview,
    inforShop,
    product,
    inforProduct,
  } = useContext(UserContext);
  const [isWait, setIsWait] = useState(true);
  const [isWaitComment, setIsWaitComment] = useState(true);
  const [feedback, setFeedback] = useState({});
  const [userComment, setUserComment] = useState({});
  const [filterRate, setFilterRate] = useState(0);

  useEffect(() => {
    inforProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (product._id) {
      inforShop();
      window.localStorage.setItem("IDSP", product.maCuaHang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  useEffect(() => {
    if (shopPreview._id) {
      setIsWait(false);
      getComment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopPreview]);

  useEffect(() => {
    if (userComment.length > 0) {
      setIsWaitComment(false);
    } else {
      setTimeout(() => {
        setIsWaitComment(false);
      }, [3000]);
    }
  }, [userComment]);

  const getComment = () => {
    axios
      .post("http://localhost:9000/DanhGia/GetCommentByProduct", {
        maSanPham: product._id,
      })
      .then((rs) => {
        if (rs.data.Status === "Success") {
          setUserComment(rs.data.userComment);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Navigate = useNavigate();

  const addToCart = (idp) => {
    const id = window.localStorage.getItem("ID");
    console.log(id);
    if (id) {
      axios
        .post("http://localhost:9000/GioHang/AddToCart", {
          maKhachHang: id,
          maSanPham: idp,
        })
        .then((rs) => {
          if (rs.data.Status === "Success") {
            Navigate("/Cart");
          } else {
            alert("Something Wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Navigate("/SignIn");
    }
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
        <div class="flex flex-col w-full h-full">
          <div className="flex justify-center items-center bg-white ">
            <div className="flex flex-wrap w-[70%] justify-center items-center gap-5 bg-slate-200">
              <div className="p-5">
                <img
                  className="w-[600px] object-fill"
                  src={
                    "http://localhost:9000/Image/" +
                    product.hinhAnh +
                    "." +
                    product.loaiAnh
                  }
                  alt={product.tenSanPham}
                ></img>
              </div>
              <div className="flex flex-col flex-grow justify-center h-full bg-slate-200 gap-[50px] p-10">
                <div className="h-1 w-full bg-slate-500"></div>
                <div>
                  <p className="text-[50px] font-serif text-center">
                    {product.tenSanPham}
                  </p>
                </div>
                <div className="h-1 w-full bg-slate-500"></div>
                <div>
                  <p className="text-orange-400 text-[30px]">
                    {Intl.NumberFormat("vi-VN").format(product.giaTien)} VND
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      addToCart(product._id);
                    }}
                    disabled={
                      window.localStorage.getItem("IDS") === product.maCuaHang
                        ? true
                        : false
                    }
                    className={
                      window.localStorage.getItem("IDS") === product.maCuaHang
                        ? "text-white p-2 bg-slate-300"
                        : "bg-[rgba(83,165,185,1)] text-white p-2 border-[rgba(83,165,185,1)] border-[2px] duration-200 ease-linear hover:bg-white hover:text-[rgba(83,165,185,1)]"
                    }
                  >
                    Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-slate-300 justify-center items-center">
            <div className="flex w-[80%] justify-between items-center bg-white m-3">
              <div className="ml-3">
                <p className="text-[30px] font-serif">
                  {shopPreview.tenCuaHang}
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    Navigate("/PageShop");
                  }}
                  className="bg-[#458FFF] border-2 border-[#458FFF] text-[25px] text-white px-5 py-2 duration-200 ease-linear hover:bg-white hover:text-[#458FFF]"
                >
                  Xem
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-slate-300 justify-center items-center">
            <div className="flex w-[80%] justify-between items-center bg-white m-3">
              <pre className="font-sans p-3 max-h-[200px] overflow-auto w-full text-wrap">
                {product.moTa}
              </pre>
            </div>
          </div>
          <div className="flex w-full bg-slate-300 justify-center items-center">
            <div className="flex flex-col w-[80%] justify-between bg-[#b9fffe] m-3">
              <div className="flex gap-3 items-center">
                <div className="p-3 bg-slate-400">
                  <svg
                    className="w-[30px] h-[30px] fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                  </svg>
                </div>
                <div className="w-[30px] h-[30px]">
                  <button
                    onClick={() => {
                      if (filterRate === 0) {
                        setFilterRate(1);
                      } else {
                        if (filterRate !== 1) {
                          setFilterRate(1);
                        } else {
                          setFilterRate(0);
                        }
                      }
                    }}
                  >
                    <svg
                      className={
                        filterRate >= 1
                          ? "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
                          : "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-white duration-200 ease-linear"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
                <div className="w-[30px] h-[30px]">
                  <button
                    onClick={() => {
                      if (filterRate === 0) {
                        setFilterRate(2);
                      } else {
                        if (filterRate !== 2) {
                          setFilterRate(2);
                        } else {
                          setFilterRate(0);
                        }
                      }
                    }}
                  >
                    <svg
                      className={
                        filterRate >= 2
                          ? "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
                          : "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-white duration-200 ease-linear"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
                <div className="w-[30px] h-[30px]">
                  <button
                    onClick={() => {
                      if (filterRate === 0) {
                        setFilterRate(3);
                      } else {
                        if (filterRate !== 3) {
                          setFilterRate(3);
                        } else {
                          setFilterRate(0);
                        }
                      }
                    }}
                  >
                    <svg
                      className={
                        filterRate >= 3
                          ? "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
                          : "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-white duration-200 ease-linear"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
                <div className="w-[30px] h-[30px]">
                  <button
                    onClick={() => {
                      if (filterRate === 0) {
                        setFilterRate(4);
                      } else {
                        if (filterRate !== 4) {
                          setFilterRate(4);
                        } else {
                          setFilterRate(0);
                        }
                      }
                    }}
                  >
                    <svg
                      className={
                        filterRate >= 4
                          ? "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
                          : "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-white duration-200 ease-linear"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
                <div className="w-[30px] h-[30px]">
                  <button
                    onClick={() => {
                      if (filterRate === 0) {
                        setFilterRate(5);
                      } else {
                        if (filterRate !== 5) {
                          setFilterRate(5);
                        } else {
                          setFilterRate(0);
                        }
                      }
                    }}
                  >
                    <svg
                      className={
                        filterRate >= 5
                          ? "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
                          : "w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-white duration-200 ease-linear"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {isWaitComment ? (
                <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[rgba(255,255,255,1)]">
                  <div>
                    <span className="loader"></span>
                  </div>
                  <div>
                    <p>Loading...</p>
                  </div>
                </div>
              ) : userComment.length > 0 ? (
                <div className="w-full flex flex-col gap-7 p-3 bg-slate-200">
                  {userComment.map((e) => (
                    <>
                      <ElementComment e={e} key={e._id}></ElementComment>
                    </>
                  ))}
                </div>
              ) : (
                <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[rgba(255,255,255,1)]">
                  <div>
                    <p>Chưa có đánh giá nào cho sản phẩm này</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const ElementComment = ({ e }) => {
  const {
    user,
    inforUser,
    shop,
    checkShop,
    shopPreview,
    inforShop,
    product,
    inforProduct,
    inforShopWithMa,
  } = useContext(UserContext);
  const [isOption, setIsOption] = useState(false);

  const renderIcons = (count) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        <div key={i}>
          <svg
            key={i}
            className="w-[30px] h-[30px] stroke-[50px] stroke-yellow-500 fill-yellow-500 duration-200 ease-linear"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </div>
      );
    }
    return icons;
  };
  return (
    <div className="flex flex-col w-[50%] bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center px-3 py-1 gap-3">
          <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden">
            <div>
              <img
                src={
                  "http://localhost:9000/Image/" + e.hinhAnh + "." + e.loaiAnh
                }
                alt={e.hoVaTen}
              />
            </div>
          </div>
          <div>
            <p>{e.hoVaTen}</p>
          </div>
          {renderIcons(e.mucDoDanhGia)}
        </div>
        <div className="px-3 h-[30px] relative">
          <button className="w-[15px] h-[30px]">
            <svg
              className="w-[15px] h-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
          </button>
          <div className="absolute top-0 left-7 -translate-y-8 w-[200px] h-[100px] bg-white flex flex-col">
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-slate-500"></div>
      <div className="w-full max-h-[300px] overflow-auto p-3">
        <p className="w-full">{e.noiDung}</p>
      </div>
    </div>
  );
};
