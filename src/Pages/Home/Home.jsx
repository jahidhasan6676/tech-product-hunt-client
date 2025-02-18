
import CouponCard from "./coupon/CouponCard";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HomeSlider from "./HomeSlider";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    
    return (
        <div>
     
           <HomeSlider></HomeSlider>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
           <CouponCard></CouponCard>
        </div>
    );
};

export default Home;