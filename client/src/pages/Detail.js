import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [document, setDocument] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id

  const { id } = useParams()
  useEffect(() => {
    API.getDocument(id)
      .then(res => setDocument(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {document.title} by {document.category}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Synopsis</h1>
            <p>
              {document.synopsis}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Categories</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
