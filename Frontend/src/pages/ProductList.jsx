import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/common/subcomponents/ProductCard'; // Adjust the import path accordingly
import { Link } from 'react-router-dom';

const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Brew Express Automatic Coffee Maker',
      price: '$129.00',
      originalPrice: '$149.00',
      label: 'Sale',
      labelColor: 'red',
      rating: '4.7',
      reviews: '45',
    },
    {
      id: 2,
      image: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
      title: 'Deluxe Espresso Machine',
      price: '$199.00',
      originalPrice: '$220.00',
      label: 'New',
      labelColor: 'green',
      rating: '4.9',
      reviews: '30',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg',
      title: 'Classic French Press Coffee Maker',
      price: '$49.00',
      originalPrice: '$59.00',
      label: '',
      labelColor: '',
      rating: '4.3',
      reviews: '60',
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgJVlsBrDgUeXa1Z3suxQUCAz1kEeonR2Uw&s',
      title: 'Premium Cold Brew Maker',
      price: '$89.00',
      originalPrice: '$100.00',
      label: '',
      labelColor: '',
      rating: '4.6',
      reviews: '25',
    },
    {
      id: 5,
      image: 'https://www.jiomart.com/images/product/original/rvowvf0akl/eyebogler-teal-tshirts-men-tshirt-tshirt-for-men-tshirt-mens-tshirt-men-s-polo-neck-regular-fit-half-sleeves-colorblocked-t-shirt-product-images-rvowvf0akl-0-202402121853.jpg?im=Resize=(500,630)',
      title: 'Compact Travel Coffee Maker',
      price: '$69.00',
      originalPrice: '$79.00',
      label: 'Limited Edition',
      labelColor: 'blue',
      rating: '4.4',
      reviews: '50',
    },
    {
      id: 6,
      image: 'https://www.boat-lifestyle.com/cdn/shop/products/main_black_357b6c8e-1332-4864-bf5c-b83ca9caf4bc_600x.png?v=1641980343',
      title: 'Electric Kettle with Temperature Control',
      price: '$79.00',
      originalPrice: '$89.00',
      label: '',
      labelColor: '',
      rating: '4.8',
      reviews: '35',
    },
    {
      id: 7,
      image: 'https://fcity.in/images/products/83706841/ysskw_512.jpg',
      title: 'Siphon Coffee Maker Set',
      price: '$249.00',
      originalPrice: '$270.00',
      label: 'Best Seller',
      labelColor: 'orange',
      rating: '4.9',
      reviews: '20',
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/originals/b8/01/d8/b801d86dcd8f8cfb3086a906fe72fef8.jpg',
      title: 'Smart Coffee Brewer with WiFi',
      price: '$179.00',
      originalPrice: '$199.00',
      label: '',
      labelColor: '',
      rating: '4.6',
      reviews: '15',
    },
    {
      id: 9,
      image: 'https://cdn.shopify.com/s/files/1/1859/8979/files/image17_3cfc7cfb-8215-40b7-a297-db7285d5375b.png?v=1610384290',
      title: 'Ceramic Pour-Over Coffee Maker',
      price: '$39.00',
      originalPrice: '$49.00',
      label: '',
      labelColor: '',
      rating: '4.2',
      reviews: '70',
    },
    {
      id: 10,
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how_20to_20start_20a_20clothing_20brand.png?v=1693935729',
      title: 'Stainless Steel French Press',
      price: '$59.00',
      originalPrice: '$69.00',
      label: 'Trending',
      labelColor: 'purple',
      rating: '4.5',
      reviews: '40',
    },
    {
      id: 11,
      image: 'https://m.media-amazon.com/images/I/61-j97st72L._AC_UY1100_.jpg',
      title: 'Vintage Manual Coffee Grinder',
      price: '$89.00',
      originalPrice: '$99.00',
      label: '',
      labelColor: '',
      rating: '4.4',
      reviews: '27',
    },
    {
      id: 12,
      image: 'https://m.media-amazon.com/images/I/41bkMtA7usL._SX300_SY300_QL70_FMwebp_.jpg',
      title: 'Portable Cold Brew Coffee Maker',
      price: '$99.00',
      originalPrice: '$120.00',
      label: '',
      labelColor: '',
      rating: '4.5',
      reviews: '22',
    }
  ];
  
  

function ProductList() {
    const { id } = useParams();
  return (
    <>
    <div>
    <h1 className="flex  font-bold text-2xl m-4 flex-wrap justify-center" >Product List for Category: {id}</h1>
    </div>
    <Link to={'/productview'}>
    <div className="flex flex-wrap justify-center gap-4">
         
        
      {products.map((product) => (
        
        <ProductCard product={product}  />
      
      ))}
    </div>
    </Link>
    </>
  );
}

export default ProductList;
