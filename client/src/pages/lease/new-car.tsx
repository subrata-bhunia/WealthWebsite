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
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Gauge, Clock, Shield } from "lucide-react";

export default function NewCarLeasePage() {
  return (
    <PageLayout
      title="New Car Lease"
      subtitle="Flexible and affordable new car leasing options with competitive terms and comprehensive coverage."
    >
      <div className="grid gap-8">
        {/* Lease Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Car className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Vehicle Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Luxury Vehicles</li>
                <li>SUVs & Crossovers</li>
                <li>Sedans & Hatchbacks</li>
                <li>Electric & Hybrid</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Gauge className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Lease Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Flexible Duration</li>
                <li>Mileage Options</li>
                <li>Zero Down Payment Plans</li>
                <li>Residual Value Benefits</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financing Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Competitive Monthly Payments</li>
                <li>Tax Advantages</li>
                <li>Custom Payment Schedules</li>
                <li>Early Termination Options</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Additional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Maintenance Packages</li>
                <li>Insurance Options</li>
                <li>Roadside Assistance</li>
                <li>Lease-End Services</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our New Car Lease Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Lower Monthly Payments</h3>
              <p className="text-muted-foreground">
                Enjoy reduced monthly costs compared to traditional financing options for the same vehicle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Always Drive New</h3>
              <p className="text-muted-foreground">
                Upgrade to the latest models with current technology and safety features every few years.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Simplified Process</h3>
              <p className="text-muted-foreground">
                Streamlined application and approval with minimal upfront costs and paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
