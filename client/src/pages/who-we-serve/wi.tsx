import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, PiggyBank, Briefcase, FileText } from "lucide-react";

export default function WomenInvestorsPage() {
  return (
    <PageLayout
      title="Women Investors"
      subtitle="Specialized financial strategies addressing the unique investment challenges and opportunities faced by women."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <UserCircle className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Career Transition Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Financial strategies for women navigating career changes, breaks,
              or entrepreneurial ventures.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Retirement Security</CardTitle>
            </CardHeader>
            <CardContent>
              Specialized retirement planning addressing longevity and unique
              earnings patterns.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              Education and empowerment to build investment knowledge and
              confidence in financial decision-making.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Legacy Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive estate planning strategies that align with your
              personal values and goals.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our Women Investor Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Gender-Smart Perspective</h3>
              <p className="text-muted-foreground">
                We understand the financial impacts of gender pay gaps, career
                breaks, and longer life expectancies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Financial Education</h3>
              <p className="text-muted-foreground">
                Our approach emphasizes education and communication to build
                confidence in financial decision-making.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Holistic Planning</h3>
              <p className="text-muted-foreground">
                We address the full spectrum of your financial life, from career
                to retirement to legacy planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
