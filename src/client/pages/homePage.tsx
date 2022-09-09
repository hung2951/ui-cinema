import React from 'react'
import SlideShow from '../components/slideShow'
import {Link} from 'react-router-dom'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <SlideShow/>
        <div className='film mx-auto w-[1200px] mt-5'>
            {/* Danh sách phim */}
            <div className='flex my-10'>
                <Link to={`/tab1`}>
                    <p className='uppercase text-2xl mr-10 border-b-2 border-orange-600'>Phim đang chiếu</p>
                </Link>
                <Link to={`/tab2`}>
                    <p className='group uppercase text-2xl text-[#797979]'>Phim sắp chiếu</p>
                    <p className='border-b-2 w-0 border-orange-600 group-hover:w-full'></p>
                </Link>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <div className='relative'>
                        <div className='tab1_film'>
                            <Link to={`/`}>
                                <div className='tab1_film_img'>
                                    <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={550} alt="" />
                                </div>
                            </Link>
                            <p className='uppercase py-3'>KISARAGI STATION</p>
                            <div className='tab1_film_btn absolute top-24 left-[145px]'>
                                <button className='hover:bg-orange-600 hover:border-none hover:text-white uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                            </div>
                            <div className='tab1_film_btn absolute text-center top-40 left-[110px] text-black capitalize'>
                                <p>Thể loại: hành động</p>
                                <p>Khởi chiếu: 20/20/2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className='relative'>
                        <div className='tab1_film'>
                            <Link to={`/`}>
                                <div className='tab1_film_img'>
                                    <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={550} alt="" />
                                </div>
                            </Link>
                            <p className='uppercase py-3'>KISARAGI STATION</p>
                            <div className='tab1_film_btn absolute top-24 left-[145px]'>
                                <button className='hover:bg-orange-600 hover:border-none hover:text-white uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                            </div>
                            <div className='tab1_film_btn absolute text-center top-40 left-[110px] text-black capitalize'>
                                <p>Thể loại: hành động</p>
                                <p>Khởi chiếu: 20/20/2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='relative'>
                        <div className='tab1_film'>
                            <Link to={`/`}>
                                <div className='tab1_film_img'>
                                    <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={550} alt="" />
                                </div>
                            </Link>
                            <p className='uppercase py-3'>KISARAGI STATION</p>
                            <div className='tab1_film_btn absolute top-24 left-[145px]'>
                                <button className='hover:bg-orange-600 hover:border-none hover:text-white uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                            </div>
                            <div className='tab1_film_btn absolute text-center top-40 left-[110px] text-black capitalize'>
                                <p>Thể loại: hành động</p>
                                <p>Khởi chiếu: 20/20/2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='relative'>
                        <div className='tab1_film'>
                            <Link to={`/`}>
                                <div className='tab1_film_img'>
                                    <img src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={550} alt="" />
                                </div>
                            </Link>
                            <p className='uppercase py-3'>KISARAGI STATION</p>
                            <div className='tab1_film_btn absolute top-24 left-[145px]'>
                                <button className='hover:bg-orange-600 hover:border-none hover:text-white uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                            </div>
                            <div className='tab1_film_btn absolute text-center top-40 left-[110px] text-black capitalize'>
                                <p>Thể loại: hành động</p>
                                <p>Khởi chiếu: 20/20/2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='px-2 py-1 text-red-600 hover:text-red-400'><Link to={`/`}>Xem thêm</Link> <i className="fa-sharp fa-solid fa-arrow-right"></i></button>
            </div>
            {/* tin tức */}
            <div className='grid grid-cols-2 gap-5 mt-10'>
                <div className='news mr-4'>
                    <h2 className='uppercase mb-2 font-bold text-[#3a3a3a]'>Bình luận phim</h2>
                    <div className='border-b-[3px] border-orange-600 w-[150px]'></div>

                    <Link to={`/`}>
                        <div className='group flex mt-8'>
                            <div className='group-hover:opacity-90'>
                                <img className='h-[150px] w-[350px]' src="https://cdn.galaxycine.vn/media/2022/8/14/preview-black-adam-dwayne-johnson-thanh-phan-anh-hung-cuc-suc-6_1660454758375.jpg" alt="" />
                            </div>
                            <div className='pl-4'>
                                <p className='text-lg group-hover:text-orange-600'>[Preview] Black Adam: Dwayne Johnson Thành Phản Anh Hùng Cục Súc?</p>
                                <p className='text-sm text-[#838383] pt-2'>Gã ác nhân nổi đình nổi đám trên truyện tranh DC lại do ngôi sao hành động hạng A Dwayne Johnson thủ vai!</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='review_film'>
                    <h2 className='uppercase mb-2 font-bold text-[#3a3a3a]'>Tin tức</h2>
                    <div className='border-b-[3px] border-orange-600 w-[150px]'></div>

                    <Link to={`/`}>
                        <div className='group flex mt-8'>
                            <div className='group-hover:opacity-90'>
                                <img className='h-[150px] w-[350px]' src="https://chieuphimquocgia.com.vn/content/images/thumbs/0016574_215.jpeg" alt="" />
                            </div>
                            <div className='pl-4'>
                                <p className='text-lg group-hover:text-orange-600'>QUÀ TẶNG MAY MẮN MÙA THI!!!</p>
                                <p className='text-sm text-[#838383] pt-2'>“Chúc các bạn 2k4 vượt qua kỳ thi thành công rực rỡ”, Trung tâm Chiếu phim Quốc gia chúng mình dành tặng 300 phần quà cho các thí sinh vừa tham dự kì thi tốt nghiệp Trung học phổ thông 2022 nha!...</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* khuyến mãi */}

            <div>
                <h2 className='uppercase text-xl mt-10 mb-2 font-bold text-[#3a3a3a]'>Khuyến mãi - sự kiện</h2>
                <div className='border-b-[3px] border-orange-600 w-[150px]'></div>

                <div className='grid grid-cols-3 gap-5 mt-10'>
                    <div>
                        <img src="https://www.galaxycine.vn/media/2022/8/26/duatopsamsung-digital-1135x660_1661486090736.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HomePage