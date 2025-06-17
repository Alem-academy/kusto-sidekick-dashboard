
export interface Document {
  id: string;
  type: "invoice" | "act" | "delivery" | "contract";
  number: string;
  date: string;
  amount: number;
  paymentStatus: "paid" | "pending" | "overdue";
  dueDate?: string;
  parentId?: string; // для связанных документов
  clientName: string;
  description: string;
}

export interface DocumentGroup {
  mainDocument: Document;
  relatedDocuments: Document[];
  totalAmount: number;
  overallStatus: "paid" | "pending" | "overdue" | "partial";
}

export type DocumentType = "invoice" | "act" | "delivery" | "contract" | "all";
export type PaymentStatus = "paid" | "pending" | "overdue" | "all";

export interface DocumentFilters {
  dateFrom: string;
  dateTo: string;
  documentType: DocumentType;
  paymentStatus: PaymentStatus;
}

export interface KPIData {
  toPay: number;
  overdue: number;
  totalPaid: number;
  totalDocuments: number;
}
