import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  achievements?: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
      
      {items.map((item, index) => (
        <div key={item.id} className="relative mb-8">
          {/* Timeline dot */}
          <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
          
          {/* Content card */}
          <div className="ml-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpanded(item.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-blue-600 font-medium mb-1">{item.company}</p>
                  <p className="text-gray-500 text-sm">{item.period}</p>
                </div>
                <div className="ml-4">
                  {expandedItems.has(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            
            {/* Expanded content */}
            {expandedItems.has(item.id) && (
              <div className="px-6 pb-6 border-t border-gray-50">
                <ul className="space-y-2 mt-4">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
                
                {item.achievements && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-yellow-800">{item.achievements}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};