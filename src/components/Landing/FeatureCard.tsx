import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    comingSoon?: boolean;
    cardBg?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon: Icon,
    iconBg = 'bg-gray-100',
    iconColor = 'text-black',
    title,
    description,
    comingSoon = false,
    cardBg = 'bg-gray-200',
}) => {
    return (
        <div className={`${cardBg} rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow relative overflow-hidden`}>
      {comingSoon && (
        <div className="absolute top-2 right-2">
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Coming Soon</span>
        </div>
      )}
      <div className={`h-12 w-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-muted-foreground text-black">{description}</p>
    </div>
    );
};

export default FeatureCard;
