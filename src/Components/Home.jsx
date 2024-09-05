import React from 'react';

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="flex justify-center items-start mt-4">
        <div className="flex flex-col w-11/12 max-w-6xl">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
              <input type="text" placeholder="Tìm kiếm" className="flex-grow p-2 border rounded-lg outline-none" />
              <button className="ml-2 p-2 bg-gray-300 rounded-lg"></button>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="bg-gray-300 h-24 mb-2 rounded-md"></div>
                <div className="text-lg font-semibold">*Tên sản phẩm</div>
                <div className="text-orange-500 text-right font-bold">100,000.00₫</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="bg-gray-300 h-24 mb-2 rounded-md"></div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semiboldN"> 5</span>
                  <span className="text-gray-500">1,000 lượt</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md flex justify-center items-center h-full">
              <div className="bg-gray-300 h-full w-full rounded-md">496 x 280</div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4 mt-4">
              {Array(4).fill(0).map((_, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
