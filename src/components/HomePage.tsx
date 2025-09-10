import {
  AlertTriangle,
  ArrowRight,
  Clock,
  FileText,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";
import React from "react";
import FeatureCard from "./FeatureCard";

const HomePage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Never Sign a Contract
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Without Understanding It
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Upload any contract, NDA, or policy document and get instant
            AI-powered analysis, risk assessment, and plain-English summaries.
            Protect your business with intelligent contract review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Analyze Your Contract
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful AI-Driven Contract Analysis
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to understand and protect yourself from unfair
            contract terms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-blue-600" />}
            title="Plain English Summary"
            description="Complex legal jargon translated into clear, understandable bullet points you can actually read and comprehend."
          />
          <FeatureCard
            icon={<AlertTriangle className="h-8 w-8 text-red-600" />}
            title="Risk Identification"
            description="Automatically detect potentially harmful clauses, unfair terms, and hidden obligations that could hurt your business."
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-green-600" />}
            title="Interactive Q&A"
            description="Ask specific questions about your contract and get instant, accurate answers from our AI legal advisor."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-purple-600" />}
            title="Missing Clause Detection"
            description="Identify important protections that should be in your contract but are missing, with suggested language."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-orange-600" />}
            title="Obligation Tracking"
            description="Never miss a deadline or requirement. We highlight all your responsibilities and important dates."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-600" />}
            title="Instant Analysis"
            description="Get comprehensive contract analysis in seconds, not hours. Fast, accurate, and always available."
          />
        </div>
      </section>

      <section className="py-20 bg-white/50 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600">
            Join the growing community of smart business owners
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Contracts Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Risk Detection Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">2.5M</div>
            <div className="text-gray-600">Risks Identified</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">30sec</div>
            <div className="text-gray-600">Average Analysis Time</div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Upload your first contract and see the power of AI-driven legal
            analysis
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Free Analysis
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
