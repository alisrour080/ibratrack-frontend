import React from "react";
import HeroSection from "../components/Landing/HeroSection";
import FeaturedSection from "../components/Landing/FeaturedSection";

const Landing:React.FC = () => {



    return (
        <div>
            <div className="flex-1">
               <HeroSection/>
                <FeaturedSection/>
                <section className="bg-blue-500 text-primary-foreground py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to track your vehicle repairs?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Join IbraTrack today and never lose track of your vehicle's maintenance history again.
                    </p>
                    <button className="btn bg-white text-black border-none shadow-none">Sign Up Now</button>
                </div>
                </section>
            </div>
        </div>
    );

}

export default Landing;


