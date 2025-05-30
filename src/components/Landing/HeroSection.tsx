import React from 'react';
import {Search,CheckCircle} from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
         <section className="relative py-20 overflow-hidden bg-blue-100">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black">
                                Your Vehicle Repair History, <span className="text-blue-500">Simplified</span>
                            </h1>
                            <p className="text-xl mb-8 text-muted-foreground text-gray-500">
                                Keep track of all your vehicle repairs and maintenance in one place. 
                                Never forget what was fixed and when.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn rounded-md bg-blue-500 border-none shadow-none">Get Started</button>
                                <button className="btn bg-white rounded-md text-black border-gray-300 shadow-none">Create an Account</button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl p-1">
                                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                                        <div className="p-4">
                                            {/* Dashboard Preview */}
                                            <div className="mb-4">
                                                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                                                    <div className="flex justify-between items-center">
                                                        <div className="relative w-full">
                                                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground text-black" />
                                                            <div className="w-full h-10 pl-9 bg-white rounded-md border border-gray-200 text-sm text-left py-2 text-black">
                                                                Search
                                                            </div>
                                                        </div>
                                                        <div className="ml-2 h-10 px-4 bg-gray-200 rounded-md flex items-center text-sm text-black">
                                                            All Years
                                                        </div>
                                                    </div>
                                                </div>
                                    
                                                {/* Car Repair Cards */}
                                                <div className="space-y-3">
                                                {/* Card 1 */}
                                                <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                                    <img 
                                                        src="../../public/dash-prev.png" 
                                                        alt="Dashboard Preview" 
                                                        className="w-full h-auto object-cover" 
                                                    />
                                                </div>
                                        
                                                {/* Card 2 */}
                                                <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                                    <img 
                                                        src="../../public/dash-prev.png"  
                                                        alt="Dashboard Preview" 
                                                        className="w-full h-auto object-cover" 
                                                    />
                                                </div>
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                                <CheckCircle className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;