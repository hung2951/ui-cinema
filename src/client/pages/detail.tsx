import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const MovieDetail = (props: Props) => {
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive); 
    };
  return (
    <div>
        <div className={isActive?"opacity-50":""}>
            <div className='mx-auto w-[1200px] min-h-[500px]'>
                <div className='my-5'>
                    <Link to={`/`}><i className="fa-solid fa-house-chimney text-[#ccc] hover:text-[#424242]"></i> </Link>
                    <span className='text-[#ccc] mx-2'>{">"}</span>
                    <span className='uppercase'>Tên phim</span>
                </div>
                <h2 className='text-center text-2xl uppercase'>Chi tiết phim</h2>
                <div className='border-b-2 border-orange-600 w-16 mx-auto mt-1'></div>

                <div className='grid grid-cols-[800px,400px] mt-5 gap-16'>
                    <div className='grid grid-cols-[200px,600px] gap-5'>
                        <div className='relative'>
                            <img width={200} src="https://cdn.galaxycine.vn/media/2022/8/30/1200wx1800h_1661793911854.jpg" alt="" />
                            <button onClick={()=>ToggleClass()}><i className="fa-regular fa-circle-play fa-4x text-[#ccc] absolute top-28 left-16"></i></button>
                        </div>
                        <div>
                            <h2 className='uppercase text-3xl'>LOVE DESTINY THE MOVIE</h2>
                            <div className='border-b border-[#ccc] my-3'></div>
                            <div className='capitalize leading-7'>
                                <p><span className='text-[#868686]'>Đạo diễn</span>: Adisorn Tresirikasem</p>
                                <p><span className='text-[#868686]'>Diễn viên</span>: Ranee Campen, Thanavat Vatthanaputi</p>
                                <p><span className='text-[#868686]'>Thể loại</span>: Hành động</p>
                                <p><span className='text-[#868686]'>Quốc gia</span>: Thái lan</p>
                                <p><span className='text-[#868686]'>Thời lượng</span>: 166 phút</p>
                                <p><span className='text-[#868686]'>Ngày Khởi chiếu</span>: 1/9/2022</p>
                            </div>
                            <Link to={`/`}><button className='mt-5 bg-orange-600 text-white w-[200px] h-10 rounded-md '>Mua vé</button></Link>
                        </div>
                        
                    </div>

                    <div className=''>
                        <h2 className='uppercase text-[#333] font-bold text-xl'>Phim đang chiếu</h2>
                        <div className='border-b-2 border-orange-600 w-20 mt-2 mb-5'></div>
                        <div>
                            <div className='relative'>
                                <div className='group'>
                                    <Link to={`/`}>
                                        <div className='overflow-hidden'>
                                            <img className='group-hover:brightness-50  duration-500' src="https://cdn.galaxycine.vn/media/2022/9/3/1800x1200_1662206721127.jpg" width={350} alt="" />
                                        </div>
                                    </Link>
                                    <p className='uppercase py-3'>KISARAGI STATION</p>
                                    <div className='group-hover:opacity-100 opacity-0'>
                                        <div className=' absolute top-24 left-[135px]'>
                                            <button className='hover:bg-orange-600 hover:border-none hover:text-white text-white uppercase h-10 leading-10 border border-white w-[100px]'>Mua vé</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 '>
                            <h2 className='uppercase text-[#333] font-bold text-2xl'>Nội dung phim</h2>
                            <div className='border-b-2 border-orange-600 w-20 my-3'></div>
                            <div>
                            Gaysorn (Ranee Campen) – tiểu thư sống ở thời Rattanakosin chính là kiếp sau của Karaket ở triều đại Ayutthaya. Có lẽ bởi vậy mà Gaysorn đã chiếm trọn trái tim của Bhop (Thanavat Vatthanaputi) – cũng là hậu duệ của Dej – ngay từ lần đầu gặp mặt. Chàng kỹ sư tài năng đã luôn mơ về một người con gái có gương mặt giống Gaysorn trong suốt 10 năm qua, và nghĩ rằng cô chính là tri kỉ mà mình đang tìm kiếm.
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className={isActive ? "video_active" : "video"}>
            <iframe width="700" height="500" src="https://www.youtube.com/embed/UBgPypHGAqE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <button onClick={()=>ToggleClass()} className={isActive ? "exit_video absolute top-[150px] right-[20%] " : "hidden"}><i className="fa-sharp fa-solid fa-xmark text-black fa-2x"></i></button>
        </div>
    </div>
    
  )
}

export default MovieDetail