import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, Shield, Calculator } from "lucide-react";

export default function NewCarLeasePage() {
  return (
    <PageLayout
      title="New Car Lease"
      subtitle="Flexible and affordable leasing solutions for new vehicles with comprehensive coverage and support."
    >
      <div className="grid gap-8">
        {/* Lease Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Car className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Latest Models</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Premium Vehicles</li>
                <li>Luxury Brands</li>
                <li>SUVs & Sedans</li>
                <li>Electric Vehicles</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Flexible Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>12-60 Month Options</li>
                <li>Customizable Mileage</li>
                <li>Early Upgrade Options</li>
                <li>Extension Available</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Full Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Comprehensive Insurance</li>
                <li>Maintenance Package</li>
                <li>24/7 Roadside Support</li>
                <li>Warranty Coverage</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financial Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Low Down Payment</li>
                <li>Tax Advantages</li>
                <li>Fixed Monthly Costs</li>
                <li>Buyout Options</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Lease Process */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Leasing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Vehicle</h3>
              <p className="text-sm text-muted-foreground">
                Select from our wide range of new vehicles
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Customize Terms</h3>
              <p className="text-sm text-muted-foreground">
                Choose your lease duration and mileage
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Quick and easy approval process
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Vehicle Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Get your new car delivered to you
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
import { PageTemplate } from "@/components/ui/page-template";

export default function NewCarLease() {
  return (
    <PageTemplate 
      title="New Car Leasing" 
      description="Flexible and affordable new car leasing solutions for personal and business use."
    >
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">New Car Leasing Services</h2>
          <p className="text-gray-600">
            Our new car leasing services offer flexibility, affordability, and convenience for those 
            looking to drive a new vehicle without the long-term commitment of ownership. We work with 
            leading manufacturers and dealerships to provide competitive lease terms and exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Benefits of Leasing a New Car</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lower monthly payments compared to financing</li>
              <li>Drive a new vehicle every few years</li>
              <li>Minimal down payment requirements</li>
              <li>Warranty coverage throughout the lease term</li>
              <li>Tax advantages for business use</li>
              <li>No concerns about vehicle depreciation</li>
            </ul>
          </div>
          
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Our Leasing Process</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Consultation to understand your needs and preferences</li>
              <li>Selection of suitable vehicles based on your requirements</li>
              <li>Customized lease terms and payment structure</li>
              <li>Documentation and approval process</li>
              <li>Vehicle delivery and orientation</li>
              <li>Ongoing support throughout the lease term</li>
            </ol>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
