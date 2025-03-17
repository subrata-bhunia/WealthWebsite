
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileCheck, PieChart, Landmark } from "lucide-react";
import { Link } from "wouter";

export default function RealEstatePage() {
  return (
    <PageLayout
      title="Real Estate Investment"
      subtitle="Strategic real estate investment opportunities for portfolio diversification and stable returns."
    >
      <div className="grid gap-8">
        {/* Investment Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Commercial Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Office Spaces</li>
                <li>Retail Properties</li>
                <li>Industrial Units</li>
                <li>Warehouses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileCheck className="w-8 h-8 text-primary mb-4" />
              <CardTitle>RERA Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Pre-approved Projects</li>
                <li>Compliant Developments</li>
                <li>Verified Builders</li>
                <li>Secure Investments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PieChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Fractional Ownership</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Grade A Properties</li>
                <li>Managed Operations</li>
                <li>Regular Yields</li>
                <li>Lower Investment Entry</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Landmark className="w-8 h-8 text-primary mb-4" />
              <CardTitle>REITs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Listed REITs</li>
                <li>Commercial REITs</li>
                <li>Residential REITs</li>
                <li>Hybrid REITs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our Real Estate Investment Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Curated Opportunities</h3>
              <p className="text-muted-foreground">
                Access to premium real estate investments vetted by our expert team.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-muted-foreground">
                All investments are fully compliant with RERA and other regulatory requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Investment Flexibility</h3>
              <p className="text-muted-foreground">
                Multiple investment options from fractional ownership to REITs for different budgets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
