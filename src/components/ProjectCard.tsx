import React, { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  fullDescription,
  technologies,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 h-80">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Code className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
          </div>
          
          <p className="text-gray-600 mb-6 flex-1">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">Click to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
            <ExternalLink className="w-5 h-5 text-blue-600" />
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
            {fullDescription}
          </p>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">Technologies Used:</p>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">Click to go back</span>
          </div>
        </div>
      </div>
    </div>
  );
};