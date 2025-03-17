
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, LineChart, Users } from "lucide-react";

export default function StartupInvestmentPage() {
  return (
    <PageLayout
      title="Startup Investment"
      subtitle="Strategic investment opportunities in high-potential startups across various sectors with professional due diligence and portfolio management."
    >
      <div className="grid gap-8">
        {/* Investment Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Rocket className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Stages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Seed Stage</li>
                <li>Early Stage</li>
                <li>Growth Stage</li>
                <li>Pre-IPO</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Sectors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Technology</li>
                <li>Healthcare</li>
                <li>Fintech</li>
                <li>Sustainability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Direct Investment</li>
                <li>Angel Funds</li>
                <li>Startup Funds</li>
                <li>AIFs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Due Diligence</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Team Assessment</li>
                <li>Market Analysis</li>
                <li>Financial Review</li>
                <li>Legal Compliance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Invest in Startups?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">High Growth Potential</h3>
              <p className="text-muted-foreground">
                Access early-stage investments in innovative companies with significant growth prospects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Diversification</h3>
              <p className="text-muted-foreground">
                Add uncorrelated assets to your portfolio through carefully selected startup investments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Management</h3>
              <p className="text-muted-foreground">
                Benefit from expert due diligence, deal structuring, and ongoing portfolio monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Exit Strategies Section */}
        <div className="mt-8">
          <Card className="transition-all">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Exit Strategies</h3>
              <p className="text-muted-foreground">
                Multiple exit opportunities through IPOs, strategic sales, secondary sales, and buybacks with professional guidance at each stage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
