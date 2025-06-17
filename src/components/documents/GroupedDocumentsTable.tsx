
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronRight, Download, FileText, Eye } from "lucide-react";
import { DocumentGroup } from "./types";

interface GroupedDocumentsTableProps {
  documentGroups: DocumentGroup[];
}

export function GroupedDocumentsTable({ documentGroups }: GroupedDocumentsTableProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-KZ', {
      style: 'currency',
      currency: 'KZT',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { label: "Оплачен", variant: "default" as const, className: "bg-green-100 text-green-800" },
      pending: { label: "Ожидает", variant: "secondary" as const, className: "bg-orange-100 text-orange-800" },
      overdue: { label: "Просрочен", variant: "destructive" as const, className: "bg-red-100 text-red-800" },
      partial: { label: "Частично", variant: "outline" as const, className: "bg-yellow-100 text-yellow-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return (
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    );
  };

  const getDocumentTypeLabel = (type: string) => {
    const types = {
      invoice: "Счет-фактура",
      act: "Акт выполненных работ", 
      delivery: "Накладная",
      contract: "Договор"
    };
    return types[type as keyof typeof types] || type;
  };

  if (documentGroups.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8 text-gray-500">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Документы не найдены</p>
          <p className="text-sm">Попробуйте изменить критерии фильтрации</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          Документы ({documentGroups.length} групп)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Документ</TableHead>
                <TableHead>Номер</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-center">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documentGroups.map((group) => {
                const isExpanded = expandedGroups.has(group.mainDocument.id);
                const hasRelated = group.relatedDocuments.length > 0;
                
                return (
                  <>
                    {/* Основной документ */}
                    <TableRow key={group.mainDocument.id} className="font-medium bg-gray-50">
                      <TableCell>
                        {hasRelated && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleGroup(group.mainDocument.id)}
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
                      <TableCell className="font-semibold">
                        {getDocumentTypeLabel(group.mainDocument.type)}
                      </TableCell>
                      <TableCell>{group.mainDocument.number}</TableCell>
                      <TableCell>{group.mainDocument.date}</TableCell>
                      <TableCell>{group.mainDocument.clientName}</TableCell>
                      <TableCell className="font-semibold">
                        {formatCurrency(group.totalAmount)}
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(group.overallStatus)}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex gap-1 justify-center">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>

                    {/* Связанные документы */}
                    {isExpanded && group.relatedDocuments.map((doc) => (
                      <TableRow key={doc.id} className="bg-blue-25">
                        <TableCell className="pl-8"></TableCell>
                        <TableCell className="text-gray-600 pl-4">
                          ↳ {getDocumentTypeLabel(doc.type)}
                        </TableCell>
                        <TableCell className="text-gray-600">{doc.number}</TableCell>
                        <TableCell className="text-gray-600">{doc.date}</TableCell>
                        <TableCell className="text-gray-600">{doc.clientName}</TableCell>
                        <TableCell className="text-gray-600">
                          {formatCurrency(doc.amount)}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(doc.paymentStatus)}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex gap-1 justify-center">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
