
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Calculator, Clock, Shield } from "lucide-react";

export default function EquipmentLeasePage() {
  return (
    <PageLayout
      title="Equipment Lease"
      subtitle="Flexible equipment leasing solutions to help businesses acquire essential machinery and tools."
    >
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Settings className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Equipment Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Industrial Equipment</li>
                <li>Office Equipment</li>
                <li>Technology Systems</li>
                <li>Specialized Tools</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Lease Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Operating Lease</li>
                <li>Finance Lease</li>
                <li>Sale-Leaseback</li>
                <li>Custom Solutions</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Term Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Short-term Rental</li>
                <li>Long-term Lease</li>
                <li>Flexible Payments</li>
                <li>Upgrade Options</li>
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
                <li>Equipment Insurance</li>
                <li>Maintenance Support</li>
                <li>Technical Assistance</li>
                <li>Equipment Training</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Equipment Leasing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Capital Preservation</h3>
              <p className="text-muted-foreground">
                Preserve working capital while accessing the latest equipment for your business.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technology Access</h3>
              <p className="text-muted-foreground">
                Stay competitive with access to the latest equipment and technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Flexible Solutions</h3>
              <p className="text-muted-foreground">
                Customize lease terms and payment structures to match your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
