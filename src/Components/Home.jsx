import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";

export default function Home() {
  const widthScreen = window.innerWidth;
  const [scrollPage, setScrollPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [listID, setListID] = useState([]);
  const [listIDSearch, setListIDSearch] = useState([]);
  const [valueSearch, setvalueSearch] = useState("");
  const scrollProduct = useRef(null);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceChange = useRef(
    debounce((value) => {
      setvalueSearch(value);
    }, 1000)
  );

  const ChangeInputSearch = (e) => {
    debounceChange.current(e.target.value);
  };

  const ChangeFirstScroll = () => {
    if (scrollPage === 0) {
      setScrollPage(2);
    } else {
      setScrollPage(scrollPage - 1);
    }
  };

  const ChangeLastScroll = () => {
    if (scrollPage === 2) {
      setScrollPage(0);
    } else {
      setScrollPage(scrollPage + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      ChangeLastScroll();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollPage]);

  const AddElement = async (Array) => {
    const ProductList = [];
    const promises = [];
    for (let i = 0; i < Array.length; i++) {
      promises.push(
        axios
          .post("http://localhost:9000/SanPham/Detail", {
            maSanPham: Array[i].maSanPham,
          })
          .then((rs) => {
            ProductList.push({
              ImageP: rs.data.ImageValue,
              TypeImage: rs.data.LoaiAnh,
              NameP: rs.data.tenSanPham,
              PriceP: rs.data.giaTien,
              IdP: rs.data.maSanPham,
            });
          })
      );
    }
    await Promise.all(promises);
    setProducts([...ProductList]);
  };

  const TakeList = () => {
    axios.post("http://localhost:9000/SanPham/ListID").then((rs) => {
      setListID(rs.data);
    });
  };

  const TakeListSearch = () => {
    axios
      .post("http://localhost:9000/SanPham/Search", { Search: valueSearch })
      .then((rs) => {
        setListIDSearch(rs.data);
      })
      .catch((err) => {
        setProducts([]);
      });
  };

  useEffect(() => {
    if (listID.length >= 0) {
      AddElement(listID);
    }
  }, [listID]);

  useEffect(() => {
    if (listIDSearch.length >= 0) {
      AddElement(listIDSearch);
    }
  }, [listIDSearch]);

  useEffect(() => {
    if (valueSearch) {
      TakeListSearch();
    } else {
      AddElement(listID);
    }
  }, [valueSearch]);

  useEffect(() => {
    TakeList();
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex items-center justify-center w-full h-[500px] bg-gradient-sky">
        <div className="text-center flex flex-col gap-5">
          <div>
            <p className="text-[70px] font-extrabold text-white">VITOPU</p>
          </div>
          <div className="h-2 w-full bg-white rounded-3xl"></div>
          <div>
            <p className="tetx-[45px] font-extrabold text-white">
              Nơi sẵn sàng bán rẻ mọi thứ cho bạn
              <br />
              Hãy tham gia mua sắm
            </p>
          </div>
        </div>
      </div>
      <div
        className={"flex justify-center items-center duration-300 ease-in"}
        style={{
          width: widthScreen * 3 + "px",
          transform: "translateX(" + -1920 * scrollPage + "px)",
        }}
      >
        <div
          className="relative h-[700px] bg-white"
          style={{ width: widthScreen + "px" }}
        ></div>
        <div
          className="relative h-[700px] bg-red-400"
          style={{ width: widthScreen + "px" }}
        ></div>
        <div
          className="relative h-[700px] bg-slate-500"
          style={{ width: widthScreen + "px" }}
        ></div>
      </div>
      <div className="absolute flex justify-between items-center w-full h-[700px] translate-y-[500px]">
        <div>
          <button className="ml-[50px]" onClick={ChangeFirstScroll}>
            <svg
              className="w-[50px] fill-white stroke-[#858585] stroke-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full p-5 ml-[50px] bg-[rgba(255,255,255,0.3)]">
          <div>
            <p className="text-[40px]">Tên sản phẩm</p>
          </div>
          <div>
            <p>Tên cửa hàng</p>
          </div>
          <div>
            <p>Lượt</p>
          </div>
          <div>
            <p>100,000 vnd</p>
          </div>
          <div>
            <button className="bg-[rgba(83,165,185,1)] text-white p-2 border-[rgba(83,165,185,1)] border-[2px] duration-200 ease-linear hover:bg-white hover:text-[rgba(83,165,185,1)]">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="w-full"></div>
        <div>
          <button className="mr-[50px]" onClick={ChangeLastScroll}>
            <svg
              className="w-[50px] rotate-180 fill-white stroke-[#858585] stroke-[5px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-slate-200 h-[840px]">
        <div className="border-b-[5px] w-[300px] border-[rgba(83,165,185,1)] ">
          <p className="font-bold text-[40px] pt-5 text-center">SẢN PHẨM</p>
        </div>
        <div className="py-5">
          <input
            className="w-[500px] p-2 outline-none"
            placeholder="Tìm kiếm..."
            onChange={ChangeInputSearch}
          ></input>
        </div>
        {products.length === 0 ? (
          <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
            <div>
              <svg
                className="w-[100px] font-extrabold opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </div>
            <div>
              <p className="text-[40px] font-extrabold opacity-70">
                Không có sản phẩm
              </p>
            </div>
          </div>
        ) : (
          <div
            className="grid grid-cols-4 w-full p-7 h-full overflow-auto bg-white gap-[30px]"
            ref={scrollProduct}
          >
            {products.map((p) => (
              <div>
                <button className="flex flex-col duration-200 w-[450px] ease-linear hover:text-[rgba(83,165,185,1)] hover:shadow-2xl">
                  <div className="relative overflow-hidden w-[450px] h-[300px]">
                    <div className="absolute flex w-full h-full justify-center items-center">
                      <div>
                        <LazyLoadImage
                          className="h-[300px] w-[450px]"
                          effect="blur"
                          src={
                            "data:image/" + p.TypeImage + ";base64," + p.ImageP
                          }
                          alt={p.IdP}
                        ></LazyLoadImage>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <p>{p.NameP}</p>
                  </div>
                  <div className="flex justify-between items-center w-full px-2 pb-2">
                    <div>
                      <p>{Intl.NumberFormat().format(p.PriceP)} VND</p>
                    </div>
                    <div>
                      <button className="bg-[rgba(83,165,185,1)] text-white p-2 border-[rgba(83,165,185,1)] border-[2px] duration-200 ease-linear hover:bg-white hover:text-[rgba(83,165,185,1)]">
                        Thêm
                      </button>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
