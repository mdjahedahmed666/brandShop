import Banner from "../../components/Banner/Banner";
import Benefit from "../../components/Benefit/Benefit";
import BrandType from "../../components/BrandType/BrandType";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner/>
      <BrandType/>
      <Benefit/>
      <Testimonial/>
    </div>
  )
}

export default Home;