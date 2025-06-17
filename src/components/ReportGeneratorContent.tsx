
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { CalendarIcon, FileText, Download } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function ReportGeneratorContent() {
  const [reportType, setReportType] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [isReportGenerated, setIsReportGenerated] = useState(false);

  const reportTypes = [
    { value: "movement", label: "Отчет о движении товаров" },
    { value: "inventory", label: "Отчет по остаткам" },
    { value: "expiry", label: "Отчет по срокам годности" }
  ];

  const handleGenerateReport = () => {
    if (reportType && dateFrom && dateTo) {
      setIsReportGenerated(true);
      console.log("Генерируем отчет:", { reportType, dateFrom, dateTo });
    }
  };

  const handleDownloadExcel = () => {
    console.log("Скачивание отчета в Excel");
  };

  const handleDownloadPDF = () => {
    console.log("Скачивание отчета в PDF");
  };

  // Пример данных для отчета
  const sampleReportData = [
    { product: "Сок яблочный Rich", arrival: "10.06.2025", quantity: 1247, status: "В наличии" },
    { product: "Сок апельсиновый Tropicana", arrival: "12.06.2025", quantity: 89, status: "Критично" },
    { product: "Сок мультифрукт Добрый", arrival: "14.06.2025", quantity: 567, status: "В наличии" },
    { product: "Сок томатный Я", arrival: "08.06.2025", quantity: 15, status: "Мало" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Формирование отчетов</h1>
        <p className="text-gray-600 mt-1">Создание и выгрузка отчетов по товарам</p>
      </div>

      {/* Form for report generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Параметры отчета
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Report Type Buttons */}
          <div className="space-y-2">
            <Label>Тип отчета</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reportTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={reportType === type.value ? "default" : "outline"}
                  onClick={() => setReportType(type.value)}
                  className={cn(
                    "h-auto p-4 text-center",
                    reportType === type.value
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "hover:bg-blue-50 hover:border-blue-300"
                  )}
                >
                  <div className="space-y-1">
                    <div className="font-medium">{type.label}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Date Range Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>С</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "dd.MM.yyyy") : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>По</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "dd.MM.yyyy") : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Generate Report Button */}
          <Button
            onClick={handleGenerateReport}
            disabled={!reportType || !dateFrom || !dateTo}
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
            size="lg"
          >
            <FileText className="w-5 h-5 mr-2" />
            Сформировать отчет
          </Button>
        </CardContent>
      </Card>

      {/* Report Display Area */}
      {isReportGenerated && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {reportTypes.find(type => type.value === reportType)?.label}
              </CardTitle>
              <div className="flex gap-2">
                <Button onClick={handleDownloadExcel} variant="outline" className="bg-green-50 hover:bg-green-100 border-green-200">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать в Excel
                </Button>
                <Button onClick={handleDownloadPDF} variant="outline" className="bg-red-50 hover:bg-red-100 border-red-200">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать в PDF
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Период: {dateFrom && format(dateFrom, "dd.MM.yyyy")} - {dateTo && format(dateTo, "dd.MM.yyyy")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование товара</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Дата прихода</th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">Количество</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleReportData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{item.product}</td>
                      <td className="py-3 px-4 text-gray-600">{item.arrival}</td>
                      <td className="py-3 px-4 text-right font-semibold">{item.quantity} шт.</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'В наличии' ? 'bg-green-100 text-green-800' :
                          item.status === 'Мало' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Итого по отчету:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Всего позиций:</span>
                  <span className="ml-2 font-semibold">{sampleReportData.length}</span>
                </div>
                <div>
                  <span className="text-gray-600">Общее количество:</span>
                  <span className="ml-2 font-semibold">
                    {sampleReportData.reduce((sum, item) => sum + item.quantity, 0)} шт.
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Дата формирования:</span>
                  <span className="ml-2 font-semibold">{format(new Date(), "dd.MM.yyyy HH:mm")}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
