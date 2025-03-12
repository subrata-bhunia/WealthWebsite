
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Users, BarChart, FileText } from "lucide-react";

export default function FamilyOfficeServicesPage() {
  return (
    <PageLayout
      title="Family Office Services"
      subtitle="Comprehensive wealth management and governance solutions for affluent families seeking to preserve wealth across generations."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Landmark className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Multi-Family Office</CardTitle>
            </CardHeader>
            <CardContent>
              Full-service family office solutions with economies of scale and dedicated expertise.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Family Governance</CardTitle>
            </CardHeader>
            <CardContent>
              Establish frameworks for family decision-making and generational wealth transfer.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Consolidated Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive financial reporting across all family assets and investments.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Trust Administration</CardTitle>
            </CardHeader>
            <CardContent>
              Professional management of family trusts and fiduciary responsibilities.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Family Office Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Generational Expertise</h3>
              <p className="text-muted-foreground">
                Specialized knowledge in managing and transitioning wealth across multiple generations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Holistic Oversight</h3>
              <p className="text-muted-foreground">
                Coordinated management of all family financial affairs, from investments to philanthropy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Conflict Management</h3>
              <p className="text-muted-foreground">
                Objective mediation and governance structures to manage family dynamics and decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
