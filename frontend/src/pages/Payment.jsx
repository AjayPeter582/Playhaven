import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import GooglePayButton from "@google-pay/button-react"

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.plan) {
    navigate("/subscriptions");
    return null;
  }

  const { name, price, quality, resolution, supportedDevices} = state.plan;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <motion.div
        className="bg-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold mb-2 text-yellow-400">
          Subscribe to {name} Plan
        </h2>
        <p className="text-gray-300 mb-6">
          Get access to premium streaming features instantly.
        </p>

        <div className="bg-gray-800 rounded-md p-4 text-left text-sm mb-6">
          <p>
            <span className="font-semibold text-white">Plan:</span> {name}
          </p>
          <p>
            <span className="font-semibold text-white">Price:</span> ${price}/month
          </p>
          <p>
            <span className="font-semibold text-white">Video Quality:</span> {quality}
          </p>
          <p>
            <span className="font-semibold text-white">Resolution:</span> {resolution}
          </p>
          <p>
            <span className="font-semibold text-white">Supported Devices:</span>{" "}
            {supportedDevices}
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-200 mb-2">
          Choose Payment Method
        </h3>

        {/* Stripe */}
        <button>
        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: price,
      currencyCode: "USD",
      countryCode: "US",
    },
  }}
  onLoadPaymentData={async (paymentData) => {
    console.log("load payment data", paymentData);
  
    const selectedPlan = name;
    const token = localStorage.getItem("token");
    alert("Payment successful!!!")
  
  }}
/>

          {/* <CreditCard size={18} /> Pay with Stripe */}
        </button>

        {/* Razorpay */}
        {/* <button
          className="bg-green-500 text-white py-2 px-6 rounded-md w-full hover:bg-green-600 transition font-bold flex items-center justify-center gap-2"
        >
          <Monitor size={18} /> Pay with Razorpay
        </button> */}

        <div className="text-gray-400 text-xs mt-6 flex items-center justify-center gap-2">
          <ShieldCheck size={16} />
          <span>Payments are 100% secure and encrypted.</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;
