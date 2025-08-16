import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getStats } from '../services/api';

const About = () => {
  const [stats, setStats] = useState({
    servers: 0,
    clients: 0,
    uptime: 0
  });
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getStats();
        // Animate stats counter
        const targetStats = response.data;
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          
          if (progress < 1) {
            setStats({
              servers: Math.round(progress * targetStats.servers),
              clients: Math.round(progress * targetStats.clients),
              uptime: (progress * targetStats.uptime).toFixed(1)
            });
          } else {
            setStats(targetStats);
            clearInterval(timer);
            setLoading(false);
          }
        }, frameDuration);
      } catch (error) {
        console.error('Error fetching stats:', error);
        // Fallback to hardcoded values
        const targetStats = { servers: 1250, clients: 8500, uptime: 99.9 };
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          
          if (progress < 1) {
            setStats({
              servers: Math.round(progress * targetStats.servers),
              clients: Math.round(progress * targetStats.clients),
              uptime: (progress * targetStats.uptime).toFixed(1)
            });
          } else {
            setStats(targetStats);
            clearInterval(timer);
            setLoading(false);
          }
        }, frameDuration);
      }
    };
    
    fetchStats();
  }, []);
  
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">ABOUT VYNX</h2>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <p className="lead text-center">
              Founded by hackers, for hackers. VYNX Hosting is a next-generation hosting provider 
              that understands the unique needs of the security and development community.
            </p>
          </Col>
        </Row>
        
        <Row className="text-center mb-5">
          <Col md={4} className="mb-4">
            <div className="display-4 fw-bold">{stats.servers}+</div>
            <p className="mb-0">SERVERS DEPLOYED</p>
          </Col>
          <Col md={4} className="mb-4">
            <div className="display-4 fw-bold">{stats.clients}+</div>
            <p className="mb-0">HAPPY CLIENTS</p>
          </Col>
          <Col md={4} className="mb-4">
            <div className="display-4 fw-bold">{stats.uptime}%</div>
            <p className="mb-0">UPTIME GUARANTEE</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={10} className="mx-auto">
            <h3 className="text-center mb-4">OUR MISSION</h3>
            <p>
              At VYNX, we believe in empowering the hacker community with reliable, secure, and 
              high-performance hosting solutions. Our infrastructure is built with security as the 
              foundation, ensuring that your projects remain protected while delivering the performance 
              you need.
            </p>
            <p>
              We provide root access, customizable environments, and tools that hackers and developers 
              actually want. No bloatware, no unnecessary restrictions - just powerful hosting that 
              gets out of your way so you can focus on what matters.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
