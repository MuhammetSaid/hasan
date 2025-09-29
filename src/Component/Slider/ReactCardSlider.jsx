import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./ReactCardSlider.css"

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3} // varsayılan
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000, // 3 saniyede bir otomatik kaydır
                disableOnInteraction: false, // kullanıcı dokunsa bile devam etsin
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="main-side">
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/UBvK4IM.jpeg" alt="" />
                    </div>
                    <div className="text-dev" style={{direction: "rtl", paddingTop: "20px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent:"center"}}>
                        <h2 style={{textAlign: "center"}}>دولة نزيهة وشفافة</h2>
                        <h4 style={{textAlign: "center"}}>
                            نرسخ مفاهيم الحكم الرشيد والرقابة الفعّالة في إدارة المؤسسات وتقديم الخدمات، لضمان النزاهة والعدالة
                        </h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side">
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/UBvK4IM.jpeg" alt="" />
                    </div>
                    <div className="text-dev"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side">
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/UBvK4IM.jpeg" alt="" />
                    </div>
                    <div className="text-dev"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-side">
                    <div className="slide-card-image">
                        <img src="https://i.imgur.com/UBvK4IM.jpeg" alt="" />
                    </div>
                    <div className="text-dev"></div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
