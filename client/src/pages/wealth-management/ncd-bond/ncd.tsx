
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, BarChart3, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function NCDBondPage() {
  return (
    <PageLayout
      title="Non-Convertible Debentures (NCDs)"
      subtitle="Secure fixed income investment solutions through Non-Convertible Debentures for stable and predictable returns."
    >
      <div className="grid gap-8">
        {/* NCD Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Corporate NCDs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>High-rated Corporate Issuers</li>
                <li>Competitive Interest Rates</li>
                <li>Diverse Maturity Options</li>
                <li>Regular Interest Payouts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Secured NCDs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Asset-backed Security</li>
                <li>Lower Risk Profile</li>
                <li>Collateralized Instruments</li>
                <li>Enhanced Protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>NCD Investment Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Short-term (1-3 years)</li>
                <li>Medium-term (3-5 years)</li>
                <li>Long-term (5+ years)</li>
                <li>Customized Tenor Options</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Interest Payment Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Monthly Interest Options</li>
                <li>Quarterly Distributions</li>
                <li>Annual Payment Models</li>
                <li>Cumulative Interest Plans</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our NCD Investment Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Higher Returns</h3>
              <p className="text-muted-foreground">
                NCDs typically offer higher interest rates compared to traditional fixed deposits and savings accounts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-muted-foreground">
                Professional evaluation of NCD options based on issuer credit ratings, market conditions, and your risk profile.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Liquidity Options</h3>
              <p className="text-muted-foreground">
                Access to secondary market trading for NCDs, providing potential exit options before maturity when needed.
              </p>
            </div>
          </div>
        </div>

        {/* Link to Bonds Section */}
        <div className="mt-8">
          <Link href="/wealth-management/ncd-bond/bonds">
            <Card className="transition-all hover:shadow-md cursor-pointer">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Explore Bond Investment Options</h3>
                <p className="text-muted-foreground">
                  Discover our range of government and corporate bond investment solutions to further diversify your fixed income portfolio.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
