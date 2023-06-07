import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = () => {
  return (
    <div>
<Slider
  dots={false}
  infinite={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
  autoplay={true}
  autoplaySpeed={3000}
  cssEase="linear"
  arrows={false}
>
  {posts.map((post) => (
    <div key={post.id}>
     
    </div>
  ))}
</Slider>

    </div>
  )
}

export default Carrousel