
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface UploadAreaProps {
  onImageUploaded: (imageFile: File) => void;
  isLoading?: boolean;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUploaded, isLoading = false }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
    setIsDragging(true);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndProcessImage(file);
    }
  }, []);
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndProcessImage(file);
    }
  }, []);
  
  const validateAndProcessImage = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File size too large (max 10MB)",
        variant: "destructive"
      });
      return;
    }
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Send to parent component
    onImageUploaded(file);
  };
  
  const removeImage = () => {
    setPreview(null);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ease-in-out",
              isDragging ? "border-sage-500 bg-sage-50" : "border-sage-200 hover:border-sage-300",
            )}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="sr-only"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isLoading}
            />
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 flex items-center justify-center">
                <Upload className="h-8 w-8 text-sage-500" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-sage-700">Upload your plant image</h3>
                <p className="text-sm text-sage-500">Drag and drop or click to browse</p>
              </div>
              
              <div className="text-xs text-sage-400">
                <p>Accepted formats: JPEG, PNG, WebP</p>
                <p>Maximum file size: 10MB</p>
              </div>
              
              <label
                htmlFor="file-upload"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
                  "bg-sage-600 text-white hover:bg-sage-700",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Image className="h-4 w-4" />
                    Select image
                  </>
                )}
              </label>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative border border-sage-200 rounded-2xl overflow-hidden shadow-xl shadow-sage-900/5"
          >
            <img
              src={preview}
              alt="Plant preview"
              className="w-full h-full object-cover max-h-[400px]"
            />
            
            {isLoading && (
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                  <p className="text-sm font-medium">Analyzing image...</p>
                </div>
              </div>
            )}
            
            {!isLoading && (
              <button
                onClick={removeImage}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Remove image"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadArea;
