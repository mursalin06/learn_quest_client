import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerImg1 from '../../assets/1.jpg';
import bannerImg2 from '../../assets/2.jpg';
import bannerImg3 from '../../assets/3.jpg';
import bannerImg4 from '../../assets/4.jpg';
import bannerImg5 from '../../assets/5.jpg';
import bannerImg6 from '../../assets/6.jpg';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={window.innerWidth >= 768}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* SLIDE 1 */}
                <SwiperSlide>
                    <div className='md:h-[500px] grid grid-cols-2 md:grid-cols-3'>
                        {/* First Image */}
                        <div className='h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg1} alt="" />
                        </div>

                        {/* Text Section */}
                        <div className='bg-gradient-to-r from-[#6A9ECF] to-[#4C78A8] flex justify-center items-center flex-col p-5 md:py-0'>
                            <h2 className='text-xl md:text-3xl font-bold text-center text-[#F0F5F9]'>
                                Learning, On Your Terms
                            </h2>
                            <p className='text-sm md:text-md font-semibold text-center text-[#D0D6E4]'>
                                Access high-quality courses designed to fit into your busy life.
                            </p>
                        </div>

                        {/* Second Image (Hidden on small screens) */}
                        <div className='hidden md:block h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 2 */}
                <SwiperSlide>
                    <div className='md:h-[500px] grid grid-cols-2 md:grid-cols-3'>
                        <div className='h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg3} alt="" />
                        </div>
                        <div className='bg-gradient-to-r from-[#4C78A8] to-[#6A9ECF] flex justify-center items-center flex-col p-5 md:py-0'>
                            <h2 className='text-xl md:text-3xl font-bold text-center text-[#F0F5F9]'>
                                Shikha O Unnayan
                            </h2>
                            <p className='text-sm md:text-md font-semibold text-center text-[#D0D6E4]'>
                                A platform dedicated to empowering Bangladesh's next generation of leaders.
                            </p>
                        </div>
                        <div className='hidden md:block h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg4} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* SLIDE 3 */}
                <SwiperSlide>
                    <div className='md:h-[500px] grid grid-cols-2 md:grid-cols-3'>
                        <div className='h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg5} alt="" />
                        </div>
                        <div className='bg-gradient-to-r from-[#6A9ECF] to-[#4C78A8] flex justify-center items-center flex-col p-5 md:py-0'>
                            <h2 className='text-xl md:text-3xl font-bold text-center text-[#F0F5F9]'>
                                Learn. Grow. Succeed.
                            </h2>
                            <p className='text-sm md:text-md font-semibold text-center text-[#D0D6E4]'>
                                Access industry-relevant courses and enhance your career prospects.
                            </p>
                        </div>
                        <div className='hidden md:block h-[250px] md:h-auto'>
                            <img className='w-full h-full object-cover' src={bannerImg6} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Hide Swiper Navigation Arrows on Small Devices */}
            <style>
                {`
                @media (max-width: 768px) {
                    .swiper-button-next, .swiper-button-prev {
                        display: none !important;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default Banner;
