import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';
import apple from '../../assets/partners/Apple.png'
import arduino from '../../assets/partners/Arduino.png'
import canva from '../../assets/partners/canva.png'
import figma from '../../assets/partners/Figma.png'
import cloud from '../../assets/partners/Google Cloud.png'
import google from '../../assets/partners/Google.png'
import mocha from '../../assets/partners/Mocha.png'
import realm from '../../assets/partners/Realm.png'
import slack from '../../assets/partners/Slack.png'
import stackOverflow from '../../assets/partners/Stack Overflow.png'
import unity from '../../assets/partners/Unity.png'
import vSphere from '../../assets/partners/vSphere.png'

const Partners = () => {
  return (
    <div className='flex flex-col gap-10 '>
      <SectionTitle title="Our Partners" subtitle="Proud to be Supported by Industry Leaders"></SectionTitle>
      <div className='my-10'>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={apple} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={arduino} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={canva} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={figma} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={cloud} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={google} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={mocha} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={realm} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={slack} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={stackOverflow} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={unity} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className='w-[150px] pb-10 md:pb-20' src={vSphere} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;