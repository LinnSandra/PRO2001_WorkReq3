import { Container, Row, Col } from "react-bootstrap";
import MediaCard from "./mediacard";
import { series } from "./data";

function Gallery() {
  return (
    <Container className="py-5">
      <header className="page-header">
        <h1>EN VEGG FULL AV FAVORITTER</h1>
        <p>En god blanding av komedie, drama og bittelitt action 🎬</p>
      </header>
      <Row xs={1} md={2} lg={3} className="g-5">
        {series.map((s) => (
          <Col key={s.id}>
            <MediaCard
              id={s.id}
              title={s.title}
              image={s.image}
              description={s.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;