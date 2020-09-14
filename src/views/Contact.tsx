import React from 'react';
import Background from '../components/Background'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button, Container } from 'react-bootstrap'

class Contact extends React.Component {
    render() {
      return (
        <Background>
          <Container className="h-100">
            <Row className='h-100'>
              <Col md={{span: 6, offset: 3}} xs={12} className="my-auto">
                <div className='text-center'>
                  <h2 style={{color: '#FFFFFF', fontSize: '65px'}}>Contact Me</h2>
                </div>
              <Form>
                <Form.Group controlId="formContact">
                  <Form.Label style={style.nameStyle}>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text style={{color: '#FFFFFF'}} >
                  We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label style={style.nameStyle}>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Normal text"/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label style={style.nameStyle}>Content</Form.Label>
                  <Form.Control as="textarea"/>
                </Form.Group>
                <Button size='lg' variant="outline-light" className='ml-3 float-right'>
                Submit
                </Button>
              </Form>
              </Col>
            </Row>
          </Container>
        </Background>
      )
    }
}

const style = {
  nameDiv: {
    height: '90%',
    // width: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  nameStyle: {
    fontSize: '30px',
    color: '#FFFFFF'
  }
}

export default Contact;