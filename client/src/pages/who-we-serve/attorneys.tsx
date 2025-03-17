
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, ClipboardList, PieChart, BarChart4 } from "lucide-react";

export default function AttorneysPage() {
  return (
    <PageLayout
      title="Attorneys"
      subtitle="Specialized wealth management solutions for legal professionals with unique income structures and financial planning needs."
    >
      <div className="grid gap-8">
        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Scale className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Practice Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Partnership Structures</li>
                <li>Buy-Sell Agreements</li>
                <li>Succession Planning</li>
                <li>Practice Valuation</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <ClipboardList className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Cash Flow Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Variable Income Strategies</li>
                <li>Tax Optimization</li>
                <li>Debt Management</li>
                <li>Budgeting Systems</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <PieChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Retirement Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Partner Retirement Plans</li>
                <li>Solo 401(k) Options</li>
                <li>Defined Benefit Plans</li>
                <li>Retirement Timing</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <BarChart4 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Risk-Adjusted Portfolios</li>
                <li>Tax-Efficient Investing</li>
                <li>Alternative Investments</li>
                <li>Asset Protection</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Attorney Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Industry Knowledge</h3>
              <p className="text-muted-foreground">
                Deep understanding of the financial challenges and opportunities specific to legal professionals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Coordination</h3>
              <p className="text-muted-foreground">
                Seamless integration with your legal expertise for comprehensive financial and estate planning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Time Efficiency</h3>
              <p className="text-muted-foreground">
                Streamlined financial services designed to accommodate the demanding schedules of attorneys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
