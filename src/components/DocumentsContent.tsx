
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Upload, Search, Download, Eye } from "lucide-react";

export function DocumentsContent() {
  const documents = [
    {
      id: "DOC-001",
      name: "Счет-фактура №156",
      type: "Счет-фактура",
      date: "15.06.2025",
      size: "245 КБ",
      status: "Подписан"
    },
    {
      id: "DOC-002",
      name: "Накладная №89",
      type: "Накладная",
      date: "14.06.2025",
      size: "189 КБ",
      status: "На подписи"
    },
    {
      id: "DOC-003",
      name: "Договор поставки МКС-2025-78",
      type: "Договор",
      date: "13.06.2025",
      size: "1.2 МБ",
      status: "Подписан"
    },
    {
      id: "DOC-004",
      name: "Акт сверки за май 2025",
      type: "Акт сверки",
      date: "12.06.2025",
      size: "156 КБ",
      status: "Отправлен"
    }
  ];

  const documentTypes = [
    { name: "Счета-фактуры", count: 45 },
    { name: "Накладные", count: 32 },
    { name: "Договоры", count: 12 },
    { name: "Акты сверки", count: 8 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Подписан':
        return 'bg-green-100 text-green-800';
      case 'На подписи':
        return 'bg-yellow-100 text-yellow-800';
      case 'Отправлен':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Документы</h1>
          <p className="text-gray-600 mt-1">Управление документооборотом и архивом</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="w-4 h-4 mr-2" />
          Загрузить документ
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Поиск документов..."
          className="pl-10"
        />
      </div>

      {/* Document Types */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {documentTypes.map((type, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{type.name}</p>
                  <p className="text-2xl font-bold text-blue-600">{type.count}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Последние документы
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Документ</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Тип</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Дата</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Размер</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Статус</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-700">Действия</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-gray-500">{doc.id}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{doc.type}</td>
                    <td className="py-3 px-4 text-gray-600">{doc.date}</td>
                    <td className="py-3 px-4 text-gray-600">{doc.size}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Document Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Быстрая загрузка</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-900">Перетащите файлы сюда</p>
              <p className="text-gray-600">или нажмите для выбора файлов</p>
            </div>
            <div className="mt-4">
              <Button variant="outline">Выбрать файлы</Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Поддерживаются форматы: PDF, DOC, DOCX, XLS, XLSX (макс. 10 МБ)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
