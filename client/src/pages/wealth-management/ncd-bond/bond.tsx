
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Shield, BarChart3, Clock } from "lucide-react";
import { Link } from "wouter";

export default function BondPage() {
  return (
    <PageLayout
      title="Corporate & Government Bonds"
      subtitle="Strategic fixed-income investment solutions through bonds for stable returns and portfolio diversification."
    >
      <div className="grid gap-8">
        {/* Bond Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Government Bonds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Treasury Bonds</li>
                <li>State Development Loans</li>
                <li>Sovereign Gold Bonds</li>
                <li>Infrastructure Bonds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Corporate Bonds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>AAA-Rated Corporate</li>
                <li>PSU Bonds</li>
                <li>Bank Bonds</li>
                <li>Infrastructure Bonds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Bond Investment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Short-term (1-3 years)</li>
                <li>Medium-term (3-7 years)</li>
                <li>Long-term (7+ years)</li>
                <li>Perpetual Bonds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Interest Payment Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fixed Rate Bonds</li>
                <li>Floating Rate Bonds</li>
                <li>Zero Coupon Bonds</li>
                <li>Inflation-Linked Bonds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our Bond Investment Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Stable Returns</h3>
              <p className="text-muted-foreground">
                Regular interest income with predictable returns through fixed-income securities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Diversification</h3>
              <p className="text-muted-foreground">
                Balance your investment portfolio with low-correlation fixed-income assets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Capital Preservation</h3>
              <p className="text-muted-foreground">
                Lower risk profile compared to equity investments with focus on principal protection.
              </p>
            </div>
          </div>
        </div>

        {/* Link to NCDs Section */}
        <div className="mt-8">
          <Link href="/wealth-management/ncd-bond/ncd">
            <Card className="transition-all hover:shadow-md cursor-pointer">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Explore NCD Investment Options</h3>
                <p className="text-muted-foreground">
                  Discover our range of Non-Convertible Debentures for enhanced yields in your fixed income portfolio.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
