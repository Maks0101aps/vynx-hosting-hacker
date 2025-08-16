import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getServices } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await getServices();
        setServices(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">OUR SERVICES</h2>
          <div className="text-center">
            <div className="terminal-text">LOADING SERVICES...</div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">OUR SERVICES</h2>
          <div className="text-center text-danger">
            <p>{error}</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              RETRY
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">OUR SERVICES</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={service.id} className="mb-4">
              <Card className="h-100 card">
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ul className="text-start">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">
            VIEW ALL SERVICES
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
