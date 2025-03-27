
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <span className="text-9xl font-bold text-primary/10">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> 
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> 
              Browse Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
