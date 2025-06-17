
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
  const [reportType, setReportType] = useState<string>("movement");
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

  // Данные для отчета о движении товаров
  const movementReportData = [
    { 
      datetime: "15.06.2025 14:30", 
      operation: "Расход", 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      quantity: "-100", 
      document: "Заказ на доставку №742" 
    },
    { 
      datetime: "12.06.2025 10:15", 
      operation: "Приход", 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      quantity: "+500", 
      document: "Приходная накладная №П-109" 
    },
    { 
      datetime: "10.06.2025 18:00", 
      operation: "Расход", 
      product: "Сок \"Juicy\" Вишневый 0.2л", 
      article: "J-005", 
      quantity: "-250", 
      document: "Заказ на доставку №731" 
    },
    { 
      datetime: "05.06.2025 09:00", 
      operation: "Приход", 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      quantity: "+1000", 
      document: "Приходная накладная №П-105" 
    },
    { 
      datetime: "02.06.2025 11:45", 
      operation: "Расход", 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      quantity: "-300", 
      document: "Заказ на доставку №715" 
    }
  ];

  // Данные для отчета по остаткам
  const inventoryReportData = [
    { 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      available: "850", 
      reserved: "50", 
      total: "900", 
      unit: "шт." 
    },
    { 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      available: "200", 
      reserved: "0", 
      total: "200", 
      unit: "шт." 
    },
    { 
      product: "Сок \"Juicy\" Мультифрукт 1л", 
      article: "J-003", 
      available: "400", 
      reserved: "120", 
      total: "520", 
      unit: "шт." 
    },
    { 
      product: "Сок \"Juicy\" Вишневый 0.2л", 
      article: "J-005", 
      available: "150", 
      reserved: "0", 
      total: "150", 
      unit: "шт." 
    }
  ];

  // Данные для отчета по срокам годности
  const expiryReportData = [
    { 
      product: "Сок \"Juicy\" Вишневый 0.2л", 
      article: "J-005", 
      batch: "P-5514", 
      expiry: "15.07.2025", 
      daysLeft: 28, 
      quantity: "150" 
    },
    { 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      batch: "P-5598", 
      expiry: "10.09.2025", 
      daysLeft: 85, 
      quantity: "400" 
    },
    { 
      product: "Сок \"Juicy\" Апельсиновый 1л", 
      article: "J-001", 
      batch: "P-5612", 
      expiry: "15.12.2025", 
      daysLeft: 181, 
      quantity: "500" 
    },
    { 
      product: "Сок \"Juicy\" Яблочный 1л", 
      article: "J-002", 
      batch: "P-5601", 
      expiry: "01.02.2026", 
      daysLeft: 229, 
      quantity: "200" 
    }
  ];

  const getDaysLeftColor = (days: number): string => {
    if (days <= 30) return "text-red-600 bg-red-50";
    if (days <= 90) return "text-orange-600 bg-orange-50";
    return "text-green-600 bg-green-50";
  };

  const renderReportTable = () => {
    if (reportType === "movement") {
      return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Дата и время</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Тип операции</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование товара</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Количество, шт.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Документ-основание</th>
              </tr>
            </thead>
            <tbody>
              {movementReportData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-600">{item.datetime}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.operation === 'Приход' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.operation}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium">{item.product}</td>
                  <td className="py-3 px-4 text-gray-600">{item.article}</td>
                  <td className={`py-3 px-4 text-right font-semibold ${
                    item.quantity.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.quantity}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{item.document}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (reportType === "inventory") {
      return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование товара</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Доступно</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">В резерве</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Всего на складе</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Ед. изм.</th>
              </tr>
            </thead>
            <tbody>
              {inventoryReportData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.product}</td>
                  <td className="py-3 px-4 text-gray-600">{item.article}</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">{item.available}</td>
                  <td className="py-3 px-4 text-right font-semibold text-orange-600">{item.reserved}</td>
                  <td className="py-3 px-4 text-right font-semibold">{item.total}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (reportType === "expiry") {
      return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Наименование товара</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Артикул</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Номер партии</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Срок годности</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Дней до истечения</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Количество, шт.</th>
              </tr>
            </thead>
            <tbody>
              {expiryReportData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.product}</td>
                  <td className="py-3 px-4 text-gray-600">{item.article}</td>
                  <td className="py-3 px-4 text-gray-600">{item.batch}</td>
                  <td className="py-3 px-4 text-gray-600">{item.expiry}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDaysLeftColor(item.daysLeft)}`}>
                      {item.daysLeft}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Отчеты</h1>
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
            {renderReportTable()}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Итого по отчету:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Всего позиций:</span>
                  <span className="ml-2 font-semibold">
                    {reportType === "movement" ? movementReportData.length :
                     reportType === "inventory" ? inventoryReportData.length :
                     expiryReportData.length}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Период отчета:</span>
                  <span className="ml-2 font-semibold">
                    {dateFrom && dateTo && `${format(dateFrom, "dd.MM.yyyy")} - ${format(dateTo, "dd.MM.yyyy")}`}
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
