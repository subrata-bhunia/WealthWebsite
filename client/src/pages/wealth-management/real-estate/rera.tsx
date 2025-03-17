
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, BarChart3, Landmark } from "lucide-react";
import { Link } from "wouter";

export default function RERAProjectsPage() {
  return (
    <PageLayout
      title="RERA Approved Projects"
      subtitle="Invest in RERA-compliant real estate projects offering transparency, security, and growth potential with regulatory protection."
    >
      <div className="grid gap-8">
        {/* Project Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Residential Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Premium Apartments</li>
                <li>Luxury Villas</li>
                <li>Integrated Townships</li>
                <li>Smart Homes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>RERA Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Project Registration</li>
                <li>Developer Verification</li>
                <li>Title Clearance</li>
                <li>Legal Documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Under Construction</li>
                <li>Ready to Move</li>
                <li>Pre-launch Projects</li>
                <li>Resale Properties</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Landmark className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Location Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Metro Cities</li>
                <li>Emerging Markets</li>
                <li>Smart Cities</li>
                <li>Tourist Destinations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Invest in RERA Projects?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Regulatory Protection</h3>
              <p className="text-muted-foreground">
                Enjoy the security of investing in projects regulated by RERA with mandatory compliances and transparency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Verified Developers</h3>
              <p className="text-muted-foreground">
                Access projects from RERA-registered developers with proven track records and financial stability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure Investment</h3>
              <p className="text-muted-foreground">
                Benefit from escrow accounts, standardized agreements, and clear project timelines for your investment.
              </p>
            </div>
          </div>
        </div>

        {/* Link to Fractional Ownership Section */}
        <div className="mt-8">
          <Link href="/wealth-management/real-estate/fractional">
            <Card className="transition-all hover:shadow-md cursor-pointer">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Explore Fractional Ownership Options</h3>
                <p className="text-muted-foreground">
                  Discover opportunities to invest in premium real estate through fractional ownership for lower capital requirements.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
