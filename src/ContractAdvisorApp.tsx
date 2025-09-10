/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import AnalysisView from "./components/AnalysisView";
import ChatInterface from "./components/ChatInterface";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SuggestionsView from "./components/SuggestionsView";
import UploadSection from "./components/UploadSection";
import type { AppView, ChatMessage, ContractAnalysis } from "./types";
import { generateAIResponse } from "./utils/generateAIResponse";

const ContractAdvisorApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>("home");
  const [contracts, setContracts] = useState<ContractAnalysis[]>([]);
  const [selectedContract, setSelectedContract] =
    useState<ContractAnalysis | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="container mx-auto px-4 py-8">
        {currentView === "home" && (
          <HomePage onGetStarted={() => setCurrentView("upload")} />
        )}

        {currentView === "upload" && (
          <UploadSection
            onAnalysisStart={() => setIsAnalyzing(true)}
            onAnalysisComplete={(analysis) => {
              setContracts((prev) => [...prev, analysis]);
              setSelectedContract(analysis);
              setCurrentView("analysis");
              setIsAnalyzing(false);
            }}
            isAnalyzing={isAnalyzing}
          />
        )}

        {currentView === "analysis" && selectedContract && (
          <AnalysisView
            contract={selectedContract}
            onStartChat={() => setCurrentView("chat")}
            onViewSuggestions={() => setCurrentView("suggestions")}
          />
        )}

        {currentView === "chat" && selectedContract && (
          <ChatInterface
            contract={selectedContract}
            messages={chatMessages}
            onSendMessage={(message) => {
              const userMessage: ChatMessage = {
                id: Date.now().toString() + "-user",
                type: "user",
                content: message,
                timestamp: new Date(),
              };

              const aiResponse: ChatMessage = {
                id: Date.now().toString() + "-ai",
                type: "ai",
                content: generateAIResponse(message, selectedContract),
                timestamp: new Date(),
              };

              setChatMessages((prev) => [...prev, userMessage, aiResponse]);
            }}
          />
        )}

        {currentView === "suggestions" && selectedContract && (
          <SuggestionsView contract={selectedContract} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ContractAdvisorApp;
