
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ChartBar, Users, FileText } from "lucide-react";

export default function BusinessOwnersPage() {
  return (
    <PageLayout
      title="Business Owners"
      subtitle="Strategic financial solutions designed to help business owners protect, manage, and grow their enterprises."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Business Protection</CardTitle>
            </CardHeader>
            <CardContent>
              Safeguard your business with comprehensive insurance and risk management strategies.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ChartBar className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Growth Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Develop and implement strategic plans to expand your business operations and market reach.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Succession Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Ensure business continuity with tailored succession and transition strategies.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Tax Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              Minimize tax liabilities with proactive planning and strategic business structures.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Business Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Business Expertise</h3>
              <p className="text-muted-foreground">
                We understand the unique challenges and opportunities faced by business owners in today's market.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Integrated Solutions</h3>
              <p className="text-muted-foreground">
                Our comprehensive approach addresses both business and personal financial needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Strategic Partnership</h3>
              <p className="text-muted-foreground">
                We work alongside you as a trusted advisor to help achieve your long-term business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
