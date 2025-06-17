
import { TrendingUp, DollarSign, Users, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ConceptHeader() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Предложенная концепция развития
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Пошаговый план расширения бизнеса ИП "Соки и напитки" с детальным анализом 
          инвестиций и ожидаемой доходности на каждом этапе развития.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Прогноз роста
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">300%</div>
            <p className="text-xs text-blue-600">за 3 года</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">45%</div>
            <p className="text-xs text-green-600">годовая доходность</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Клиенты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">500+</div>
            <p className="text-xs text-purple-600">новых клиентов</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-orange-700 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Ассортимент
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">x5</div>
            <p className="text-xs text-orange-600">расширение линейки</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
