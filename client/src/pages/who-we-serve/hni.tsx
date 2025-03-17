
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Briefcase, Shield, FileText } from "lucide-react";

export default function HNIPage() {
  return (
    <PageLayout
      title="High Net Worth Individuals"
      subtitle="Exclusive wealth management solutions designed for high net worth individuals with complex financial needs."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <DollarSign className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Wealth Structuring</CardTitle>
            </CardHeader>
            <CardContent>
              Sophisticated approaches to organizing your wealth across various asset classes and jurisdictions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Management</CardTitle>
            </CardHeader>
            <CardContent>
              Access to exclusive investment opportunities and personalized portfolio management.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Asset Protection</CardTitle>
            </CardHeader>
            <CardContent>
              Advanced strategies to protect your wealth from potential risks and liabilities.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Legacy Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive estate and succession planning to preserve your wealth for future generations.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our HNI Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Exclusive Access</h3>
              <p className="text-muted-foreground">
                Privileged access to unique investment opportunities not available to the general public.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">
                A dedicated team of specialists who understand the complexities of high net worth financial management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Privacy & Discretion</h3>
              <p className="text-muted-foreground">
                Highest levels of confidentiality and privacy in all aspects of our wealth management services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
