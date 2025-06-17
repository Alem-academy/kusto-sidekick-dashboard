import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DeliveryItem } from "./types";
import { WarehouseSelector } from "./WarehouseSelector";

interface CreateDeliveryFormProps {
  onSuccess: () => void;
}

interface DeliveryFormData {
  warehouseId: string;
  plannedDate: string;
  plannedTime: string;
  transportNumber: string;
  driverName: string;
  driverPhone: string;
  notes?: string;
}

export function CreateDeliveryForm({ onSuccess }: CreateDeliveryFormProps) {
  const { toast } = useToast();
  const [items, setItems] = useState<DeliveryItem[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);
  
  const form = useForm<DeliveryFormData>({
    defaultValues: {
      warehouseId: "",
      plannedDate: "",
      plannedTime: "",
      transportNumber: "",
      driverName: "",
      driverPhone: "",
      notes: ""
    }
  });

  const addItem = () => {
    const newItem: DeliveryItem = {
      id: `item-${Date.now()}`,
      sku: "",
      name: "",
      plannedQuantity: 0,
      unit: "шт"
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id: string, field: keyof DeliveryItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setDocuments([...documents, ...Array.from(files)]);
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const onSubmit = (data: DeliveryFormData) => {
    if (!data.warehouseId) {
      toast({
        title: "Ошибка",
        description: "Выберите адрес склада",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Ошибка",
        description: "Добавьте хотя бы одну позицию товара",
        variant: "destructive"
      });
      return;
    }

    const hasEmptyItems = items.some(item => !item.sku || !item.name || item.plannedQuantity <= 0);
    if (hasEmptyItems) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля для товаров",
        variant: "destructive"
      });
      return;
    }

    // Здесь будет отправка данных на сервер
    console.log("Создание заявки:", { ...data, items, documents });
    
    toast({
      title: "Успешно",
      description: "Заявка на поставку создана"
    });
    
    form.reset();
    setItems([]);
    setDocuments([]);
    onSuccess();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Создать заявку на поставку</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Выбор склада */}
              <WarehouseSelector control={form.control} />

              {/* Основная информация */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="plannedDate"
                  rules={{ required: "Укажите дату поставки" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Планируемая дата поставки</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="plannedTime"
                  rules={{ required: "Укажите время поставки" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Планируемое время</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="transportNumber"
                  rules={{ required: "Укажите номер транспорта" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Номер транспорта</FormLabel>
                      <FormControl>
                        <Input placeholder="А123БВ777" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="driverPhone"
                  rules={{ required: "Укажите телефон водителя" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон водителя</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (900) 123-45-67" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="driverName"
                rules={{ required: "Укажите ФИО водителя" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ФИО водителя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иванов Иван Иванович" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Примечания (необязательно)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Дополнительная информация о поставке..."
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Товары */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Товары к поставке</h3>
                  <Button type="button" onClick={addItem} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить товар
                  </Button>
                </div>

                {items.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>SKU</TableHead>
                              <TableHead>Наименование</TableHead>
                              <TableHead>Количество</TableHead>
                              <TableHead>Единица</TableHead>
                              <TableHead>Действия</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <Input
                                    value={item.sku}
                                    onChange={(e) => updateItem(item.id, "sku", e.target.value)}
                                    placeholder="JUICE-001"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    value={item.name}
                                    onChange={(e) => updateItem(item.id, "name", e.target.value)}
                                    placeholder="Сок яблочный 1л"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    type="number"
                                    min="1"
                                    value={item.plannedQuantity || ""}
                                    onChange={(e) => updateItem(item.id, "plannedQuantity", parseInt(e.target.value) || 0)}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Input
                                    value={item.unit}
                                    onChange={(e) => updateItem(item.id, "unit", e.target.value)}
                                    placeholder="шт"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeItem(item.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Документы */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Сопроводительные документы</h3>
                
                <div className="flex items-center gap-4">
                  <Button type="button" variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                    <Upload className="h-4 w-4 mr-2" />
                    Прикрепить файлы
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {documents.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        {documents.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-gray-500">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDocument(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => {
                  form.reset();
                  setItems([]);
                  setDocuments([]);
                }}>
                  Отменить
                </Button>
                <Button type="submit">
                  Создать заявку
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
