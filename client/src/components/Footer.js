import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


function Footer() {
    return (
        <footer>
        <Container>
            <Row>
                <Col className= 'text-centre py-3'> Copyright &copy; Reserved</Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer
