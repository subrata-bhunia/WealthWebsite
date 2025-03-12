import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Briefcase, PiggyBank, FileText } from "lucide-react";

export default function IndividualsFamiliesPage() {
  return (
    <PageLayout
      title="Individuals & Families"
      subtitle="Comprehensive wealth management solutions tailored to help you and your family achieve your financial goals."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financial Protection</CardTitle>
            </CardHeader>
            <CardContent>
              Secure your family's future with comprehensive insurance and risk management solutions.
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Build and manage your investment portfolio with our expert guidance.
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Retirement Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Plan for a comfortable retirement with personalized strategies.
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Estate Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Ensure your legacy with comprehensive estate planning services.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Personalized Approach</h3>
              <p className="text-muted-foreground">
                We take time to understand your unique situation and goals to create tailored solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Comprehensive Planning</h3>
              <p className="text-muted-foreground">
                Our integrated approach covers all aspects of your financial life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Long-term Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships to help you achieve your long-term financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
