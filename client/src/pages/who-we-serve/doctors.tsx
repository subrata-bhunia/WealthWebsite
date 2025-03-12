
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Calculator, Briefcase, FileText } from "lucide-react";

export default function DoctorsPage() {
  return (
    <PageLayout
      title="Doctors"
      subtitle="Specialized financial solutions for medical professionals addressing unique challenges from medical school debt to practice management."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Stethoscope className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Practice Management</CardTitle>
            </CardHeader>
            <CardContent>
              Strategic guidance for managing, growing, or selling your medical practice with optimal financial outcomes.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Student Debt Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Custom strategies for efficiently managing and repaying medical school debt while building wealth.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              Tailored investment approaches designed for physicians' unique income patterns and career stages.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Asset Protection</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive protection strategies to safeguard your wealth and practice from potential liability.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Healthcare Professional Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Medical Industry Expertise</h3>
              <p className="text-muted-foreground">
                We understand the unique financial challenges and opportunities faced by medical professionals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Work-Life Balance Focus</h3>
              <p className="text-muted-foreground">
                Our solutions emphasize efficiency, allowing you to focus on your practice and personal life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Career Stage Planning</h3>
              <p className="text-muted-foreground">
                Adaptable strategies that evolve with you from residency through retirement and practice transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
