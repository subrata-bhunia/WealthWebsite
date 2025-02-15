import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, FileText, Users } from "lucide-react";

export default function BusinessInsurancePage() {
  return (
    <PageLayout
      title="Business Insurance"
      subtitle="Comprehensive insurance solutions to protect your business assets, employees, and operations."
    >
      <div className="grid gap-8">
        {/* Insurance Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Property Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Building Coverage</li>
                <li>Equipment Protection</li>
                <li>Inventory Insurance</li>
                <li>Business Interruption</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Liability Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>General Liability</li>
                <li>Professional Liability</li>
                <li>Product Liability</li>
                <li>Cyber Liability</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Employee Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Workers Compensation</li>
                <li>Group Health Insurance</li>
                <li>Disability Coverage</li>
                <li>Life Insurance</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Specialized Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Directors & Officers</li>
                <li>Commercial Auto</li>
                <li>Marine Insurance</li>
                <li>Trade Credit</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Business Insurance?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Customized Solutions</h3>
              <p className="text-muted-foreground">
                Tailored insurance packages designed specifically for your business needs and industry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive risk evaluation to ensure complete coverage of potential threats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Claims Support</h3>
              <p className="text-muted-foreground">
                Dedicated claims assistance to ensure smooth and quick resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
