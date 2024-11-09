import React from 'react';

export default function Home() {
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
        <div class="bg-white bg-opacity-30 flex items-center justify-center">
        <div class="grid-container grid grid-cols-1 gap-[30px] h-[600px] w-[300px] mt-4 overflow-auto scrollbar-hidden ">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} class="bg-white rounded-lg p-4">
              <button class="bg-[#D9D9D9] h-32 mb-2 rounded-md text-center w-full flex justify-center items-center">Ảnh sản phẩm</button>
              <div class="flex justify-between items-center">
                <span class="text-yellow-500 font-semibold">⭐ 5</span>
                <div class="text-[#FF7816] text-right font-bold">100,000 lượt</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
