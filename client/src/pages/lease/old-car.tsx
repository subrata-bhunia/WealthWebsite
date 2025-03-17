
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Gauge, Clock, Shield } from "lucide-react";

export default function OldCarLeasePage() {
  return (
    <PageLayout
      title="Pre-owned Car Lease"
      subtitle="Quality pre-owned vehicle leasing solutions with flexible terms and comprehensive coverage."
    >
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Car className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Vehicle Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Certified Pre-owned Cars</li>
                <li>Premium Used Vehicles</li>
                <li>Multi-brand Options</li>
                <li>Quality Assured Models</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Gauge className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Lease Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lower Monthly Payments</li>
                <li>Flexible Terms</li>
                <li>Extended Warranty</li>
                <li>Maintenance Coverage</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financing Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Competitive Rates</li>
                <li>Custom Payment Plans</li>
                <li>Trade-in Options</li>
                <li>Early Purchase Option</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Protection Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Vehicle Insurance</li>
                <li>Extended Coverage</li>
                <li>Roadside Assistance</li>
                <li>Maintenance Plans</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Pre-owned Car Leasing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Cost-Effective</h3>
              <p className="text-muted-foreground">
                Lower monthly payments and reduced depreciation impact compared to new vehicles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                All vehicles undergo thorough inspection and certification process.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Flexible Options</h3>
              <p className="text-muted-foreground">
                Choose from a wide range of pre-owned vehicles with customizable lease terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
