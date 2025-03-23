
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Disease {
  name: string;
  description: string;
  image: string;
  symptoms: string[];
}

const diseases: Disease[] = [
  {
    name: "Powdery Mildew",
    description: "A fungal disease that affects a wide range of plants, appearing as a white to gray powdery growth on leaf surfaces.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    symptoms: ["White powdery patches on leaves", "Distorted or stunted growth", "Premature leaf drop"]
  },
  {
    name: "Leaf Spot",
    description: "Caused by various fungi and bacteria, leaf spot diseases create circular spots or lesions on foliage.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    symptoms: ["Circular dark spots on leaves", "Yellow halos around spots", "Leaves turning yellow then dropping"]
  },
  {
    name: "Aphid Infestation",
    description: "Aphids are tiny insects that feed on plant sap, causing foliage to yellow, curl, and become distorted.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    symptoms: ["Curled or distorted leaves", "Sticky honeydew on leaves", "Presence of tiny green, black, or white insects"]
  }
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-sage-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/80 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage-100/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-md mb-4 text-sage-900"
          >
            Common Plant Diseases
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sage-700 text-lg"
          >
            Learn about some of the most frequent plant health issues our AI can detect and how to identify them in your garden.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diseases.map((disease, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-sage-900/5 border border-sage-100/80"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={disease.image}
                  alt={disease.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-2">{disease.name}</h3>
                <p className="text-sage-600 mb-4 text-sm">{disease.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-sage-700 mb-2">Common Symptoms:</h4>
                  <ul className="space-y-1">
                    {disease.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm text-sage-600 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage-400 mt-1.5 mr-2 flex-shrink-0" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-sage-600 hover:text-sage-800"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.rhs.org.uk/advice/plant-problems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium"
          >
            View complete plant disease guide <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
