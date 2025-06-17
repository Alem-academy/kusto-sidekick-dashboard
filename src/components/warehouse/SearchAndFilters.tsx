
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { FilterType } from "./types";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function SearchAndFilters({ 
  searchQuery, 
  onSearchChange, 
  activeFilter, 
  onFilterChange 
}: SearchAndFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Поиск по названию или артикулу..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {activeFilter !== "all" && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Активные фильтры:</span>
          <Badge variant="secondary" className="flex items-center gap-1">
            {activeFilter === "lowStock" ? "Низкий остаток" : "Риски по срокам"}
            <button
              onClick={() => onFilterChange("all")}
              className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
            >
              ×
            </button>
          </Badge>
        </div>
      )}
    </div>
  );
}
