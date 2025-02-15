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
