
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, BarChart3, Percent, Users } from "lucide-react";
import { Link } from "wouter";

export default function FractionalOwnershipPage() {
  return (
    <PageLayout
      title="Fractional Real Estate Ownership"
      subtitle="Access premium commercial real estate investments through fractional ownership, enabling diversification with lower capital requirements."
    >
      <div className="grid gap-8">
        {/* Investment Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Property Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Grade A Office Spaces</li>
                <li>Premium Retail Centers</li>
                <li>Warehousing Facilities</li>
                <li>Data Centers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>SPV-based Ownership</li>
                <li>Transparent Legal Structure</li>
                <li>Professional Management</li>
                <li>Regular Income Distribution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Percent className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Returns Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Rental Yield: 8-10% p.a.</li>
                <li>Capital Appreciation</li>
                <li>Tax Benefits</li>
                <li>Portfolio Diversification</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investor Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lower Investment Entry</li>
                <li>Hassle-free Management</li>
                <li>Easy Exit Options</li>
                <li>Risk Distribution</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Fractional Ownership?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Accessible Investment</h3>
              <p className="text-muted-foreground">
                Access institutional-grade properties with lower capital requirements through fractional ownership.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Management</h3>
              <p className="text-muted-foreground">
                Expert property and asset management ensuring optimal performance and maintenance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Diversification Benefits</h3>
              <p className="text-muted-foreground">
                Spread investments across multiple properties and locations to optimize risk-return profile.
              </p>
            </div>
          </div>
        </div>

        {/* Link to REIT Section */}
        <div className="mt-8">
          <Link href="/wealth-management/real-estate/reit">
            <Card className="transition-all hover:shadow-md cursor-pointer">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Explore REIT Investment Options</h3>
                <p className="text-muted-foreground">
                  Discover our range of Real Estate Investment Trust options for liquid real estate investments.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
