// ThankYou.tsx
import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Share2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col rounded-2xl items-center justify-center p-4 md:p-32">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="bg-green-100 p-3 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          {/* Thank You Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Your submission has been received successfully. We'll get back to you shortly.
          </p>
          
          {/* Confirmation Number */}
          <div className="bg-gray-50 w-full rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Confirmation Number</p>
            <p className="text-lg font-medium text-gray-800">
              #TRN-{Math.floor(100000 + Math.random() * 900000)}
            </p>
          </div>
          

          {/* Action Buttons */}
          <div className="flex flex-col w-full space-y-3">
            <Link href="/" className="w-full">
              <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer">
                Return to Homepage
              </button>
            </Link>
            
            <Link href="/contact" className="w-full">
              <button className="w-full py-3 px-6 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Submit Another Form
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Additional Info */}
      {/* <div className="mt-8 text-center text-gray-500 text-sm">
        <p>You should receive a confirmation email shortly.</p>
        <p className="mt-1">If you have any questions, please contact <span className="text-blue-600">support@example.com</span></p>
      </div> */}
    </div>
  );
}