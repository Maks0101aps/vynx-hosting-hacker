import { CouchdbService } from './couchdb.service';
export declare class AppService {
    private readonly couchdbService;
    constructor(couchdbService: CouchdbService);
    getServices(): {
        id: number;
        title: string;
        description: string;
        features: string[];
    }[];
    getStats(): {
        servers: number;
        clients: number;
        uptime: number;
    };
    submitContact(contactData: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
