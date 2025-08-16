import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
    healthCheck(): {
        status: string;
        timestamp: string;
    };
}
