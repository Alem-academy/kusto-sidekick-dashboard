
import { useState, useMemo } from "react";
import { KPICards } from "./documents/KPICards";
import { DocumentFilters } from "./documents/DocumentFilters";
import { GroupedDocumentsTable } from "./documents/GroupedDocumentsTable";
import { Document, DocumentGroup, DocumentFilters as FilterType, KPIData } from "./documents/types";

export function DocumentsContent() {
  // Пример данных - в реальном приложении будут загружаться с сервера
  const mockDocuments: Document[] = [
    {
      id: "DOC-001",
      type: "invoice",
      number: "СФ-156",
      date: "15.06.2025",
      amount: 145000,
      paymentStatus: "pending",
      dueDate: "25.06.2025",
      clientName: "ТОО Астана Трейд",
      description: "Поставка оборудования"
    },
    {
      id: "DOC-001-ACT",
      type: "act",
      number: "АКТ-156",
      date: "15.06.2025",
      amount: 145000,
      paymentStatus: "pending",
      parentId: "DOC-001",
      clientName: "ТОО Астана Трейд",
      description: "Акт выполненных работ"
    },
    {
      id: "DOC-002",
      type: "invoice",
      number: "СФ-157",
      date: "14.06.2025",
      amount: 89500,
      paymentStatus: "overdue",
      dueDate: "24.06.2025",
      clientName: "АО Казахстан Логистик",
      description: "Транспортные услуги"
    },
    {
      id: "DOC-002-DEL",
      type: "delivery",
      number: "НК-089",
      date: "14.06.2025",
      amount: 89500,
      paymentStatus: "overdue",
      parentId: "DOC-002",
      clientName: "АО Казахстан Логистик",
      description: "Товарная накладная"
    },
    {
      id: "DOC-003",
      type: "invoice",
      number: "СФ-158",
      date: "13.06.2025",
      amount: 450000,
      paymentStatus: "paid",
      dueDate: "23.06.2025",
      clientName: "ТОО Алматы Снаб",
      description: "Поставка материалов"
    },
    {
      id: "DOC-004",
      type: "contract",
      number: "ДП-2025-78",
      date: "10.06.2025",
      amount: 2450000,
      paymentStatus: "pending",
      clientName: "АО НК КазМунайГаз",
      description: "Договор поставки нефтепродуктов"
    }
  ];

  const [filters, setFilters] = useState<FilterType>({
    dateFrom: "",
    dateTo: "",
    documentType: "all",
    paymentStatus: "all"
  });

  // Группировка документов
  const documentGroups = useMemo(() => {
    let filteredDocs = mockDocuments;

    // Применяем фильтры
    if (filters.dateFrom) {
      filteredDocs = filteredDocs.filter(doc => doc.date >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filteredDocs = filteredDocs.filter(doc => doc.date <= filters.dateTo);
    }
    if (filters.documentType !== "all") {
      filteredDocs = filteredDocs.filter(doc => doc.type === filters.documentType);
    }
    if (filters.paymentStatus !== "all") {
      filteredDocs = filteredDocs.filter(doc => doc.paymentStatus === filters.paymentStatus);
    }

    // Группируем документы
    const mainDocs = filteredDocs.filter(doc => !doc.parentId);
    const relatedDocs = filteredDocs.filter(doc => doc.parentId);

    const groups: DocumentGroup[] = mainDocs.map(mainDoc => {
      const related = relatedDocs.filter(doc => doc.parentId === mainDoc.id);
      const totalAmount = mainDoc.amount + related.reduce((sum, doc) => sum + doc.amount, 0);
      
      // Определяем общий статус группы
      let overallStatus: DocumentGroup["overallStatus"] = mainDoc.paymentStatus;
      if (related.length > 0) {
        const allStatuses = [mainDoc, ...related].map(doc => doc.paymentStatus);
        if (allStatuses.every(status => status === "paid")) {
          overallStatus = "paid";
        } else if (allStatuses.some(status => status === "overdue")) {
          overallStatus = "overdue";
        } else if (allStatuses.some(status => status === "paid")) {
          overallStatus = "partial";
        } else {
          overallStatus = "pending";
        }
      }

      return {
        mainDocument: mainDoc,
        relatedDocuments: related,
        totalAmount,
        overallStatus
      };
    });

    return groups;
  }, [filters]);

  // Вычисляем KPI
  const kpiData = useMemo((): KPIData => {
    const allDocs = mockDocuments;
    const toPay = allDocs
      .filter(doc => doc.paymentStatus === "pending")
      .reduce((sum, doc) => sum + doc.amount, 0);
    
    const overdue = allDocs
      .filter(doc => doc.paymentStatus === "overdue")
      .reduce((sum, doc) => sum + doc.amount, 0);
    
    const totalPaid = allDocs
      .filter(doc => doc.paymentStatus === "paid")
      .reduce((sum, doc) => sum + doc.amount, 0);

    return {
      toPay,
      overdue,
      totalPaid,
      totalDocuments: documentGroups.length
    };
  }, [documentGroups]);

  const handleFilterByToPay = () => {
    setFilters(prev => ({ ...prev, paymentStatus: "pending" }));
  };

  const handleFilterByOverdue = () => {
    setFilters(prev => ({ ...prev, paymentStatus: "overdue" }));
  };

  const resetFilters = () => {
    setFilters({
      dateFrom: "",
      dateTo: "",
      documentType: "all",
      paymentStatus: "all"
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Управление документами</h1>
          <p className="text-gray-600 mt-1">Финансовая аналитика и отслеживание статусов оплаты</p>
        </div>
      </div>

      <KPICards 
        data={kpiData}
        onFilterByToPay={handleFilterByToPay}
        onFilterByOverdue={handleFilterByOverdue}
      />

      <DocumentFilters 
        filters={filters}
        onFiltersChange={setFilters}
        onResetFilters={resetFilters}
      />

      <GroupedDocumentsTable documentGroups={documentGroups} />
    </div>
  );
}
