
import CouponSlider from "../../Components/HomeSection/CouponSlider/CouponSlider";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Slider from "./Slider/Slider";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    
    return (
        <div>
           <Slider></Slider>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
           <CouponSlider></CouponSlider>
        </div>
    );
};

export default Home;