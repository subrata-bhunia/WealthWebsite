
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Shield, Clock } from "lucide-react";

export default function MutualFundsPage() {
  return (
    <PageLayout
      title="Mutual Funds"
      subtitle="Strategic investment solutions through professionally managed mutual fund portfolios for diversified wealth creation."
    >
      <div className="grid gap-8">
        {/* Fund Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Equity Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Large Cap Funds</li>
                <li>Mid Cap Funds</li>
                <li>Small Cap Funds</li>
                <li>Multi Cap Funds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Debt Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Government Securities</li>
                <li>Corporate Bonds</li>
                <li>Money Market</li>
                <li>Ultra Short Duration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Hybrid Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Balanced Advantage</li>
                <li>Aggressive Hybrid</li>
                <li>Conservative Hybrid</li>
                <li>Multi-Asset Allocation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Solution Oriented</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Retirement Funds</li>
                <li>Children's Funds</li>
                <li>Tax Saving Funds</li>
                <li>Index Funds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our Mutual Fund Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Professional Management</h3>
              <p className="text-muted-foreground">
                Expert fund managers ensuring optimal portfolio performance through active management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Diversification</h3>
              <p className="text-muted-foreground">
                Spread risk across multiple securities and sectors for balanced returns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Systematic Investment</h3>
              <p className="text-muted-foreground">
                Regular investment options through SIP for disciplined wealth creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
