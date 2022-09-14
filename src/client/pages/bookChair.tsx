import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const BookChair = (props: Props) => {
  return (
    <div className='mx-auto w-[1200px]'>
      <div className='text-center uppercase'>
        <h2 className='text-3xl mt-28 font-bold text-[#292929]'>Chọn ghế ngồi</h2>
        <h3 className='text-xl mt-10'>Bạn đã chọn phim: <span className='uppercase text-orange-600'>GIỚI HẠN TRUY LÙNG- C18</span></h3>
        <div className=' mt-5'>
          <p>Phòng chiếu: 1</p>
          <p>Suất chiếu: 10:00 - Thứ 2 14/05/2022</p>
        </div>
      </div>

      <div className='mt-20 grid grid-cols-[900px,300px] gap-10 '>
        <div className='border border-[#ccc] rounded-md p-10'>
          <p>Để chọn ghế vui lòng chọn ghế ưa thích theo icon</p>
          <p>Click tiếp vào ghế đã chọn để xoá lựa chọn</p>
          <div className='my-10'>
            <img className='mx-auto' src="https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/img49.png" alt="" />
          </div>

          {/* chair */}
          <div className='relative my-4'>
            <p className='absolute left-1'>A</p>
            <div className='absolute top-0 right-1'>A</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          
          <div className='relative my-4'>
            <p className='absolute left-1'>B</p>
            <div className='absolute top-0 right-1'>B</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>C</p>
            <div className='absolute top-0 right-1'>C</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>D</p>
            <div className='absolute top-0 right-1'>D</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>E</p>
            <div className='absolute top-0 right-1'>E</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>F</p>
            <div className='absolute top-0 right-1'>F</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>G</p>
            <div className='absolute top-0 right-1'>G</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>H</p>
            <div className='absolute top-0 right-1'>H</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>I</p>
            <div className='absolute top-0 right-1'>I</div>
            <div className='chair'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>J</p>
            <div className='absolute top-0 right-1'>J</div>
            <div className='chair'>
              <span><button className='active'>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
              <span><button>7</button></span>
              <span><button>8</button></span>
              <span><button>8</button></span>
              <span><button>10</button></span>
              <span><button>11</button></span>
              <span><button>12</button></span>
              <span><button>13</button></span>
              <span><button>14</button></span>
              <span><button>15</button></span>
            </div>
            
          </div>
          <div className='relative my-4'>
            <p className='absolute left-1'>K</p>
            <div className='absolute top-0 right-1'>K</div>
            <div className='chair_K'>
              <span><button>1</button></span>
              <span><button>2</button></span>
              <span><button>3</button></span>
              <span><button>4</button></span>
              <span><button>5</button></span>
              <span><button>6</button></span>
            </div>
            
          </div>
          {/* end chair */}
          <div className='my-10 flex justify-around mx-20'>
            <div className='flex'>
              <p className='w-5 h-5 bg-gray-400'></p>
              <span> Ghế Thường</span>
            </div>
            <div className='flex'>
              <p className='w-5 h-5 bg-blue-800'></p>
              <span> Ghế VIP</span>
            </div>
            <div className='flex'>
              <p className='w-5 h-5 bg-pink-400'></p>
              <span> Ghế Đôi</span>
            </div>
            <div className='flex'>
              <p className='w-5 h-5 bg-green-800'></p>
              <span> Ghế Đã Chọn</span>
            </div>
            <div className='flex'>
              <p className='w-5 h-5 bg-red-600'></p>
              <span> Ghế Đã Bán</span>
            </div> 
          </div>
        </div>
        <div className='h-[598px] bg-[url(https://chieuphimquocgia.com.vn/Themes/RapChieuPhim/Content/content.v2/images/bg04.png)]'>
          <div className='text-center'>
            <Link to={`#`}>
              <button className='rounded-3xl mt-14 border border-white text-white w-40 h-12'>Chọn lại phim</button>
            </Link>
          </div>
          <div>
            <img className='mx-auto w-[200px] mt-2' src="https://chieuphimquocgia.com.vn/content/images/0016606_0.jpeg" alt="" />
          </div>
          <div className='text-white px-3 mt-5'>
            <p>Ghế đã chọn: D3,D5</p>
            <div className='border border-white px-3 my-2'></div>
            <p>Tổng: <span className='text-red-600 text-2xl pl-5'>200.000đ</span></p>
            <div className='text-center'>
             <button className='rounded-3xl my-5 bg-red-600 border border-white text-white w-36 h-12'>Thanh Toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookChair