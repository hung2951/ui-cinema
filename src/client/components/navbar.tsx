import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-12 w-full'>
        <div className='mx-auto w-[1200px] '>
            <ul className='relative flex justify-around text-white uppercase leading-[48px]'>
                <li className='hover:text-orange-600 duration-500'>Trang chủ</li>
                <div>|</div>
                <li className='group'><span className='group-hover:text-orange-600 duration-500'>Phim <i className="fa-solid fa-caret-down pl-2"></i></span> 
                  <div className='mt-0 w-full z-10 min-h-[300px] absolute left-0 bg-black opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all decoration-slate-500'>
                    <div className='ml-10'>
                      <div>
                        <h2>Phim đang chiếu</h2>
                        <div className='border-t-2 border-orange-600 w-20 mb-5'></div>
                        <div className='grid grid-cols-4 gap-4'>
                          <div className='relative'>
                              <div className='navbar_film'>
                                <div className='navbar_film_img'>
                                  <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={250} alt="" />
                                </div>
                                <p className='uppercase text-sm pt-3'>KISARAGI STATION</p>
                                <div className='navbar_film_btn absolute top-14 left-20'>
                                  <button className='hover:bg-orange-600 hover:border-none uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                </div>
                              </div>
                          </div>
                          <div className='relative'>
                              <div className='navbar_film'>
                                <div className='navbar_film_img'>
                                  <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={250} alt="" />
                                </div>
                                <p className='uppercase text-sm pt-3'>KISARAGI STATION</p>
                                <div className='navbar_film_btn absolute top-14 left-20'>
                                  <button className='hover:bg-orange-600 hover:border-none uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                </div>
                              </div>
                          </div>
                          <div className='relative'>
                              <div className='navbar_film'>
                                <div className='navbar_film_img'>
                                  <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={250} alt="" />
                                </div>
                                <p className='uppercase text-sm pt-3'>KISARAGI STATION</p>
                                <div className='navbar_film_btn absolute top-14 left-20'>
                                  <button className='hover:bg-orange-600 hover:border-none uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                </div>
                              </div>
                          </div>
                          <div className='relative'>
                              <div className='navbar_film'>
                                <div className='navbar_film_img'>
                                  <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={250} alt="" />
                                </div>
                                <p className='uppercase text-sm pt-3'>KISARAGI STATION</p>
                                <div className='navbar_film_btn absolute top-14 left-20'>
                                  <button className='hover:bg-orange-600 hover:border-none uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2>Phim sắp chiếu</h2>
                        <div className='border-t-2 border-orange-600 w-20 mb-5'></div>
                        <div className='grid grid-cols-4 gap-4'>
                          <div className='relative'>
                              <div className='navbar_film'>
                                <div className='navbar_film_img'>
                                  <img src="https://cdn.galaxycine.vn/media/2022/8/29/1800-x-1200_1661753256459.jpg" width={250} alt="" />
                                </div>
                                <p className='uppercase text-sm pt-3 pb-10'>sờ bai đờ men</p>
                                <div className='navbar_film_btn absolute top-14 left-20'>
                                  <button className='hover:bg-orange-600 hover:border-none uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div>|</div>
                <li className='hover:text-orange-600 duration-500'>Mua vé</li>
                <div>|</div>
                <li className='hover:text-orange-600 duration-500'>Giá vé</li>
                <div>|</div>
                <li className='hover:text-orange-600 duration-500'>Hỗ trợ</li>
                <div>|</div>
                <li className='hover:text-orange-600 duration-500'>Thành viên</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar