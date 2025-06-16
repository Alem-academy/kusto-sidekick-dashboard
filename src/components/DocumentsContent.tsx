
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Search, Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function DocumentsContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const documents = [
    {
      id: "DOC-001",
      type: "Счет-фактура",
      number: "СФ-156",
      date: "15.06.2025",
      amount: "₸ 145,000"
    },
    {
      id: "DOC-002", 
      type: "Накладная",
      number: "НК-089",
      date: "14.06.2025",
      amount: "₸ 89,500"
    },
    {
      id: "DOC-003",
      type: "Договор поставки",
      number: "ДП-2025-78",
      date: "13.06.2025",
      amount: "₸ 2,450,000"
    },
    {
      id: "DOC-004",
      type: "Акт сверки",
      number: "АС-май-2025",
      date: "12.06.2025",
      amount: "₸ 567,800"
    },
    {
      id: "DOC-005",
      type: "Счет-фактура", 
      number: "СФ-157",
      date: "11.06.2025",
      amount: "₸ 78,900"
    },
    {
      id: "DOC-006",
      type: "Накладная",
      number: "НК-090",
      date: "10.06.2025",
      amount: "₸ 156,300"
    }
  ];

  const filteredDocuments = documents.filter(doc => 
    doc.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Реестр документов</h1>
          <p className="text-gray-600 mt-1">Поиск и управление документами</p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск по номеру или названию документа..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Документы ({filteredDocuments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Тип документа</TableHead>
                  <TableHead>Номер</TableHead>
                  <TableHead>Дата создания</TableHead>
                  <TableHead>Сумма</TableHead>
                  <TableHead className="text-center">Скачать</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.type}</TableCell>
                    <TableCell>{doc.number}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell className="font-semibold text-green-600">{doc.amount}</TableCell>
                    <TableCell className="text-center">
                      <Button size="sm" variant="outline" className="hover:bg-blue-50">
                        <Download className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredDocuments.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Документы не найдены</p>
              <p className="text-sm">Попробуйте изменить критерии поиска</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
