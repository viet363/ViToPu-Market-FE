import React from 'react'

export default function Account() {
  return (
    <div className="flex flex-col items-center w-[1800px] h-[950px] m-10 mx-16 rounded-3xl  bg-gray-100 bg-opacity-30 p-5 space-y-5">
      <div className="flex w-full">
        <div className="basis-1/4 bg-[#E3FCFF] h-[490px] rounded-l-xl flex flex-col justify-between p-4">
          {/*  ảnh đại diện và Đăng xuất */}
          <div className="flex flex-col items-center flex-grow">
            <button className="flex items-center justify-center w-[220px] h-[220px] mt-24">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[220px] h-[220px] text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <button type="submit" className="text-center text-white w-[215px] h-[60px] bg-[#FF7070] py-2 rounded-2xl">
              Đăng xuất
            </button>
          </div>
        </div>
        <div className="basis-3/4 bg-white h-[490px] rounded-r-xl text-black font-bold p-4">
          <div className="flex flex-col space-y-3">
            <div className="bg-white w-full h-[65px] flex items-center pl-4">*Tên</div>
            <div className="bg-white w-full h-[65px] flex items-center pl-4">*Ngày sinh</div>
            <div className="bg-white w-full h-[65px] flex items-center pl-4">*Giới tính</div>
            <div className="bg-white w-full h-[65px] flex items-center pl-4">*Địa chỉ</div>
            <div className="bg-white w-full h-[65px] flex items-center pl-4">*Email</div>
            <button type="submit" class="w-[290px] bg-[#7CD0FF]  py-2 rounded-3xl  ">Trở thành cửa hàng </button>
          </div>
        </div>
      </div>
      {/* Phần lịch sử mua hàng */}
      <div className="w-full h-[350px] rounded-3xl bg-[#E3FCFF] mt-5">
        <div className="flex justify-between items-center h-[80px] bg-[#86B8D4] text-white rounded-t-3xl">
          <div className="px-4 py-2 text-2xl font-semibold w-full text-center">Lịch sử mua hàng</div>
        </div>
        <div className="grid grid-cols-1 gap-5 p-6 overflow-auto scrollbar-hidden  h-[270px] bg-[#E3FCFF]">
          {Array(10).fill(0).map((_, index) => (
            <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center flex-grow">
                <div className="ml-4 text-lg font-medium">Tên sản phẩm</div>
                <div className="ml-8 text-gray-600">Tên cửa hàng</div>
                <div className="ml-8 text-gray-600">*Ngày mua</div>
              </div>
              <div className="text-orange-500 font-semibold">x1</div>
              <div className="text-orange-500 font-semibold">100,000.00đ</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
