import React from 'react'

export default function PageShop() {
  return (
    <div class="flex flex-col items-center w-[1870px] h-full bg-gray-100 bg-opacity-40 rounded-lg mx-4 m-4 space-y-6 space-x-6">
      {/* Khung 1 */}
      <div class="flex items-center justify-center w-[832px] h-[392px] rounded-3xl bg-white mt-5">
        <div class="space-y-4">
          <button class="w-[220px] h-[220px] mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[220px] h-[220px] text-blue-600 mb-8" viewBox="0 0 512 512" fill="currentColor">
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
            </svg>
          </button>
          <div class="text-center">
            *Tên cửa hàng
          </div>
          <div class="text-center">
            *Địa chỉ
          </div>
        </div>
      </div>
      {/* Khung 2  */}
      <div class="flex flex-col w-[1790px]">
        <div class="flex flex-row">
          <div class="basis-1/4 flex justify-center bg-white h-[400px] rounded-l-xl p-8">
            <div class="flex items-end justify-end bg-[#D9D9D9] w-[380px] h-[235px] mt-9">
              <input type="file" class="absolute w-[40px] h-[40px] rounded-full opacity-0 cursor-pointer overflow-hidden" />
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[40px] h-[40px] mb-4 mr-4" viewBox="0 0 512 512" fill="blue">
                <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
              </svg>
            </div>
          </div>
          <div class="basis-3/4 bg-[#E3FCFF] h-[400px] rounded-r-xl text-black ">
            <div class="flex flex-col  space-y-6 mt-5  ">
              <div class="bg-white w-[1200px] h-[65px] rounded-2xl ml-20">
                <input type="text" placeholder="Tên cửa hàng" class="w-full h-full rounded-2xl p-4 " />
              </div>
              <div class="bg-white w-[1200px] h-[65px] rounded-2xl ml-20">
                <input type="text" placeholder="Địa chỉ" class="w-full h-full rounded-2xl p-4 " />
              </div>
              <div class="bg-white w-[1200px] h-[115px] rounded-2xl  ml-20">
                <input type="text" placeholder="*Nhập mô tả" class="w-full h-full rounded-2xl p-4 " />
              </div>
              <div class=" ml-96 ">
                <button type="submit" class="w-[288px] bg-[#7CD0FF] py-2 rounded-3xl text-white font-semibold">
                  Bán sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Khung 3 */}
      <div class="bg-white bg-opacity-30 flex items-center justify-center">
        <div class="grid-container grid grid-cols-3 gap-5 w-[1790px] h-[600px] mt-4 mx-4 overflow-auto scrollbar-hidden ">
          {Array(20).fill(0).map((_, index) => (
            <div key={index} class="bg-[#E3FCFF] rounded-lg flex flex-col w-[455px] h-[220px]">
              <div class="flex items-center">
                <button class="bg-[#D9D9D9] h-[150px] mb-2 rounded-md text-center w-full flex items-center">
                  <span class="flex-1 text-center">Ảnh sản phẩm</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-10 mr-4 mb-8">
                    <path
                      d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                      fill="red"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-lg font-semi text-center">*Tên sản phẩm</div>
                <div class="text-[#FF7816] text-right text-lg">100,000.00₫</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
