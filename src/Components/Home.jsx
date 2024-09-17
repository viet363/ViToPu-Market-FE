/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function Home() {
  const widthScreen = window.innerWidth;
  const [scrollPage, setScrollPage] = useState(0);
  const [products, setProducts] = useState([]);

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

  const AddElement = (Number) => {
    const ProductList = [];
    for (let i = 1; i <= Number; i++) {
      ProductList.push({
        ImageP:
          "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        NameP: "Ten san pham",
        PriceP: 100000,
        IdP: "SP001",
      });
    }
    setProducts(...products, ProductList);
  };

  useEffect(() => {
    AddElement(10);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
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
      <div className="absolute flex justify-between items-center w-full h-[700px]">
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
            className="w-[500px] pl-[60px] py-2 outline-none"
            placeholder="Tìm kiếm..."
          ></input>
        </div>
        <div className="grid grid-cols-4 w-full p-7 h-full overflow-auto bg-white gap-[30px]">
          {products.map((p) => (
            <div className=" ">
              <button className="flex flex-col duration-200 w-[450px] ease-linear hover:text-[rgba(83,165,185,1)] hover:shadow-2xl">
                <div className="relative overflow-hidden w-[450px] h-[300px]">
                  <div className="absolute flex justify-center items-center">
                    <div><img src={p.ImageP} alt={p.IdP}></img></div>
                  </div>
                </div>
                <div className="p-2">
                  <p>{p.NameP}</p>
                </div>
                <div className="flex justify-between items-center w-full px-2 pb-2">
                  <div>
                    <p>{p.PriceP} VND</p>
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
      </div>
    </div>
  );
}
