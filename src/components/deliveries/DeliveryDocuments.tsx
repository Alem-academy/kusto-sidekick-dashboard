
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Trash2 } from "lucide-react";

interface DeliveryDocumentsProps {
  documents: File[];
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveDocument: (index: number) => void;
}

export function DeliveryDocuments({ 
  documents, 
  onFileUpload, 
  onRemoveDocument 
}: DeliveryDocumentsProps) {
  return (
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
          onChange={onFileUpload}
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
                    onClick={() => onRemoveDocument(index)}
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
  );
}
