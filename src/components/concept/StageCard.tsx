
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Calendar, DollarSign } from "lucide-react";

interface StageCardProps {
  stage: {
    id: number;
    title: string;
    duration: string;
    investment: string;
    revenue: string;
    status: "completed" | "current" | "planned";
    description: string;
    keyPoints: string[];
    timeline: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

export function StageCard({ stage, isExpanded, onToggle }: StageCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "current":
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "current":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <Card className={`transition-all duration-200 ${
      stage.status === "current" 
        ? "border-blue-300 shadow-lg bg-blue-50/30" 
        : "hover:shadow-md"
    }`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3">
            <span className="text-xl font-bold">Этап {stage.id}</span>
            <Badge className={getStatusColor(stage.status)}>
              <div className="flex items-center gap-1">
                {getStatusIcon(stage.status)}
                <span className="capitalize">
                  {stage.status === "completed" ? "Завершен" :
                   stage.status === "current" ? "Текущий" : "Планируется"}
                </span>
              </div>
            </Badge>
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onToggle}
            className="text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? "Свернуть" : "Подробнее"}
          </Button>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mt-2">
          {stage.title}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{stage.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{stage.investment}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Выручка:</span>
            <span className="text-sm font-medium text-green-600">{stage.revenue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{stage.timeline}</span>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            <p className="text-gray-700">{stage.description}</p>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ключевые моменты:</h4>
              <ul className="space-y-1">
                {stage.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
