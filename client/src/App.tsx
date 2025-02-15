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

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
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
          <Route path="/who-we-serve" component={() => <div>Overview</div>} />
          <Route path="/who-we-serve/individuals-families" component={() => <div>Individuals & Families</div>} />
          <Route path="/who-we-serve/executives" component={() => <div>Executives</div>} />
          <Route path="/who-we-serve/attorneys" component={() => <div>Attorneys</div>} />
          <Route path="/who-we-serve/doctors" component={() => <div>Doctors</div>} />
          <Route path="/who-we-serve/business-owners" component={() => <div>Business Owners</div>} />
          <Route path="/who-we-serve/woman-investors" component={() => <div>Woman Investors</div>} />
          <Route path="/who-we-serve/charitable-investors" component={() => <div>Charitable Investors</div>} />
          <Route path="/who-we-serve/hni" component={() => <div>HNI</div>} />
          <Route path="/who-we-serve/family-office" component={() => <div>Family Office Services</div>} />
          <Route path="/who-we-serve/nri" component={() => <div>NRI</div>} />
          <Route path="/who-we-serve/foreign-investors" component={() => <div>Foreign Investors</div>} />

          {/* Wealth Management Routes */}
          <Route path="/wealth-management/mutual-funds" component={() => <div>Mutual Funds</div>} />
          <Route path="/wealth-management/ncd-bond" component={() => <div>NCD/Bond</div>} />
          <Route path="/wealth-management/fractional-real-estate" component={() => <div>Fractional Real Estate</div>} />
          <Route path="/wealth-management/startup-investment" component={() => <div>Investment in Startup</div>} />

          {/* Insurance Routes */}
          <Route path="/insurance/personal" component={() => <div>Personal Insurance</div>} />
          <Route path="/insurance/business" component={() => <div>Business Insurance</div>} />

          {/* Lease Routes */}
          <Route path="/lease/new-car" component={() => <div>New Car Lease</div>} />
          <Route path="/lease/old-car" component={() => <div>Old Car Lease</div>} />
          <Route path="/lease/commercial-vehicle" component={() => <div>Commercial Vehicle Lease</div>} />
          <Route path="/lease/equipment" component={() => <div>Equipment Lease</div>} />
          <Route path="/lease/machinery" component={() => <div>Machinery Lease</div>} />

          {/* Loans Routes */}
          <Route path="/loans/home-loan" component={() => <div>Home Loan</div>} />
          <Route path="/loans/loan-against-property" component={() => <div>Loan Against Property</div>} />
          <Route path="/loans/loan-against-rent" component={() => <div>Loan Against Rent</div>} />
          <Route path="/loans/loan-against-shares" component={() => <div>Loan Against Shares/MF</div>} />
          <Route path="/loans/gold-loan" component={() => <div>Gold Loan</div>} />
          <Route path="/loans/car-loan" component={() => <div>Car Loan</div>} />
          <Route path="/loans/od-cc" component={() => <div>OD/CC</div>} />
          <Route path="/loans/working-capital" component={() => <div>Working Capital</div>} />
          <Route path="/loans/term-loan" component={() => <div>Term Loan</div>} />

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