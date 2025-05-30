import React from 'react';
import FeatureCard from './FeatureCard';
import { 
    BarChart3, 
    Car, 
    Clock, 
    CreditCard, 
    Share2, 
    Smartphone 
} from 'lucide-react';


const FeaturedSection: React.FC = () => {
    return (
        <section className="py-16 bg-white ">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                        <FeatureCard
                            icon={Car}
                            iconColor="text-blue-600"
                            iconBg="bg-blue-100"
                            title="Vehicle Repair Tracking"
                            description="Document all repairs with descriptions, error codes, and repair processes for future reference."
                            cardBg="bg-card"
                        />
                        
                        <FeatureCard
                            icon={Share2}
                            iconBg="bg-green-100"
                            iconColor="text-green-600"
                            title="Repair Sharing"
                            description="Share your repair details with mechanics or friends to get advice or help others with similar issues."
                            comingSoon
                            cardBg="bg-card/50"
                        />

                        <FeatureCard
                            icon={Clock}
                            iconBg="bg-yellow-100"
                            iconColor="text-yellow-600"
                            title="Remenber to Track"
                            description="Get reminders to record your vehicle repairs for comprehensive maintenance history."
                            cardBg="bg-card"
                        />

                        <FeatureCard
                            icon={Smartphone}
                            iconBg="bg-purple-100"
                            iconColor="text-purple-600"
                            title="Mobile Friendly"
                            description="Access your repair history anytime, anywhere from any device with our responsive design."
                            cardBg="bg-card"
                        />

                        <FeatureCard
                            icon={BarChart3}
                            iconBg="bg-red-100"
                            iconColor="text-red-600"
                            title="Insights & History"
                            description="View your complete repair history and get insights about your vehicle's maintenance patterns."
                            cardBg="bg-card/50"
                        />                        

                        <FeatureCard
                            icon={CreditCard}
                            iconBg="bg-gray-100"
                            iconColor="text-black"
                            title="Expense Tracking"
                            description="Monitor how much you're spending on vehicle maintenance and repairs over time."
                            comingSoon
                            cardBg="bg-card"
                        />

                        </div>
                    </div>
                </section>
    );
}

export default FeaturedSection;