import { HiArrowSmLeft } from "react-icons/hi"
import { Badge, Container, Row, Col } from "react-bootstrap";
import './article.css';

export default function ArticleTemplate(props) {
  const { data } = props;

  const redirect = () => {
    window.location.href = "/#portfolio";
  };

  return (
    <>
      <button className="back-button" onClick={redirect}>
        <HiArrowSmLeft />
      </button>
      <Container>
        <Row>
          <Col className="article-container">
            <div className="blog-post">
              <h2 className="d-inline-block m-0">{data.title}</h2>
              <p className="d-inline-block m-0">{data.date}</p>
              <div className="bagdes-list">
                {data.technologies.map((technologie, index) => (
                  <Badge key={index} className="m-1">{technologie}</Badge>
                ))}
              </div>
              <br />
              <h3>Concept</h3>
              <p className="blog-meta">
                {data.concept}
              </p>
              {props.children}
            </div>
          </Col>
          <Col xs lg="2">
            Image
          </Col>
        </Row>
      </Container>
    </>

  );
}
