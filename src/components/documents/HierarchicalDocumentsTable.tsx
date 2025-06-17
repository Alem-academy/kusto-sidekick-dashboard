
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronRight, Download, Archive } from "lucide-react";

interface DocumentRow {
  id: string;
  status: "paid" | "overdue" | "pending";
  documentType: string;
  number: string;
  date: string;
  amount: string;
  dueDate: string;
  isMainDocument: boolean;
  children?: DocumentRow[];
}

export function HierarchicalDocumentsTable() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set(["1"]));

  const toggleRow = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const documentsData: DocumentRow[] = [
    {
      id: "1",
      status: "paid",
      documentType: "Счет-фактура",
      number: "№101",
      date: "05.06.2025",
      amount: "150 000 тг",
      dueDate: "12.06.2025",
      isMainDocument: true,
      children: [
        {
          id: "1-1",
          status: "paid",
          documentType: "Акт выполненных работ",
          number: "№101-А",
          date: "",
          amount: "",
          dueDate: "",
          isMainDocument: false
        },
        {
          id: "1-2",
          status: "paid",
          documentType: "Товарная накладная",
          number: "№101-Н",
          date: "",
          amount: "",
          dueDate: "",
          isMainDocument: false
        }
      ]
    },
    {
      id: "2",
      status: "overdue",
      documentType: "Счет-фактура",
      number: "№95",
      date: "25.05.2025",
      amount: "75 000 тг",
      dueDate: "01.06.2025",
      isMainDocument: true,
      children: [
        {
          id: "2-1",
          status: "overdue",
          documentType: "Акт выполненных работ",
          number: "№95-А",
          date: "",
          amount: "",
          dueDate: "",
          isMainDocument: false
        }
      ]
    },
    {
      id: "3",
      status: "pending",
      documentType: "Счет-фактура",
      number: "№105",
      date: "15.06.2025",
      amount: "210 000 тг",
      dueDate: "22.06.2025",
      isMainDocument: true
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { label: "Оплачен", className: "bg-green-100 text-green-800 border-green-200" },
      overdue: { label: "Просрочен", className: "bg-red-100 text-red-800 border-red-200" },
      pending: { label: "Ожидает", className: "bg-orange-100 text-orange-800 border-orange-200" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.className}>
        {config.label}
      </Badge>
    );
  };

  const renderRow = (row: DocumentRow, level: number = 0) => {
    const isExpanded = expandedRows.has(row.id);
    const hasChildren = row.children && row.children.length > 0;

    return (
      <>
        <TableRow key={row.id} className={row.isMainDocument ? "bg-gray-50" : "bg-white"}>
          <TableCell className="w-8">
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleRow(row.id)}
                className="h-6 w-6 p-0"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Button>
            )}
          </TableCell>

          <TableCell>
            {row.isMainDocument && getStatusBadge(row.status)}
          </TableCell>

          <TableCell className={`${level > 0 ? 'pl-8' : ''}`}>
            <div className={row.isMainDocument ? 'font-semibold' : 'italic text-gray-600'}>
              {level > 0 && '↳ '}
              {row.documentType} {row.number}
              {row.date && ` от ${row.date}`}
            </div>
          </TableCell>

          <TableCell className={row.isMainDocument ? 'font-semibold' : ''}>
            {row.amount}
          </TableCell>

          <TableCell>
            {row.dueDate}
          </TableCell>

          <TableCell>
            {row.isMainDocument ? (
              <Button size="sm" variant="outline" className="gap-2">
                <Archive className="w-4 h-4" />
                Скачать все (ZIP)
              </Button>
            ) : (
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Скачать
              </Button>
            )}
          </TableCell>
        </TableRow>

        {/* Вложенные строки */}
        {isExpanded && hasChildren && row.children?.map((child) => renderRow(child, level + 1))}
      </>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Документы</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Номер и Дата документа</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Срок оплаты</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentsData.map((row) => renderRow(row))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
