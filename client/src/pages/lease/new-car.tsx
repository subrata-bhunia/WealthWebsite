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
