import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Car, Umbrella } from "lucide-react";

export default function PersonalInsurancePage() {
  return (
    <PageLayout
      title="Personal Insurance"
      subtitle="Protect what matters most with our comprehensive personal insurance solutions."
    >
      <div className="grid gap-8">
        {/* Insurance Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Life Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Term Life Insurance</li>
                <li>Whole Life Insurance</li>
                <li>Universal Life Insurance</li>
                <li>Critical Illness Cover</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Property Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Home Insurance</li>
                <li>Contents Insurance</li>
                <li>Landlord Insurance</li>
                <li>Natural Disaster Coverage</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Car className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Vehicle Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Comprehensive Coverage</li>
                <li>Third-party Liability</li>
                <li>Personal Accident Cover</li>
                <li>Zero Depreciation</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Umbrella className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Umbrella Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Extended Liability</li>
                <li>Asset Protection</li>
                <li>Legal Defense</li>
                <li>Worldwide Coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-muted-foreground">
                Get complete protection with our extensive range of insurance products.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Claims Settlement</h3>
              <p className="text-muted-foreground">
                Hassle-free and speedy claims processing when you need it most.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our insurance specialists help you choose the right coverage for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
import { PageTemplate } from "@/components/ui/page-template";

export default function PersonalInsurance() {
  return (
    <PageTemplate 
      title="Personal Insurance" 
      description="Comprehensive personal insurance solutions to protect you and your loved ones."
    >
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Our Personal Insurance Solutions</h2>
          <p className="text-gray-600">
            We offer a wide range of personal insurance products designed to provide financial protection 
            against various risks and uncertainties. Our experts help you select the right coverage based 
            on your specific needs and circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Life Insurance</h3>
            <p className="text-gray-600">
              Protect your family's financial future with life insurance policies that provide a lump sum payment to your beneficiaries.
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Term Life Insurance</li>
              <li>Whole Life Insurance</li>
              <li>Universal Life Insurance</li>
            </ul>
          </div>
          
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Health Insurance</h3>
            <p className="text-gray-600">
              Comprehensive health coverage to manage medical expenses and protect against financial hardship due to illness or injury.
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Individual Health Plans</li>
              <li>Family Floater Plans</li>
              <li>Critical Illness Coverage</li>
            </ul>
          </div>
          
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Disability Insurance</h3>
            <p className="text-gray-600">
              Protect your income in case you're unable to work due to disability caused by illness or injury.
            </p>
            <ul className="list-disc pl-5 mt-3">
              <li>Short-term Disability</li>
              <li>Long-term Disability</li>
              <li>Group Disability Plans</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
