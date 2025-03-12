
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BarChart, PieChart, LineChart } from "lucide-react";
import { Link } from "wouter";

export default function NCDBondPage() {
  return (
    <PageLayout
      title="NCD & Bond Investments"
      subtitle="Fixed income investment solutions through Non-Convertible Debentures (NCDs) and Bonds for stable returns."
    >
      <div className="grid gap-8">
        {/* Investment Types */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/wealth-management/ncd-bond/ncd">
            <Card className="h-full transition-all hover:shadow-md cursor-pointer">
              <CardHeader>
                <FileText className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Non-Convertible Debentures (NCDs)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Unsecured debt instruments issued by companies with fixed interest rates and maturity periods.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Higher interest rates than traditional FDs</li>
                  <li>Various maturity options</li>
                  <li>Regular interest payouts</li>
                  <li>Tradability on stock exchanges</li>
                </ul>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/wealth-management/ncd-bond/bonds">
            <Card className="h-full transition-all hover:shadow-md cursor-pointer">
              <CardHeader>
                <BarChart className="w-8 h-8 text-primary mb-4" />
                <CardTitle>Bonds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Debt securities issued by corporations and governments that pay periodic interest.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Government and corporate bonds</li>
                  <li>Tax-free options available</li>
                  <li>Capital appreciation potential</li>
                  <li>Diversification benefits</li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardHeader>
              <PieChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fixed and predictable returns</li>
                <li>Regular income stream</li>
                <li>Portfolio diversification</li>
                <li>Inflation-protected options</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Credit rating assessment</li>
                <li>Issuer analysis</li>
                <li>Term structure selection</li>
                <li>Sector diversification</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our NCD & Bond Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Market Access</h3>
              <p className="text-muted-foreground">
                Access to a wide range of NCD and bond offerings across different issuers and credit ratings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-muted-foreground">
                Professional evaluation of investment options based on risk profile and market conditions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Integration</h3>
              <p className="text-muted-foreground">
                Strategic incorporation of fixed income instruments within your overall investment strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
