
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Home, BarChart, FileText } from "lucide-react";

export default function NRIPage() {
  return (
    <PageLayout
      title="Non-Resident Indians"
      subtitle="Specialized financial services for NRIs navigating investments and wealth management across borders."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Cross-Border Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Navigate the complexities of international taxation and financial regulations across multiple jurisdictions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Real Estate Investment</CardTitle>
            </CardHeader>
            <CardContent>
              Strategic guidance for real estate investments in India while residing abroad.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Portfolio Management</CardTitle>
            </CardHeader>
            <CardContent>
              Diversified investment strategies optimized for NRIs with assets in multiple countries.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Repatriation Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Strategic planning for efficient repatriation of funds and potential return to India.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our NRI Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Cross-Border Expertise</h3>
              <p className="text-muted-foreground">
                Specialized knowledge of international tax treaties and financial regulations affecting NRIs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Remote Management</h3>
              <p className="text-muted-foreground">
                Digital-first services designed for clients managing their Indian investments from abroad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cultural Understanding</h3>
              <p className="text-muted-foreground">
                Deep appreciation of the unique cultural and financial priorities of the NRI community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
