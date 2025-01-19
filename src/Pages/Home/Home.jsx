
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Slider from "./Slider/Slider";
import TrendingProducts from "./TrendingProducts/TrendingProducts";


const Home = () => {
    
    return (
        <div>
           <Slider></Slider>
           <FeaturedProducts></FeaturedProducts>
           <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;