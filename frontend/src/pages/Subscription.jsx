import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/Animations/AnimatedText";
import AnimatedText2 from "../components/Animations/AnimatedText2";
import { useNavigate } from "react-router-dom";
// Ensure the correct path to the video file
import backgroundVideo from "/src/assets/plan-intro3.mp4";  

const plans = [
  {
    name: "Basic",
    price: '8.99',
    quality: "Good",
    resolution: "720p",
    devices: "1",
    watchAtSameTime: "1",
    downloadDevices: "1",
    supportedDevices: "TV, Computer, Mobile, Tablet",
  },
  {
    name: "Standard",
    price: '13.99',
    quality: "Better",
    resolution: "1080p",
    devices: "2",
    watchAtSameTime: "2",
    downloadDevices: "2",
    supportedDevices: "TV, Computer, Mobile, Tablet",
  },
  {
    name: "Premium",
    price: '17.99',
    quality: "Best",
    resolution: "4K + HDR",
    devices: "4",
    watchAtSameTime: "4",
    downloadDevices: "6",
    supportedDevices: "TV, Computer, Mobile, Tablet",
  },
];

const Subscriptions = () => {
  const navigate = useNavigate(); // INIT

  const handleSubscribe = (plan) => {
    navigate("/payment", { state: { plan } });
  };
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-auto pb-12 bg-black text-white">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
        <source src="/assets/plan-intro3.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      <div className="w-4/5 text-center my-6">
        <AnimatedText text="Choose the Plan That’s Right for You" className="text-3xl font-bold pt-20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-5xl p-4">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            className="bg-gray-900 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-2">
              <AnimatedText2 text={plan.name} />
            </h2>
            <p className="text-xl font-bold text-yellow-400 mb-2">
              $<AnimatedText2 text={plan.price} />
            </p>
            <p className="text-gray-300 text-sm py-1 border-b border-gray-700">Video Quality: {plan.quality}</p>
            <p className="text-gray-300 text-sm py-1 border-b border-gray-700">Resolution: {plan.resolution}</p>
            <p className="text-gray-300 text-sm py-1 border-b border-gray-700">Supported Devices: {plan.supportedDevices}</p>
            <p className="text-gray-300 text-sm py-1 border-b border-gray-700">
              Devices your household can watch at the same time: {plan.watchAtSameTime}
            </p>
            <p className="text-gray-300 text-sm py-1">Download Devices: {plan.downloadDevices}</p>
            <button
              onClick={() => handleSubscribe(plan)} // CHANGE THIS LINE
              className="bg-yellow-400 text-black py-2 px-4 mt-4 rounded-md font-bold w-full transition duration-300 hover:bg-transparent hover:text-white border border-yellow-400"
            >
              Subscribe
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
