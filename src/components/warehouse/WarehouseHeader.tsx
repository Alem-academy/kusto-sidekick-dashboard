
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function WarehouseHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Склад и остатки</h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">Проактивное управление товарами и контроль остатков</p>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
        <Plus className="w-4 h-4 mr-2" />
        Добавить товар
      </Button>
    </div>
  );
}
