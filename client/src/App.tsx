// import "react-quill/dist/quill.snow.css";

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
import { CallbackRequest } from "@/components/callback-request";

// Import pages
import IndividualsFamiliesPage from "@/pages/who-we-serve/individuals-families";
import ExecutivesPage from "@/pages/who-we-serve/executives";
import MutualFundsPage from "@/pages/wealth-management/mutual-funds";
import PersonalInsurancePage from "@/pages/insurance/personal";
import HomeLoanPage from "@/pages/loans/home-loan";
import NewCarLeasePage from "@/pages/lease/new-car";
import BusinessInsurancePage from "@/pages/insurance/business";
// Who We Serve pages
import WhoWeServeOverviewPage from "./pages/who-we-serve";
import AttorneysPage from "./pages/who-we-serve/attorneys";
import BusinessOwnersPage from "@/pages/who-we-serve/bussiness-owners";
import DoctorsPage from "@/pages/who-we-serve/doctors";
import WomenInvestorsPage from "@/pages/who-we-serve/wi";
import CharitableInvestorsPage from "@/pages/who-we-serve/ci";
import HNIPage from "@/pages/who-we-serve/hni";
import FamilyOfficeServicesPage from "@/pages/who-we-serve/fos";
import NRIPage from "@/pages/who-we-serve/nri";
import ForeignInvestorsPage from "@/pages/who-we-serve/fi";
// Other pages
import AdminPage from "@/pages/admin";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import BlogPostPage from "./pages/blog/[id]";
import BlogPage from "./pages/blog";
import { useEffect } from "react";
import MediaPage from "./pages/media";
import OfferDetailPage from "./pages/offers/[id]";
import NCDBondPage from "./pages/wealth-management/ncd-bond/ncd";
import BondPage from "./pages/wealth-management/ncd-bond/bond";
import FractionalOwnershipPage from "./pages/wealth-management/real-estate/friction";
import RERAProjectsPage from "./pages/wealth-management/real-estate/rera";
import StartupInvestmentPage from "./pages/wealth-management/investment-startup";
import OldCarLeasePage from "./pages/lease/old-car";
import CommercialVehicleLeasePage from "./pages/lease/commercial-vehicle";
import EquipmentLeasePage from "./pages/lease/equipment";
import MachineryLeasePage from "./pages/lease/machinery";

function Router() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CallbackRequest />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route
            path="/contact"
            component={() => (
              <div
                className="container mx-auto px-4 py-24"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg')", // Update with the correct image path
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="max-w-lg mx-auto ">
                  <h1 className="text-4xl font-bold mb-4 text-center">
                    Contact Us
                  </h1>
                  <p className="text-muted-foreground mb-8 text-center">
                    Get in touch with our team of experts to discuss your
                    financial goals.
                  </p>
                  <ContactForm />
                </div>
              </div>
            )}
          />
          <Route path="/services" component={Services} />

          {/* Who We Serve Routes */}
          <Route path="/who-we-serve" component={WhoWeServeOverviewPage} />
          <Route
            path="/who-we-serve/individuals-families"
            component={IndividualsFamiliesPage}
          />
          <Route path="/who-we-serve/executives" component={ExecutivesPage} />
          <Route path="/who-we-serve/attorneys" component={AttorneysPage} />
          <Route
            path="/who-we-serve/business-owners"
            component={BusinessOwnersPage}
          />
          <Route path="/who-we-serve/doctors" component={DoctorsPage} />
          <Route
            path="/who-we-serve/woman-investors"
            component={WomenInvestorsPage}
          />
          <Route
            path="/who-we-serve/charitable-investors"
            component={CharitableInvestorsPage}
          />
          <Route path="/who-we-serve/hni" component={HNIPage} />
          <Route
            path="/who-we-serve/family-office"
            component={FamilyOfficeServicesPage}
          />
          <Route path="/who-we-serve/nri" component={NRIPage} />
          <Route
            path="/who-we-serve/foreign-investors"
            component={ForeignInvestorsPage}
          />

          {/* Wealth Management Routes */}
          <Route
            path="/wealth-management/mutual-funds"
            component={MutualFundsPage}
          />
          <Route
            path="/wealth-management/ncd-bond/ncd"
            component={NCDBondPage}
          />
          <Route
            path="/wealth-management/ncd-bond/bonds"
            component={BondPage}
          />
          <Route
            path="/wealth-management/real-estate/fractional"
            component={FractionalOwnershipPage}
          />
          <Route
            path="/wealth-management/real-estate/rera"
            component={RERAProjectsPage}
          />
          <Route
            path="/wealth-management/startup-investment"
            component={StartupInvestmentPage}
          />
          {/* Other Wealth Management routes will follow the same pattern */}

          {/* Insurance Routes */}
          <Route path="/insurance/personal" component={PersonalInsurancePage} />
          <Route path="/insurance/business" component={BusinessInsurancePage} />

          {/* Lease Routes */}
          <Route path="/lease/new-car" component={NewCarLeasePage} />
          <Route path="/lease/old-car" component={OldCarLeasePage} />
          <Route
            path="/lease/commercial-vehicle"
            component={CommercialVehicleLeasePage}
          />
          <Route path="/lease/equipment" component={EquipmentLeasePage} />
          <Route path="/lease/machinery" component={MachineryLeasePage} />
          {/* Other Lease routes will follow the same pattern */}

          {/* Loans Routes */}
          <Route path="/loans/home-loan" component={HomeLoanPage} />
          {/* Other Loans routes will follow the same pattern */}

          {/* Admin Routes */}
          <Route path="/login" component={LoginPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/media" component={MediaPage} />
          <Route path="/blog/:id" component={BlogPostPage} />
          <Route path="/offers/:id" component={OfferDetailPage} />
          <Route path="/register" component={RegisterPage} />
          {/* Admin route - only accessible via direct URL and protected by authentication */}
          <Route path="/admin" component={AdminPage} />

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
