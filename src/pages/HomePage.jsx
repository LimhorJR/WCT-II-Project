import React from 'react'
import Slider from '../Component/Slider'
import DiscountProduct from './HomePage/DiscountProduct'
import TopProduct from './HomePage/TopProduct'
import NewProduct from './HomePage/NewProduct'
import Advertisment from './HomePage/Advertisment'



const products = [


  {
    id: 1,
    name: 'VOLLEYBALL',
    href: '/volleyball',
    imageSrc: 'https://cdn.britannica.com/81/198481-050-10CED2D9/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg',
    
  },
  {
    id: 2,
    name: 'BASKETBALL',
    href: '#',
    imageSrc: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/ef694d9b-8d0b-4d92-9a6c-dbdf5db61071/nike-basketball.jpg',
    
  },
  {
    id: 3,
    name: 'FOOTBALL',
    href: '#',
    imageSrc: 'https://www.lestagelaw.com/wp-content/uploads/2023/08/2020-12-08T214604Z_1790563263_UP1EGC81OGSC6_RTRMADP_3_SOCCER-CHAMPIONS-FCB-JUV-REPORT-e1607466044149.jpg',
    
  },
  {
    id: 4,
    name: 'CAMPING',
    href: '#',
    imageSrc: 'https://static.toiimg.com/photo/100182318.cms',
    
  },
  {
    id: 5,
    name: 'TENNIS',
    href: '#',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg/800px-2013_Australian_Open_-_Guillaume_Rufin.jpg',
    
  },
  {
    id: 6,
    name: 'RUNNING',
    href: '#',
    imageSrc: 'https://runningmagazine.ca/wp-content/uploads/2021/10/640px-DOH50265_200m_men_final_48911163797.jpg',
    
  },
]
const HomePage = () => {
  return (    
    <div>
      <div className="justify-center items-start mx-20 gap-4 mt-24">
          <Slider />
          <div className='justify-center'>
            <h1 className='text-center font-bold text-3xl'>SUPER SPORTS</h1>
            <h2 className='text-center text-2xl'>LOW-PRICED SPORTSWEAR IN HIGH QUALITY BY FAMOUS BRANDS</h2>
            <h3 className='text-center text-1xl'>We love sports and good deals! At SportCenter, we provide a huge range of carefully chosen sportswear and accessories at incredibly reasonable costs. We have everything that will quicken the heart of your athlete, from matching clothing and non-slip shoes to club goods!</h3>
          </div>
          <DiscountProduct/>
          <TopProduct/>
          <NewProduct/>
          <Advertisment/>
      </div>
    </div>


     



        
 
  )
}

export default HomePage