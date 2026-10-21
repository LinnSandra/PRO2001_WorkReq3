import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MediaCard({ id, title, image, description }) {
  return (
    <Card className="media-card h-100">
      <div className="poster-frame">
        <Card.Img variant="top" src={image} alt={title} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="media-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button as={Link} to={`/series/${id}`} className="media-btn mt-auto">
          Les mer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;