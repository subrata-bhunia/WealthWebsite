
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Calculator, Clock, Shield } from "lucide-react";

export default function CommercialVehicleLeasePage() {
  return (
    <PageLayout
      title="Commercial Vehicle Lease"
      subtitle="Comprehensive commercial vehicle leasing solutions for businesses of all sizes."
    >
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Truck className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Vehicle Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Light Commercial Vehicles</li>
                <li>Heavy Duty Trucks</li>
                <li>Delivery Vans</li>
                <li>Specialized Vehicles</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Lease Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Flexible Duration</li>
                <li>Customized Payments</li>
                <li>Mileage Options</li>
                <li>Purchase Options</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Business Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fleet Management</li>
                <li>Tax Benefits</li>
                <li>Asset Management</li>
                <li>Business Support</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Coverage Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Commercial Insurance</li>
                <li>Maintenance Plans</li>
                <li>Breakdown Coverage</li>
                <li>Liability Protection</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Commercial Vehicle Leasing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Business Growth</h3>
              <p className="text-muted-foreground">
                Scale your fleet efficiently with flexible leasing options and minimal capital investment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground">
                Reduce maintenance costs and improve fleet management with our comprehensive solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tax Advantages</h3>
              <p className="text-muted-foreground">
                Benefit from tax deductions and improved cash flow management through leasing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
