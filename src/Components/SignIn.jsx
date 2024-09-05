import React from 'react';

export default function SignIn() {
  return (
    <div className=" bg-cover bg-center h-[-500px] flex items-center justify-center">
      <div>
        <div className="bg-black bg-opacity-30 p-6 rounded-3xl w-96 items-center">
          <h2 className="text-white font-bold text-center text-2xl mb-6">ĐĂNG NHẬP</h2>
          <div className="border-t-8 border-[#FFFFFF] mb-8 rounded-full w-[255px] mx-auto"></div>
          <form className="flex flex-col items-center">
            <div className="mb-4 ">
              <input
                className=" h-[50px] p-3 text-white  rounded-2xl"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 ">
              <input
                className=" h-[50px] p-3 text-white  rounded-2xl"
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="mb-6">
              <button
                className="w-[150px] p-3 bg-[#458FFF] text-white rounded-3xl mt-11"
                type="submit"
              >
                Xác nhận
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="w-[350px] p-3 bg-[#7CD0FF] text-center rounded-3xl ">
            Đăng ký nếu chưa có tài khoản
          </a>
        </div>
      </div>
    </div>
  );
}
