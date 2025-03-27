import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { CallbackRequest } from "@/components/callback-request";
import IndividualsFamiliesPage from "@/pages/who-we-serve/individuals-families";
import ExecutivesPage from "@/pages/who-we-serve/executives";
import MutualFundsPage from "@/pages/wealth-management/mutual-funds";
import PersonalInsurancePage from "@/pages/insurance/personal";
import HomeLoanPage from "@/pages/loans/home-loan";
import NewCarLeasePage from "@/pages/lease/new-car";
import BusinessInsurancePage from "@/pages/insurance/business";
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
import AdminPage from "@/pages/admin";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import BlogPostPage from "./pages/blog/[id]";
import BlogPage from "./pages/blog";
import MediaPage from "./pages/media";
import OfferDetailPage from "./pages/offers/[id]";
import NCDBondPage from "./pages/wealth-management/ncd-bond/ncd";
import BondPage from "./pages/wealth-management/ncd-bond/bond";
import FractionalOwnershipPage from "./pages/wealth-management/real-estate/friction";
import RERAProjectsPage from "./pages/wealth-management/real-estate/rera";
import StartupInvestmentPage from "./pages/wealth-management/investment-startup";
import OldCarLeasePage from "./pages/lease/old-car";
import CommercialVehicleLeasePage from "@/pages/lease/commercial-vehicle";
import EquipmentLeasePage from "@/pages/lease/equipment";
import MachineryLeasePage from "@/pages/lease/machinery";


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CallbackRequest />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={
            <div className="container mx-auto px-4 py-24" style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <div className="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="text-muted-foreground mb-8 text-center">
                  Get in touch with our team of experts to discuss your financial goals.
                </p>
                <ContactForm />
              </div>
            </div>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/who-we-serve" element={<WhoWeServeOverviewPage />} />
          <Route path="/who-we-serve/individuals-families" element={<IndividualsFamiliesPage />} />
          <Route path="/who-we-serve/executives" element={<ExecutivesPage />} />
          <Route path="/wealth-management/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/insurance/personal" element={<PersonalInsurancePage />} />
          <Route path="/loans/home-loan" element={<HomeLoanPage />} />
          <Route path="/lease/new-car" element={<NewCarLeasePage />} />
          <Route path="/insurance/business" element={<BusinessInsurancePage />} />
          <Route path="/who-we-serve/attorneys" element={<AttorneysPage />} />
          <Route path="/who-we-serve/business-owners" element={<BusinessOwnersPage />} />
          <Route path="/who-we-serve/doctors" element={<DoctorsPage />} />
          <Route path="/who-we-serve/wi" element={<WomenInvestorsPage />} />
          <Route path="/who-we-serve/ci" element={<CharitableInvestorsPage />} />
          <Route path="/who-we-serve/hni" element={<HNIPage />} />
          <Route path="/who-we-serve/fos" element={<FamilyOfficeServicesPage />} />
          <Route path="/who-we-serve/nri" element={<NRIPage />} />
          <Route path="/who-we-serve/fi" element={<ForeignInvestorsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/offers/:id" element={<OfferDetailPage />} />
          <Route path="/wealth-management/ncd-bond/ncd" element={<NCDBondPage />} />
          <Route path="/wealth-management/ncd-bond/bonds" element={<BondPage />} />
          <Route path="/wealth-management/real-estate/fractional" element={<FractionalOwnershipPage />} />
          <Route path="/wealth-management/real-estate/rera" element={<RERAProjectsPage />} />
          <Route path="/wealth-management/startup-investment" element={<StartupInvestmentPage />} />
          <Route path="/lease/old-car" element={<OldCarLeasePage />} />
          <Route path="/lease/commercial-vehicle" element={<CommercialVehicleLeasePage />} />
          <Route path="/lease/equipment" element={<EquipmentLeasePage />} />
          <Route path="/lease/machinery" element={<MachineryLeasePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;