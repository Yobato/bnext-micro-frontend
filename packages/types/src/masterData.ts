export interface Parameter {
    id?: number;
    group: string;
    name: string;
    value: string;
    description: string;
    status: number;
    createdBy: string;
    createdDate?: string;
    createdTime?: string;
    updatedBy?: string;
    updatedDate?: string;
    updatedTime?: string;
    deletedBy?: string;
    deletedDate?: string;
    deletedTime?: string;
}