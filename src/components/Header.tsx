import { Menu, Shield, X } from "lucide-react";
import React from "react";
import type { AppView } from "../types";

interface HeaderProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ContractAI</h1>
              <p className="text-xs text-gray-600">Smart Contract Analysis</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onViewChange("home")}
              className={`text-sm font-medium transition-colors ${
                currentView === "home"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onViewChange("upload")}
              className={`text-sm font-medium transition-colors ${
                currentView === "upload"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Upload
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all">
              Get Started
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onViewChange("home");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onViewChange("upload");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Upload Contract
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
