import React from 'react';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#253133] bg-opacity-30 rounded-lg m-8 p-8 w-[1150px] h-[800px] flex">
      <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">ĐĂNG KÝ</h2>
            <div className="border-t-8 border-[#FFFFFF] rounded-full w-[255px]"></div>
          </div>
        <div className="w-1/4 flex flex-col items-center mt-16 ">
          <div className="flex justify-center mb-6 left-[230px] bottom-10">
            <div className="relative ">
              <div className="bg-gray-200 rounded-full flex items-center justify-center w-[300px] h-[300px]">
                <img src="./image/circle-user-solid.svg" alt="icon users" className="w-[200px] h-[200px]" />
              </div>
              <div className="relative bg-gray-200 w-[90px] h-[90px] rounded-full flex items-center justify-center left-[230px] bottom-10">
                <input type="file" className="absolute rounded-full opacity-0 cursor-pointer" />
                <img src="./image/camera-solid.svg" alt="camera icon" className="w-[45px] h-[45px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10px] h-[620px] bg-[#00D1FF] rounded-2xl mx-4 mt-8"></div>
        <div className="w-1/2 mt-12">
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Họ và tên" className="mt-1 w-full border border-gray-300 rounded-2xl p-2" />
            </div>
            <div class="flex items-center space-x-4 mt-1 text-black">
              <div class="flex justify-center items-center w-[155px] h-[55px] bg-white rounded-2xl">Ngày sinh</div>
              <input type="text" id="birthDateDay" class="w-16 p-2 text-center rounded-full border border-gray-300 " />
              <span class="text-[40px] font-bold text-white ">/</span>
              <input type="text" id="birthDateMonth" class="w-16 p-2 text-center rounded-full border border-gray-300  " />
              <span class="text-[40px] font-bold text-white ">/</span>
              <input type="text" id="birthDateYear" class="w-28 p-2 text-center rounded-full border border-gray-300 " />
            </div>
            <div>
              <input type="text" placeholder="Địa chỉ" className="mt-1 w-full border border-gray-300 rounded-2xl p-2" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="mt-1 w-full border border-gray-300 rounded-2xl p-2" />
            </div>
            <div>
              <input type="password" placeholder="Mật khẩu" className="mt-1 w-full border border-gray-300 rounded-2xl p-2" />
            </div>
            <div>
              <input type="password" placeholder="Xác nhận mật khẩu" className="mt-1 w-full border border-gray-300 rounded-2xl p-2" />
            </div>
            <div class="flex items-center space-x-16 mt-1 text-black">
              <div class="flex justify-center items-center w-[155px] h-[55px] bg-white rounded-2xl">
                Giới tính
              </div>
              <label class="flex justify-center items-center w-[95px] h-[55px] bg-white rounded-2xl cursor-pointer ">
                <input type="radio" name="gender" value="male" class="hidden peer" />
                <span class="peer-checked:bg-blue-500 peer-checked:text-white w-full h-full flex justify-center items-center rounded-2xl">
                  Nam
                </span>
              </label>
              <label class="flex justify-center items-center w-[95px]  h-[55px] bg-white rounded-2xl cursor-pointer">
                <input type="radio" name="gender" value="female" class="hidden peer" />
                <span class="peer-checked:bg-pink-500 peer-checked:text-white w-full h-full flex justify-center items-center rounded-2xl">
                  Nữ
                </span>
              </label>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg">
              Xác nhận
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <a href="/SignIn" className="w-[350px] p-3 bg-[#7CD0FF] text-center rounded-3xl">
          Đăng nhập nếu đã có tài khoản
        </a>
      </div>
    </div>
  );
}