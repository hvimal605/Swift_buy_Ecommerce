import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdCart } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const productData = [
  { id: 1, img: 'https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/01/Image3-26.jpg', title: 'Chobani Complete ', rating: 4.0, price: 54.85, oldPrice: 55.8, seller: 'NestFood' },
  { id: 2, img: 'https://files.inkmonk.com/site/20230131_183520865560_2fee55_Bulk-Round-Neck-T-shirt-Printing.jpg', title: 'Product 2', rating: 4.5, price: 30, oldPrice: 35, seller: 'BrandB' },
  { id: 3, img: 'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/India%20LOB/Category%20Images/Men_s-Cotton-T-Shirts_Category-image_1x1', title: 'Product 3', rating: 4.2, price: 25, oldPrice: 28, seller: 'BrandC' },
  { id: 1, img: 'https://onlineframing.in/cdn/shop/files/3777523.jpg?v=1696511732&width=1445', title: 'Chobani Complete ', rating: 4.0, price: 54.85, oldPrice: 55.8, seller: 'NestFood' },
  { id: 2, img: 'https://tse2.mm.bing.net/th?id=OIP.ljzyVqFMSDP3gVn6AytMbQHaE7&pid=Api&P=0&h=180', title: 'Product 2', rating: 4.5, price: 30, oldPrice: 35, seller: 'BrandB' },
  { id: 3, img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Samsung-Galaxy-Unpacked-2022-All-Products.png', title: 'Product 3', rating: 4.2, price: 25, oldPrice: 28, seller: 'BrandC' },
  { id: 1, img: 'https://www.fnp.com/images/pr/m/v200/full-of-qualities-personalised-mug-hand-delivery.jpg', title: 'Chobani Complete ', rating: 4.0, price: 54.85, oldPrice: 55.8, seller: 'NestFood' },
  { id: 2, img: 'https://techychimp.com/wp-content/uploads/2017/09/Important-Tips-to-Buy-Electronic-Products-768x432.jpg', title: 'Product 2', rating: 4.5, price: 30, oldPrice: 35, seller: 'BrandB' },
  { id: 3, img: 'https://files.printo.in/site/20230628_170806087895_a44d88_whitemug-thumbnail.webp', title: 'Product 3', rating: 4.2, price: 25, oldPrice: 28, seller: 'BrandC' },
];

const Categories = () => {
  return (
    <div className='mt-10 bg-gray-100 p-4'>
      <h2 className="text-center text-3xl font-bold mb-6">Categories</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {productData.map(product => (
         <SwiperSlide key={product.id}>
            <Link to={`/Productslist/${product.title}`} > <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-sm text-gray-500">Hodo Foods</p>
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <div className="flex items-center text-yellow-500 mt-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 7.41l6.567-.955L10 1l2.946 5.455 6.567.955-4.757 4.135 1.122 6.545z" />
                  </svg>
                  <span className="text-gray-600 ml-2">{product.rating}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">By <span className="text-green-500">{product.seller}</span></p>
                <div className=' flex justify-between'>
                <div className="flex items-center mt-2">
                  <p className="text-lg font-bold text-green-500">${product.price}</p>
                  <p className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</p>
                </div>
                <button className="mt-4 bg-green-200 text-green-700 py-1 px-3 rounded-full flex items-center justify-end ">
                  <IoMdCart />
                  Add
                </button>
                </div>
                
                
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
