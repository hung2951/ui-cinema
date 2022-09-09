import {Link} from 'react-router-dom'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-[#1a1a1a] min-h-[200px] mt-10'>
        <div className='mx-auto w-[1200px] py-4'>
            <div>
                <ul className='flex justify-center text-white'>
                    <li className='px-2'>Chính sách</li>
                    <div className='text-[#555]'>|</div>
                    <li className='px-2'>Lịch chiếu</li>
                    <div className='text-[#555]'>|</div>
                    <li className='px-2'>Tin tức</li>
                    <div className='text-[#555]'>|</div>
                    <li className='px-2'>Giá vé</li>
                    <div className='text-[#555]'>|</div>
                    <li className='px-2'>Hỏi đáp</li>
                    <div className='text-[#555]'>|</div>
                    <li className='px-2'>Liên hệ</li>
                </ul>
            </div>
            <div className='flex justify-center my-5'>
                <Link to={`/`}><p className='px-1 text-[#9f9f9f]'><i className="fa-solid fa-envelope fa-2x"></i></p></Link>
                <Link to={`/`}><p className='px-1 text-[#9f9f9f]'><i className="fa-brands fa-google-plus fa-2x"></i></p></Link>
                <Link to={`/`}><p className='px-1 text-[#9f9f9f]'><i className="fa-brands fa-facebook fa-2x"></i></p></Link>
                <Link to={`/`}><p className='px-1 text-[#9f9f9f]'><i className="fa-brands fa-youtube fa-2x"></i></p></Link>
            </div>
            <div className='text-white text-center'>
                <p>Địa chỉ: Phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội, Việt Nam. </p>
                <p>Bản quyền thuộc trung tâm chiếu phim SunCinema.</p>
                <p>Giấy phép số: 224/GP- TTĐT ngày 29/05/2021 - Chịu trách nhiệm: Nguyễn Văn A - Giám đốc.</p>
                <p>Hotline: 1900 2905.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer