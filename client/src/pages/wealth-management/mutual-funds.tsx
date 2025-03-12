import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, BarChart3, RefreshCw } from "lucide-react";

export default function MutualFundsPage() {
  return (
    <PageLayout
      title="Mutual Funds Investment"
      subtitle="Expert guidance for building a diversified mutual fund portfolio that aligns with your investment goals."
    >
      <div className="grid gap-8">
        {/* Investment Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Equity Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Large Cap Funds</li>
                <li>Mid Cap Funds</li>
                <li>Small Cap Funds</li>
                <li>Sector Specific Funds</li>
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
                <li>Money Market Funds</li>
                <li>Ultra Short Duration Funds</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Hybrid Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Balanced Funds</li>
                <li>Dynamic Asset Allocation</li>
                <li>Multi-Asset Funds</li>
                <li>Arbitrage Funds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Investment Process */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Investment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Understanding your risk tolerance and investment goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Portfolio Design</h3>
              <p className="text-sm text-muted-foreground">
                Creating a diversified portfolio strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Executing the investment strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Regular Review</h3>
              <p className="text-sm text-muted-foreground">
                Monitoring and rebalancing your portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";

export default function MutualFundsPage() {
  return (
    <PageLayout
      title="Mutual Funds"
      subtitle="Expert guidance on mutual fund investments to build diversified portfolios aligned with your financial goals."
    >
      <div className="grid gap-8">
        {/* Fund Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Equity Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Large Cap Funds</li>
                <li>Mid Cap Funds</li>
                <li>Small Cap Funds</li>
                <li>Sector-specific Funds</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Debt Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Government Securities</li>
                <li>Corporate Bond Funds</li>
                <li>Short-term Debt Funds</li>
                <li>Credit Risk Funds</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <BarChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Hybrid Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Balanced Funds</li>
                <li>Conservative Hybrid</li>
                <li>Dynamic Asset Allocation</li>
                <li>Multi-Asset Funds</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <PieChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Specialized Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Index Funds</li>
                <li>International Funds</li>
                <li>Thematic Funds</li>
                <li>ESG/Sustainable Funds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Mutual Fund Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Expert Fund Selection</h3>
              <p className="text-muted-foreground">
                Research-driven recommendations tailored to your risk profile and financial objectives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Optimization</h3>
              <p className="text-muted-foreground">
                Strategic asset allocation to maximize returns while managing risk effectively.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ongoing Monitoring</h3>
              <p className="text-muted-foreground">
                Regular performance reviews and rebalancing to ensure alignment with changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
