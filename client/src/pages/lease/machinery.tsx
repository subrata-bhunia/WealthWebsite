
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Calculator, Clock, Shield } from "lucide-react";

export default function MachineryLeasePage() {
  return (
    <PageLayout
      title="Machinery Lease"
      subtitle="Comprehensive machinery leasing solutions for industrial and manufacturing needs."
    >
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Wrench className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Machinery Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Manufacturing Equipment</li>
                <li>Construction Machinery</li>
                <li>Processing Units</li>
                <li>Heavy Machinery</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financial Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Flexible Terms</li>
                <li>Custom Payment Plans</li>
                <li>Purchase Options</li>
                <li>Asset Management</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Lease Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Operating Lease</li>
                <li>Financial Lease</li>
                <li>Maintenance Lease</li>
                <li>Full-Service Lease</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Support Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Technical Support</li>
                <li>Maintenance Services</li>
                <li>Operator Training</li>
                <li>Safety Compliance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Machinery Leasing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground">
                Access modern machinery without large capital investments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground">
                Comprehensive maintenance and technical support included in lease terms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Growth</h3>
              <p className="text-muted-foreground">
                Scale your operations with flexible machinery leasing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
