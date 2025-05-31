import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import {Mail,Phone,MapPin,Send} from 'lucide-react';



const Contact:React.FC = () => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });

    return (
        <div className='min-h-screen bg-blue-50 flex flex-col'>
            <Header />
            <div className="flex-1">
                <div className='container mx-auto px-4 py-8'>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Have questions about IbraTrack? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Form Section */}
                        <div className='bg-white border border-gray-50 rounded-xl p-6 shadow-sm text-black'>
                            <h2 className='text-xl font-semibold mb-4'>Send us a message</h2>
                            <form className='space-y-4 text-black'>
                                
                                <fieldset className='fieldset'>
                                    <legend className='fieldset-legend text-black'>Name</legend>
                                    <input type="text" className="input w-full bg-blue-50 border border-gray-200" placeholder='Your Name'/>
                                </fieldset>

                                <fieldset className='fieldset'>
                                    <legend className='fieldset-legend text-black'>Email</legend>
                                    <input type="text" className="input w-full bg-blue-50 border-gray-200" placeholder='your.email@example.com'/>
                                </fieldset>

                                <fieldset className='fieldset'>
                                    <legend className='fieldset-legend text-black'>Subject</legend>
                                    <input type="text" className="input w-full bg-blue-50 border-gray-200" placeholder='What is this about?'/>
                                </fieldset>

                                <fieldset className='fieldset'>
                                    <legend className='fieldset-legend text-black'>Message</legend>
                                    <textarea className="textarea h-48 w-full bg-blue-50 border-gray-200" placeholder='Tell us what is on your mind...'></textarea>
                                </fieldset>

                                <button className='btn bg-blue-500 border-none shadow-none text-white w-full'>
                                    <Send className='inline mr-2' />
                                    Send Message
                                </button>
                            </form>

                        </div>

                        {/* Contact Details Section */}
                        <div className='space-y-8 bg-red'>
                            <div className='text-black'>
                                <h2 className='text-xl font-semibold mb-4'>Our Location</h2>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                    <iframe 
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.752997708744!2d13.178223973637547!3d-8.90254059115379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5e9e0c04eb7%3A0x5438c1f5ccb36593!2sIBRATEC%20OFICINA!5e0!3m2!1sen!2slb!4v1746082765165!5m2!1sen!2slb"
                                        width="600" 
                                        height="450" 
                                        style={{ border: 0 }} 
                                        allowFullScreen 
                                        loading="lazy"
                                        className="w-full h-full min-h-[300px] rounded-lg"
                                        title="Map showing our location">
                                    </iframe>
                                </div>
                            </div>

                            <div className='text-black'>
                                <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
                                <ul className='space-y-4'>
                                    <li className="flex items-start">
                                        <MapPin className='h-5 w-5 mr-3 mt-1 text-primary' />
                                        <div>
                                            <h3 className='font-medium'>Address:</h3>
                                            <p className='text-gray-400'>R. dos Generais, Luanda, Angola</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Phone className="h-5 w-5 mr-3 mt-1 text-primary" />
                                        <div>
                                            <h3 className="font-medium">Phone:</h3>
                                            <p className="text-gray-400">
                                                <a href="tel:+96181051073">+961 81 051 073</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
                                        <div>
                                            <h3 className="font-medium">Email:</h3>
                                            <p className="text-gray-400">
                                                <a href="mailto:info@ibratrack.com">info@ibratrack.com</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='text-black'>
                                <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
                                <table className="w-full">
                                <tbody>
                                    <tr className="border-b border-border border-gray-300">
                                        <td className="py-2 font-medium">Monday - Friday</td>
                                        <td className="py-2 text-right">8:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr className="border-b border-border border-gray-300">
                                        <td className="py-2 font-medium">Saturday</td>
                                        <td className="py-2 text-right">8:00 AM - 2:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 font-medium">Sunday</td>
                                        <td className="py-2 text-right">Closed</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Contact;