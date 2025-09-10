import React from "react";

const AnalyzingAnimation: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-16 text-center shadow-xl">
      <div className="animate-spin mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-8">
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Analyzing Your Contract
      </h3>
      <p className="text-gray-600 mb-6">
        Our AI is carefully reviewing your document for risks, obligations, and
        key terms...
      </p>
      <div className="flex justify-center space-x-2 mb-6">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">This usually takes 30-60 seconds</p>
    </div>
  );
};

export default AnalyzingAnimation;
