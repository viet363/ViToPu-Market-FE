import React, { useState } from 'react';

export default function PageProduct() {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleButtonClick = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className="flex flex-col w-[1870px] h-full bg-gray-100 bg-opacity-40 rounded-lg mx-4 m-4 space-y-5">
      {/* Khung 1 */}
      <div className="flex flex-row mt-6 mx-6">
        <button className="w-[704px] h-[386px] bg-[#D9D9D9]">Ảnh sản phẩm</button>
        <div className="basis-3/4 h-[490px] rounded-r-xl mt-5 mx-7 space-y-16">
          <div className="flex flex-col justify-center space-y-24">
            <div className="text-[32px] rounded-3xl font-bold ">Tên sản phẩm</div>
            <div className="text-[32px] rounded-3xl text-[#FF7816] font-bold">100,000.00 đ</div>
          </div>
          <button type="submit" className="w-[125px] h-[90px] bg-[#458FFF] py-5 rounded-3xl">Mua</button>
        </div>
      </div>
      {/* Khung 2 */}
      <div className="flex items-center justify-between bg-white h-[100px] rounded-2xl mx-6">
        <div className="flex items-center ml-28">
          <button className="flex bg-[#00D1FF] w-[60px] h-[60px] rounded-full"></button>
          <div className="ml-4">Tên cửa hàng</div>
        </div>
        <div className="flex items-center justify-center bg-[#7CD0FF] rounded-r-2xl h-full w-[126px]">
          <button className="text-center">Xem</button>
        </div>
      </div>
      {/* Khung 3 */}
      <div className="flex items-center justify-center h-[300px] bg-white rounded-lg p-4 mx-6">
        Mô tả
      </div>
      {/* Khung 4 */}
      <div className="h-[350px] rounded-3xl bg-[#D9D9D9] mx-6 overflow-y-auto  ">
      <div className="flex items-center h-[80px] bg-[#86B8D4] text-white rounded-t-3xl p-4 space-x-6">
        <div className="text-[32px] font-semibold">Tất cả</div>
        <div className="flex space-x-6 ml-4">
          {Array(5).fill(0).map((_, index) => (
            <button key={index} className="flex items-center justify-center text-[32px] font-bold text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[45px] h-[45px] mr-1">
                <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              {5 - index}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full">
        <div className="flex justify-end items-end bg-white p-4 space-x-4">
          <div className="font-semibold">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[45px] h-[45px]">
                <path fill="#000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
              </svg>
            </button>
          </div>
          <div className="flex bg-[#458FFF] h-full w-[360px] space-x-6 ">
            {Array(5).fill(0).map((_, index) => (
              <button key={index} className="flex items-center justify-center font-bold text-black mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[45px] h-[45px]">
                  <path fill="white" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-start space-x-4 mt-4 ml-5">
          <div className="w-[705px] h-[250px] bg-[#E3FCFF] rounded-xl p-4">
            <div className="flex items-center">
              <button className="w-[60px] h-[60px] bg-[#00C4FF] rounded-full"></button>
              <div className="flex-1 ml-4">
                <div className="text-[29px] font-semibold text-black">*Tên khách hàng</div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[45px] h-[45px]">
                  <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="text-[35px] font-bold text-black ml-2">5</div>
              </div>
            </div>
            <div className="mt-2 p-4 h-[150px] bg-white rounded-md overflow-auto">
              <div className="text-[29px] text-black">*Nội dung đánh giá</div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-28">
            <div className="flex items-center space-x-2">
              <button className="flex items-start justify-center mb-2" onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className="w-[10px] h-[40px]">
                  <path fill='black' d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </button>
              {showFeedback && (
                <button className="bg-white w-[150px] h-[50px] flex items-center justify-center rounded-2xl">
                  Phản hồi
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-4 mt-4 ml-40">
          <div className="w-[705px] h-[250px] bg-[#E3FCFF] rounded-xl p-4">
            <div className="flex items-center">
              <button className="w-[60px] h-[60px] bg-[#00C4FF] rounded-full"></button>
              <div className="flex-1 ml-4">
                <div className="text-[29px] font-semibold text-black">*Tên cửa hàng</div>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[45px] h-[45px]">
                  <path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <div className="text-[35px] font-bold text-black ml-2">5</div>
              </div>
            </div>
            <div className="mt-2 p-4 h-[150px] bg-white rounded-md overflow-auto">
              <div className="text-[29px] text-black">*Nội dung trả lời</div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-28">
            <div className="flex items-center space-x-2">
              <button className="flex items-start justify-center mb-2" onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className="w-[10px] h-[40px]">
                  <path fill='black' d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </button>
              {showFeedback && (
                <div className="flex flex-col space-y-2">
                  <button className="bg-white w-[150px] h-[50px] flex items-center justify-center rounded-2xl">
                    Chỉnh sửa
                  </button>
                  <button className="bg-white w-[150px] h-[50px] flex items-center justify-center rounded-2xl">
                    Xóa
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}