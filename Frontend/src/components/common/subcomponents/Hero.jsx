import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import shoes from '../../../assets/Images/shoes_ui.png';
import Controller from '../../../assets/Images/ui.jpeg';

const Hero = () => {
    return (
        <div className='px-4 py-6'>
            <div className='flex flex-col lg:flex-row'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full lg:w-[65%] h-[200px] sm:h-[300px] lg:h-[400px] rounded-2xl mb-4 lg:mb-0 lg:m-6"
                >
                    <SwiperSlide>
                        <img
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-E-commerce-Product-UI-Design-in-Photoshop-1180x664.jpg"
                            alt="Cup Design"
                            className='w-full h-full object-cover'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={shoes}
                            alt="Custom Mug"
                            className='w-full h-full object-cover'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={Controller}
                            alt="Personalized Mug"
                            className='w-full h-full object-cover'
                        />
                    </SwiperSlide>
                    {/* Add more SwiperSlide components as needed */}
                </Swiper>

                <div className='lg:m-6 lg:h-[400px] lg:w-[35%] flex flex-col space-y-4'>
                    <div className='h-[150px] sm:h-[200px] lg:h-[48%]  rounded-2xl w-full overflow-hidden'>
                        <img
                            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/063cee21-933f-40ef-bad4-2cdabbfccfb5.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='h-[150px] sm:h-[200px] lg:h-[48%]  rounded-2xl w-full overflow-hidden'>
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Cameras/CatTiles/1340x777_new.jpg"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
