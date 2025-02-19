
import BlogPost from "./blogPost/BlogPost";
import CouponCard from "./coupon/CouponCard";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HomeSlider from "./HomeSlider";
import Newsletter from "./newslater/Newsletter";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    
    return (
        <div>
     
           <HomeSlider></HomeSlider>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
           <CouponCard></CouponCard>
           <BlogPost></BlogPost>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Home;