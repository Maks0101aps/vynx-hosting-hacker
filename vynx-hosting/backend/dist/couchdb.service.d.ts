export declare class CouchdbService {
    private couch;
    private db;
    constructor();
    createDatabase(dbName: string): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
    createDocument(dbName: string, doc: any): Promise<{
        success: boolean;
        id: string;
        rev: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        id?: undefined;
        rev?: undefined;
    }>;
    getDocument(dbName: string, docId: string): Promise<{
        success: boolean;
        doc: {
            _id: string;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        doc?: undefined;
    }>;
    queryView(dbName: string, designDoc: string, viewName: string, options?: any): Promise<{
        success: boolean;
        rows: any[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        rows?: undefined;
    }>;
}
