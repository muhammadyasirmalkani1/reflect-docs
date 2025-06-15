import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Shield,
  Zap,
  MessageSquare,
  Sparkles,
  Clock,
  Globe,
  Lightbulb,
  Search,
  LinkIcon,
  FileText,
  PenTool,
  Layers,
} from "lucide-react";

export default function LogInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center purple-gradient-text">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Sign in to access your account and explore our features.
        </p>
      </div>
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      {/* Placeholder for login form */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Sign In
          </a>
        </p>
        <Button className="w-full" size="lg" variant="default">
          Sign Up
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4"></div>
    </div>
  );
}
