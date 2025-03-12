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
import { PageTemplate } from "@/components/ui/page-template";

export default function MutualFunds() {
  return (
    <PageTemplate 
      title="Mutual Funds" 
      description="Diversified investment solutions through professionally managed mutual funds."
    >
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Our Mutual Fund Services</h2>
          <p className="text-gray-600 mb-4">
            At WealthSpire, we provide access to a wide range of mutual funds designed to meet various investment objectives, 
            risk profiles, and time horizons.
          </p>
          
          <h3 className="text-lg font-medium mb-2">We offer:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Equity funds for long-term growth</li>
            <li>Debt funds for stable income</li>
            <li>Hybrid funds for balanced exposure</li>
            <li>Sector-specific funds for targeted investments</li>
            <li>Index funds for market-linked returns</li>
            <li>International funds for global diversification</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Fund Selection Methodology</h3>
            <p className="text-gray-600">
              Our rigorous fund selection process considers historical performance, fund manager track record, 
              expense ratios, risk-adjusted returns, and alignment with your financial goals.
            </p>
          </div>
          
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Regular Monitoring & Review</h3>
            <p className="text-gray-600">
              We continuously monitor fund performance and provide periodic reviews to ensure your investments 
              remain aligned with your financial objectives and market conditions.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
