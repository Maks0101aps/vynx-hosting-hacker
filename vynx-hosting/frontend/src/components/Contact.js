import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    
    try {
      const response = await submitContact(formData);
      setSuccess(response.data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">CONTACT US</h2>
        
        {success && (
          <Alert variant="success" className="text-center">
            {success}
          </Alert>
        )}
        
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <h3 className="mb-4">GET IN TOUCH</h3>
            <p>
              Have questions about our services? Need help with your hosting setup? 
              Our team of experts is ready to assist you.
            </p>
            
            <div className="mt-4">
              <p><strong>Email:</strong> support@vynx.host</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 1337 Hacker Way, San Francisco, CA 94103</p>
            </div>
            
            <div className="mt-4">
              <h4>SECURITY REPORTS</h4>
              <p>
                Found a security vulnerability? Report it to our team responsibly at:
                <br />
                <strong>security@vynx.host</strong>
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Enter your name" 
                  required 
                  style={{ backgroundColor: '#000', color: '#0f0', borderColor: '#0f0' }}
                  disabled={loading}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Enter your email" 
                  required 
                  style={{ backgroundColor: '#000', color: '#0f0', borderColor: '#0f0' }}
                  disabled={loading}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Enter subject" 
                  required 
                  style={{ backgroundColor: '#000', color: '#0f0', borderColor: '#0f0' }}
                  disabled={loading}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Enter your message" 
                  required 
                  style={{ backgroundColor: '#000', color: '#0f0', borderColor: '#0f0' }}
                  disabled={loading}
                />
              </Form.Group>
              
              <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
