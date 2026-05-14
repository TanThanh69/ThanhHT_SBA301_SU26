import { Carousel, Container } from 'react-bootstrap';
import { listBanner } from '../data/banners';

function OrchidCarousel() {
  return (
    <Container className="mt-4">
      <Carousel fade interval={3000} pause="hover">
        {listBanner.map((banner) => (
          <Carousel.Item key={banner.id} style={{ height: '400px' }}>
            <img
              className="d-block w-100 h-100"
              src={banner.img}
              alt={banner.title}
              style={{ objectFit: 'cover', borderRadius: '15px' }}
            />
            <Carousel.Caption style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
              <h3>{banner.title}</h3>
              <p>{banner.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default OrchidCarousel;