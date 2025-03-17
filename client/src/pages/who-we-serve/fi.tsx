
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Building, FileText, Currency } from "lucide-react";

export default function ForeignInvestorsPage() {
  return (
    <PageLayout
      title="Foreign Investors"
      subtitle="Strategic investment solutions for international investors looking to diversify their portfolios in the Indian market."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Market Entry Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              Expert guidance on navigating regulatory requirements and establishing investment presence in India.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Entity Structuring</CardTitle>
            </CardHeader>
            <CardContent>
              Optimize investment vehicles and corporate structures for tax efficiency and regulatory compliance.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Currency className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Currency Management</CardTitle>
            </CardHeader>
            <CardContent>
              Strategic approaches to managing currency risk and optimizing forex transactions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Compliance Services</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive support for navigating FEMA, RBI, and other regulatory requirements for foreign investors.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Foreign Investor Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Local Market Insight</h3>
              <p className="text-muted-foreground">
                Deep understanding of Indian market dynamics, sectors, and investment opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Regulatory Navigation</h3>
              <p className="text-muted-foreground">
                Expert guidance through complex Indian investment regulations and compliance requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">End-to-End Support</h3>
              <p className="text-muted-foreground">
                Comprehensive services from initial market entry to ongoing portfolio management and repatriation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
