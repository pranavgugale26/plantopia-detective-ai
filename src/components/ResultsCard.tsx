
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, X, BarChart3, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Disease {
  name: string;
  probability: number;
  description: string;
  treatment: string;
  severity: 'low' | 'medium' | 'high';
}

interface ResultsCardProps {
  results: Disease[] | null;
  onClose: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ results, onClose }) => {
  if (!results || results.length === 0) return null;
  
  const primaryDisease = results[0]; // The most likely disease
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };
  
  const severityIcon = {
    low: <CheckCircle className="h-5 w-5 text-green-600" />,
    medium: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
    high: <AlertTriangle className="h-5 w-5 text-red-600" />
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass rounded-2xl overflow-hidden shadow-xl shadow-sage-900/5 border border-white/30 relative"
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="rounded-full p-2 bg-white/80 hover:bg-white text-sage-700 hover:text-sage-900 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center mr-3">
            <Leaf className="h-5 w-5 text-sage-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sage-900">Analysis Results</h3>
            <p className="text-sm text-sage-600">
              {primaryDisease.probability >= 0.7 
                ? "High confidence detection" 
                : "Possible detection"}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-sage-900">Primary Detection</h4>
              <div className={cn(
                "px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1",
                getSeverityColor(primaryDisease.severity)
              )}>
                {severityIcon[primaryDisease.severity]}
                {primaryDisease.severity.charAt(0).toUpperCase() + primaryDisease.severity.slice(1)} Severity
              </div>
            </div>
            
            <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold text-lg text-sage-800">{primaryDisease.name}</h5>
                <div className="flex items-center gap-1 text-sage-700">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium">{Math.round(primaryDisease.probability * 100)}% match</span>
                </div>
              </div>
              
              <p className="text-sage-700 mb-4 text-sm">{primaryDisease.description}</p>
              
              <div>
                <h6 className="text-sm font-medium text-sage-800 mb-1">Recommended Treatment:</h6>
                <p className="text-sm text-sage-700">{primaryDisease.treatment}</p>
              </div>
            </div>
          </div>
          
          {results.length > 1 && (
            <div>
              <h4 className="font-medium text-sage-800 mb-2">Other Possibilities</h4>
              <div className="space-y-2">
                {results.slice(1, 3).map((disease, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-white/30 backdrop-blur-sm rounded-lg flex justify-between items-center"
                  >
                    <span className="text-sage-800 font-medium">{disease.name}</span>
                    <span className="text-sm text-sage-600">{Math.round(disease.probability * 100)}% match</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-sage-50/80 p-4">
        <p className="text-sm text-sage-700 text-center">
          Note: This analysis is for informational purposes only. For critical plant health issues, consult with a plant pathologist or agricultural expert.
        </p>
      </div>
    </motion.div>
  );
};

export default ResultsCard;
