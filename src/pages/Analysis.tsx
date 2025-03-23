
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import UploadArea from '@/components/UploadArea';
import ResultsCard, { Disease } from '@/components/ResultsCard';

interface AnalysisResult {
  plantName: string;
  plantType: string;
  diseases: Disease[];
}

const Analysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const handleImageUploaded = (imageFile: File) => {
    // In a real application, you would send the image to your backend/API here
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock response data
      const mockResults: AnalysisResult = {
        plantName: "Tomato",
        plantType: "Solanum lycopersicum",
        diseases: [
          {
            name: "Powdery Mildew",
            probability: 0.89,
            description: "A fungal disease that appears as a white to grayish powder on leaf surfaces. It thrives in environments with high humidity and moderate temperatures.",
            treatment: "Apply fungicide specifically labeled for powdery mildew. Improve air circulation around plants and avoid overhead watering.",
            severity: "medium"
          },
          {
            name: "Early Blight",
            probability: 0.32,
            description: "A fungal disease causing dark spots with concentric rings on lower, older leaves.",
            treatment: "Remove and destroy infected leaves. Apply copper-based fungicide and rotate crops in future plantings.",
            severity: "low"
          },
          {
            name: "Healthy Plant",
            probability: 0.12,
            description: "No signs of disease or pest damage detected.",
            treatment: "Continue regular care and maintenance.",
            severity: "low"
          }
        ]
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
      toast({
        title: "Analysis complete",
        description: `Identified as ${mockResults.plantName} (${mockResults.plantType})`,
      });
    }, 3000);
  };
  
  const resetAnalysis = () => {
    setResults(null);
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4"
              >
                Plant Diagnostics
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="heading-md mb-4 text-sage-800"
              >
                Analyze Your Plant
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-sage-600"
              >
                Upload a clear photo of your plant's affected area for instant AI-powered plant identification and disease detection.
              </motion.p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`${results ? 'col-span-1' : 'col-span-1 md:col-span-2'}`}>
                  <UploadArea 
                    onImageUploaded={handleImageUploaded}
                    isLoading={isAnalyzing}
                  />
                  
                  {!results && !isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 p-4 bg-sage-50 rounded-xl text-sm text-sage-700"
                    >
                      <p className="mb-2 font-medium">Tips for best results:</p>
                      <ul className="space-y-1 list-disc pl-4">
                        <li>Ensure good lighting (natural daylight works best)</li>
                        <li>Get close to the affected area</li>
                        <li>Include the whole plant for better identification</li>
                        <li>Make sure the image is in focus</li>
                        <li>Include both healthy and affected parts for comparison</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
                
                {results && (
                  <div className="col-span-1">
                    <ResultsCard 
                      plantName={results.plantName}
                      plantType={results.plantType}
                      results={results.diseases}
                      onClose={resetAnalysis}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Analysis;
