import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bannerImg1 from '../../assets/1.jpg'
import bannerImg2 from '../../assets/2.jpg'
import bannerImg3 from '../../assets/3.jpg'
import bannerImg4 from '../../assets/4.jpg'
import bannerImg5 from '../../assets/5.jpg'
import bannerImg6 from '../../assets/6.jpg'
const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {/* SLIDE 1 */}
                <SwiperSlide>
                    <div className='h-[500px] grid grid-cols-3'>
                        <div>
                            <img className='w-full h-full' src={bannerImg1} alt="" />
                        </div>
                        <div className='bg-gradient-to-r from-[#6A9ECF] to-[#4C78A8] flex justify-center items-center flex-col'>
                            <h2 className='text-2xl md:text-3xl font-bold text-center text-[#F0F5F9]'>
                                Learning, On Your Terms
                            </h2>
                            <p className='text-md font-semibold text-center text-[#D0D6E4]'>
                                Access high-quality courses designed to fit into your busy life.
                            </p>
                        </div>
                        <div>
                            <img className='w-full h-full' src={bannerImg2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* SLIDE 2 */}
                <SwiperSlide>
                    <div className='h-[500px] grid grid-cols-3'>
                        <div>
                            <img className='w-full h-full' src={bannerImg3} alt="" />
                        </div>
                        <div className='bg-gradient-to-r from-[#4C78A8] to-[#6A9ECF] flex justify-center items-center flex-col'>
                            <h2 className='text-2xl md:text-3xl font-bold text-center text-[#F0F5F9] flex justify-center items-center flex-col'>
                                Shikha O Unnayan
                            </h2>
                            <p className='text-md font-semibold text-center text-[#D0D6E4]'>
                                A platform dedicated to empowering Bangladesh's next generation of leaders.
                            </p>
                        </div>
                        <div>
                            <img className='w-full h-full' src={bannerImg4} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* SLIDE 3 */}
                <SwiperSlide>
                    <div className='h-[500px] grid grid-cols-3'>
                        <div>
                            <img className='w-full h-full' src={bannerImg5} alt="" />
                        </div>
                        <div className='bg-gradient-to-r from-[#6A9ECF] to-[#4C78A8] flex justify-center items-center flex-col'>
                            <h2 className='text-2xl md:text-3xl font-bold text-center text-[#F0F5F9]'>
                                Learn. Grow. Succeed.
                            </h2>
                            <p className='text-md font-semibold text-center text-[#D0D6E4]'>
                                Access industry-relevant courses and enhance your career prospects.
                            </p>
                        </div>
                        <div>
                            <img className='w-full h-full' src={bannerImg6} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;