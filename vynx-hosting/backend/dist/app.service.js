"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const couchdb_service_1 = require("./couchdb.service");
let AppService = class AppService {
    constructor(couchdbService) {
        this.couchdbService = couchdbService;
    }
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
            const doc = Object.assign(Object.assign({}, contactData), { type: 'contact_form', submittedAt: new Date().toISOString() });
            console.log('Contact form submitted:', doc);
            return {
                success: true,
                message: 'Message received! We\'ll get back to you soon.'
            };
        }
        catch (error) {
            console.error('Error submitting contact form:', error);
            return {
                success: false,
                message: 'There was an error submitting your message. Please try again.'
            };
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [couchdb_service_1.CouchdbService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map