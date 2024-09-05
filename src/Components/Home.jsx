import React from 'react';

export default function Home() {
  return (
    <div className=" flex flex-col">
      <div className="flex w-[1424px] ml-5">
        <div className="flex-grow flex flex-col mr-4">
          <div className="flex items-center bg-[#86B8D4] p-2 rounded-t-2xl relative m-4 h-[80px]">
            <input
              type="text"
              className="w-[400px]  p-2 border rounded-xl pl-12"
              placeholder="Tìm kiếm"
            />
            <button className="absolute flex items-center pl-3">
              <img src="./image/magnifying-glass-solid.svg" alt="Search icon" className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 w-[950px] h-[600px] mx-auto">
            {Array(6).fill(0).map((_, index) => (
              <div key={index} className=" bg-white rounded-lg flex flex-col">
                <div className="bg-[#D9D9D9] h-32 mb-2 rounded-md text-center w-full ">Ảnh sản phẩm</div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semi text-center">*Tên sản phẩm</div>
                  <div className="text-[#FF7816] text-right text-lg">100,000.00₫</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[400px]">
          <div className="flex items-center bg-[#86B8D4] p-2 rounded-t-2xl relative  m-4 h-[80px]">
            <div className="h-full w-full mt-7 text-center text-white font-bold">Sản phẩm tích cực</div>
          </div>
          <div className="grid grid-cols-1 gap-[30px] h-[600px] w-[300px] mx-auto mb-4">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className=" bg-white rounded-lg ">
                <div className="bg-[#D9D9D9] h-32 mb-2 rounded-md text-center ">Ảnh sản phẩm</div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">⭐ 5</span>
                  <div className="text-[#FF7816] text-right font-bold">100,000 lượt </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
