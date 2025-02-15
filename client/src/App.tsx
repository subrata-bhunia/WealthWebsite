import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";

// Import new pages
import IndividualsFamiliesPage from "@/pages/who-we-serve/individuals-families";
import MutualFundsPage from "@/pages/wealth-management/mutual-funds";
import PersonalInsurancePage from "@/pages/insurance/personal";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/contact" component={() => (
            <div className="container py-12">
              <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
              <div className="max-w-lg mx-auto">
                <ContactForm />
              </div>
            </div>
          )} />
          <Route path="/services" component={Services} />

          {/* Who We Serve Routes */}
          <Route path="/who-we-serve/individuals-families" component={IndividualsFamiliesPage} />
          {/* Other Who We Serve routes will follow the same pattern */}

          {/* Wealth Management Routes */}
          <Route path="/wealth-management/mutual-funds" component={MutualFundsPage} />
          {/* Other Wealth Management routes will follow the same pattern */}

          {/* Insurance Routes */}
          <Route path="/insurance/personal" component={PersonalInsurancePage} />
          {/* Other Insurance routes will follow the same pattern */}

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;