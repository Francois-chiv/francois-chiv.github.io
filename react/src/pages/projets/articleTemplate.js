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
            </div>
          </Col>
          <Col xs lg="2">
            {data.imgPath && <img src={data.imgPath} height="80%"/>}
          </Col>
          <Section contents={data.contents} />
        </Row>
        {props.children}
      </Container>
    </>
  );
}


function Section({ contents }) {
  return (
    <>
      {contents.map((paragraph, index) => (
        <Row key={index}>
          <Col className="article-container">
            <h3>{paragraph.title}</h3>
            <p className="blog-meta">
              {paragraph.text}
            </p>
          </Col>
          <Col xs lg="2">
            {paragraph.imgPath && <img src={paragraph.imgPath} max-height="80%"/>}
          </Col>
        </Row>
      ))}
    </>
  );
}