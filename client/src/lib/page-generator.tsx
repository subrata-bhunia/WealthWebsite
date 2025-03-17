
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Clock, LineChart, Users, Building, Briefcase, Landmark, DollarSign, HomeIcon, Car, Truck, Settings, Wrench } from "lucide-react";

// Helper to generate appropriate icon based on page type
export const getIconForPage = (pageName: string) => {
  const iconMap: Record<string, any> = {
    insurance: Shield,
    loan: FileText,
    lease: Clock,
    wealth: LineChart,
    individual: Users,
    family: Users,
    executive: Briefcase,
    attorney: Briefcase,
    doctor: Briefcase,
    business: Building,
    woman: Users,
    charitable: Users,
    hni: DollarSign,
    family_office: Landmark,
    nri: Users,
    foreign: Users,
    mutual: LineChart,
    ncd: FileText,
    bond: FileText,
    real_estate: Building,
    startup: Briefcase,
    home: HomeIcon,
    property: Building,
    rent: DollarSign,
    shares: LineChart,
    gold: DollarSign,
    car: Car,
    od: FileText,
    working: Clock,
    term: FileText,
    commercial: Truck,
    equipment: Settings,
    machinery: Wrench,
  };

  // Find a matching icon based on keywords in the page name
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (pageName.toLowerCase().includes(keyword.toLowerCase())) {
      return icon;
    }
  }

  // Default icon if no match found
  return FileText;
};

// Generate card items based on page title
export const generateCardItems = (pageTitle: string) => {
  const items = [];
  
  // Generate 4 relevant features based on the page title
  const baseWords = pageTitle.split(" ");
  
  const features = [
    "Comprehensive Coverage",
    "Customized Solutions",
    "Expert Advice",
    "Competitive Rates",
    "Fast Processing",
    "Flexible Terms",
    "24/7 Support",
    "Personalized Service",
    "Risk Assessment",
    "Tax Benefits",
    "Wealth Growth",
    "Financial Planning",
    "Estate Planning",
    "Retirement Planning",
    "Investment Strategies",
    "Portfolio Diversification"
  ];
  
  // Select four random features from the list
  const selectedFeatures = features
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return selectedFeatures;
};

// Generate benefit items based on page title
export const generateBenefits = () => {
  const benefits = [
    {
      title: "Personalized Service",
      description: "Tailored solutions designed specifically for your individual needs and goals."
    },
    {
      title: "Expert Guidance",
      description: "Professional advisors with deep industry knowledge to guide your decisions."
    },
    {
      title: "Ongoing Support",
      description: "Continuous assistance and regular reviews to adapt to changing circumstances."
    }
  ];
  
  return benefits;
};
