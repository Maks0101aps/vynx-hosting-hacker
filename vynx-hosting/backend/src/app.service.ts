import { Injectable } from '@nestjs/common';
import { CouchdbService } from './couchdb.service';

@Injectable()
export class AppService {
  constructor(private readonly couchdbService: CouchdbService) {}

  getServices() {
    return [
      {
        id: 1,
        title: 'VPS Hosting',
        description: 'Virtual private servers with root access, customizable configurations, and dedicated resources for your applications.',
        features: ['Root Access', 'Custom Kernels', 'Snapshots', 'DDoS Protection']
      },
      {
        id: 2,
        title: 'Dedicated Servers',
        description: 'High-performance dedicated servers with full control over hardware resources for demanding applications.',
        features: ['Full Root Access', 'Hardware Selection', 'IPMI Access', '24/7 Monitoring']
      },
      {
        id: 3,
        title: 'Cloud Storage',
        description: 'Secure and scalable cloud storage solutions with encryption at rest and in transit.',
        features: ['End-to-End Encryption', 'API Access', 'Versioning', 'Global CDN']
      },
      {
        id: 4,
        title: 'Security Tools',
        description: 'Advanced security solutions including DDoS protection, firewalls, and intrusion detection systems.',
        features: ['DDoS Mitigation', 'WAF', 'IDS/IPS', 'Security Audits']
      }
    ];
  }

  getStats() {
    return {
      servers: 1250,
      clients: 8500,
      uptime: 99.9
    };
  }

  async submitContact(contactData) {
    try {
      // In a real implementation, this would save to CouchDB
      const doc = {
        ...contactData,
        type: 'contact_form',
        submittedAt: new Date().toISOString()
      };
      
      // For demo purposes, we'll just log it
      console.log('Contact form submitted:', doc);
      
      // In a real implementation, you would save to CouchDB like this:
      // await this.couchdbService.createDocument('contacts', doc);
      
      return { 
        success: true, 
        message: 'Message received! We\'ll get back to you soon.' 
      };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { 
        success: false, 
        message: 'There was an error submitting your message. Please try again.' 
      };
    }
  }
}
