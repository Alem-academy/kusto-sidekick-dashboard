
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeliveriesList } from "./deliveries/DeliveriesList";
import { CreateDeliveryForm } from "./deliveries/CreateDeliveryForm";

export function DeliveriesContent() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Поставки</h1>
          <p className="text-gray-600 mt-1">Управление заявками на поставку товаров</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="list">Список поставок</TabsTrigger>
          <TabsTrigger value="create">Создать заявку</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="mt-6">
          <DeliveriesList />
        </TabsContent>
        
        <TabsContent value="create" className="mt-6">
          <CreateDeliveryForm onSuccess={() => setActiveTab("list")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
