import './logo-list.css';
import logo1 from '../../static/images/logo1.png';
import logo2 from '../../static/images/logo2.png';
import logo3 from '../../static/images/logo3.png';
import logo4 from '../../static/images/logo4.png';
import LogoItem from '../logo-item/LogoItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export type LogoType = {
  img: string;
  name: string;
  category: string;
  price: string;
};

const logoList: LogoType[] = [
  {
    img: logo1,
    name: 'CreativePulse',
    category: 'Мода',
    price: '80 000 ₸',
  },
  {
    img: logo2,
    name: 'CreativePulse',
    category: 'Мода',
    price: '80 000 ₸',
  },
  {
    img: logo3,
    name: 'CreativePulse',
    category: 'Мода',
    price: '80 000 ₸',
  },
  {
    img: logo4,
    name: 'CreativePulse',
    category: 'Мода',
    price: '80 000 ₸',
  },
];

const LogoList = () => {
  return (
    <div className="logo-list-container">
      <p className="logo-list-title">
        Вдохновение в тренде: Логотипы для фэшн-индустрии
      </p>
      <div className="container">
        <div className="logo-list">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation
            className="logo-list-swiper"
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {logoList.map((logo) => (
              <SwiperSlide key={logo.name}>
                <LogoItem logoItem={logo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LogoList;
