import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Prepare = (props) => {

  return(
    <>
      <Container className="p-4 bg gray">

        <main className="bg-white my-3">
          <div className="mb-4">
            <Row
            >
              <Col>
              <h4 className="text-center mb-4">現在準備中です</h4>

              </Col>

            </Row>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Prepare;