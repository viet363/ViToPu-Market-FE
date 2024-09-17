import React from 'react'

export default function CreateShop() {
  return (
    <div class="flex items-center justify-center " >
      <div class="w-[1800px] h-[530px] mt-32 rounded-3xl bg-gray-100 bg-opacity-30 p-5 ">
        <div class="flex flex-row ">
          <div class="basis-1/4 bg-white h-[490px] rounded-l-xl ">
            <div class="flex  justify-center ">
              <button class=" flex items-center justify-center w-[220px] h-[220px] mt-24 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[220px] h-[220px] text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                </svg>
              </button>
            </div>
          </div>
          <div class=" basis-3/4 bg-[#E3FCFF] h-[490px] rounded-r-xl ">
            <div class="flex flex-col items-center justify-center p-36 space-y-16">
              <div class="bg-white w-[515px] h-[65px] rounded-2xl">
                <input type="text" placeholder="Tên cửa hàng" class="mt-1 w-full rounded-2xl p-4" />
              </div>
              <div class="bg-white w-[515px] h-[65px] rounded-2xl">
                <input type="text" placeholder="Địa chỉ" class="mt-1 w-full rounded-2xl p-4" />
              </div>
              <button type="submit" class="w-[290px] bg-[#7CD0FF]  py-2 rounded-3xl  ">
              Đăng ký cửa hàng
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
