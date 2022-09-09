import {Link} from 'react-router-dom'

type Props = {}

const Hometab2 = (props: Props) => {
  return (
    <div>
      <div className='flex my-10'>
      <Link to={`/tab1`}>
        <p className='group uppercase mr-10 text-2xl text-[#797979]'>Phim đang chiếu</p>
      </Link>
      <Link to={`/tab2`}>
        <p className='uppercase text-2xl  border-b-2 border-orange-600'>Phim sắp chiếu</p>
      </Link>
      </div>
      <div className='grid grid-cols-3 gap-10'>
                  
        <div>
            <div className='relative'>
                <div className='tab1_film'>
                    <Link to={`/`}>
                        <div className='tab1_film_img'>
                            <img src="https://cdn.galaxycine.vn/media/2022/9/6/450wx300h_1662435068837.jpg" width={550} alt="" />
                        </div>
                    </Link>
                    <p className='uppercase py-3'>truy lùng tận cùng</p>
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
                            <img src="https://cdn.galaxycine.vn/media/2022/9/6/450wx300h_1662435068837.jpg" width={550} alt="" />
                        </div>
                    </Link>
                    <p className='uppercase py-3'>truy lùng tận cùng</p>
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
                            <img src="https://cdn.galaxycine.vn/media/2022/9/6/450wx300h_1662435068837.jpg" width={550} alt="" />
                        </div>
                    </Link>
                    <p className='uppercase py-3'>truy lùng tận cùng</p>
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
    </div>
  )
}

export default Hometab2