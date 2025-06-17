
import { ClientManagement } from "./ClientManagement";

export function ClientsContent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Мои клиенты</h1>
        <p className="text-gray-600 mt-1">Управление клиентами и точками доставки</p>
      </div>
      
      <ClientManagement />
    </div>
  );
}
