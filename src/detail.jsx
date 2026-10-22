import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { series } from "./data";

function Detail() {
  const { id } = useParams();
  const item = series.find((s) => s.id === Number(id));

  if (!item) {
    return (
      <Container className="py-5">
        <p>Fant ikke serien.</p>
        <Link to="/" className="back-link">Tilbake til galleriet</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="detail-row g-4">
        <Col md={6} className="d-flex">
          <img className="detail-img" src={item.image} alt={item.title} />
        </Col>

        <Col md={6} className="d-flex">
          <div className="plaque w-100">
            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-years">{item.years}</p>
            <p className="detail-text">{item.details}</p>
            <Link to="/" className="back-link">Tilbake til galleriet</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;