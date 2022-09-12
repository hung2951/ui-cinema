import React from "react";

type Props = {};

const Choose = (props: Props) => {
  return (
    <div className="">
      <section>
        <h2 className=" flex justify-center item-center text-2xl mt-10 ">
          1.CHỌN PHIM
        </h2>
        <div className="flex justify-center item-center h-10 mt-3">
          <img
            src="https://galaxynetbd.com/wp-content/uploads/2021/07/galaxynet.png"
            alt=""
            className=" "
          />
        </div>
        <div className="mt-10 mb-16  max-w-6xl px-10 mx-auto  border border-slate-200 rounded-lg  bg-stone-100 ">
          <div className="md:flex flex-row relative ">
            <div className=" basis-3/5   h-screen   bg-white drop-shadow-lg shadow-black  ">
              <div className="flex justify-center item-center mt-10 border-b-2 xl:w-5/6 ml-12 ">
                <h2 className="mb-7 text-2xl decoration-orange-600 text-cyan-700">
                  CHỌN PHIM
                </h2>
              </div>
              <div className="flex flex-wrap mt-5 mx-10">
                <input type="checkbox" className="form-checkbox h-6 w-6 mt-3" />
                <div className="mx-3 mt-1 flex flex-wrap">
                  <h2 className="flex flex-wrap absolute mt-2">
                    GIỚI HẠN TRUY LÙNG-
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap mt-5 mx-10">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6  mt-3"
                />
                <div className="mx-3 mt-1 flex flex-wrap">
                  <h2 className=":flex flex-wrap absolute mt-2">
                    GIỚI HẠN TRUY LÙNG-
                  </h2>
                </div>
              </div>
            </div>
            <div className="basis-2/5  ml-16 my-10 bg-white drop-shadow-lg shadow-black ">
              <div className="flex justify-center   item-center mt-10 border-b-2 w-5/6 ml-9 ">
                <h2 className="mb-7  decoration-orange-600 text-cyan-700 text-xl">
                  TRUNG TÂM CHIẾU PHIM QUỐC GIA
                </h2>
              </div>
              <div className="mt-5 mr-20 ml-20">
                <select className=" block py-1 px-0 w-full text-sm  border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer pl-14">
                  <option className="pl-20">Thứ Hai ,12-09-2022</option>
                  <option value="US">Thứ Hai ,12-09-2022</option>
                  <option value="CA">Thứ Hai ,12-09-2022</option>
                  <option value="FR">Thứ Hai ,12-09-2022</option>
                  <option value="DE">Thứ Hai ,12-09-2022y</option>
                </select>
              </div>
              <div className="my-4">
                <div className="ml-7 mt-5">
                  <h2>GIỚI HẠN TRUY LÙNG- C18 </h2>
                </div>
                <div className="flex flex-wrap mx-10 mt-2">
                  <ul className="flex flex-wrap item-center ">
                    <li className="border-2 border-red-700 p-2 ml-2 rounded-lg mt-1 ">
                      <a href="">9:35</a>
                    </li>
                    <li className="border-2 border-red-700  p-2 ml-2 rounded-lg  mt-1">
                      <a href="">9:35</a>
                    </li>
                    <li className="border-2 border-red-700  p-2 ml-2 rounded-lg  mt-1">
                      <a href="">9:35</a>
                    </li>
                    <li className="border-2 border-red-700  p-2 ml-2 rounded-lg  mt-1">
                      <a href="">9:35</a>
                    </li>
                    <li className="border-2 border-red-700  p-2 ml-2 rounded-lg  mt-1">
                      <a href="">9:35</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
