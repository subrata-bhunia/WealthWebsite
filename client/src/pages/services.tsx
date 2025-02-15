import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Briefcase, Building2, Shield, Car, Coins, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceItem {
  icon: React.ReactNode;
  description: string;
}

const serviceIcons: Record<string, ServiceItem> = {
  wealthManagement: {
    icon: <Briefcase className="w-6 h-6" />,
    description: "Comprehensive investment solutions to help you grow and protect your wealth through diverse financial instruments.",
  },
  insurance: {
    icon: <Shield className="w-6 h-6" />,
    description: "Protection solutions for individuals and businesses to secure your assets and future.",
  },
  lease: {
    icon: <Car className="w-6 h-6" />,
    description: "Flexible leasing options for vehicles and equipment to support your personal and business needs.",
  },
  loans: {
    icon: <Coins className="w-6 h-6" />,
    description: "Wide range of lending solutions tailored to meet your financial requirements.",
  },
};

export default function Services() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive financial solutions tailored to your unique needs and goals
        </p>
      </div>

      <Tabs defaultValue="wealthManagement" className="space-y-8">
        <TabsList className="flex justify-center h-auto flex-wrap gap-2">
          {Object.entries(NAVIGATION_ITEMS)
            .filter(([key]) => key !== "whoWeServe")
            .map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="flex items-center gap-2">
                  {serviceIcons[key]?.icon}
                  {category.label}
                </div>
              </TabsTrigger>
            ))}
        </TabsList>

        {Object.entries(NAVIGATION_ITEMS)
          .filter(([key]) => key !== "whoWeServe")
          .map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {item.title}
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {/* Add specific descriptions for each service */}
                          Professional guidance and expertise in {item.title.toLowerCase()} 
                          to help you achieve your financial goals.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our {category.label} Services?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">
                      Benefit from our team of experienced professionals who understand your unique needs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Personalized Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored strategies designed to align with your financial goals and risk tolerance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Comprehensive Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Ongoing assistance and regular reviews to ensure your strategy stays on track
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Contact us today to discuss how we can help you achieve your financial goals
        </p>
        <Link href="/contact">
          <a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </a>
        </Link>
      </div>
    </div>
  );
}
