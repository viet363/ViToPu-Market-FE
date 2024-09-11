import React from 'react'

export default function Notification() {
  return (
    <div class="flex items-center justify-center">
      <div class=" w-[1800px] h-[750px] mt-4 rounded-3xl bg-gray-100 bg-opacity-30 ">
      <div class="grid-container grid grid-cols-1 gap-5 p-6 overflow-auto scrollbar-hidden  h-[650px] ">
          {Array(10).fill(0).map((_, index) => (
            <div key={index} class="flex items-center justify-between bg-white rounded-2xl ">
              <div class="flex items-center h-[80px]">
                <div class=" ml-20">Cửa hàng *Tên cửa hàng* đã phản hồi đánh giá của bạn </div>
              </div>
              <div class="flex items-center justify-center bg-[#7CD0FF] rounded-r-2xl h-full w-[120px]">
              <button class='text-center '>Xem</button>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}
