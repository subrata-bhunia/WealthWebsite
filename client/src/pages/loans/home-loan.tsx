import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Percent, Clock, FileCheck } from "lucide-react";

export default function HomeLoanPage() {
  return (
    <PageLayout
      title="Home Loan"
      subtitle="Realize your dream of homeownership with our flexible and competitive home loan solutions."
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Loan Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Loan Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>New Home Purchase</li>
                <li>Construction Finance</li>
                <li>Plot Purchase</li>
                <li>Home Extension</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Percent className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Interest Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Competitive Rates</li>
                <li>Fixed & Floating Options</li>
                <li>Special Offers</li>
                <li>Balance Transfer</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Flexible Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Up to 30 Years Tenure</li>
                <li>Custom EMI Options</li>
                <li>Part Payment Facility</li>
                <li>Easy Refinancing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileCheck className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Minimal Documents</li>
                <li>Digital Processing</li>
                <li>Quick Approval</li>
                <li>Legal Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Loan Process */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Application Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Apply Online</h3>
              <p className="text-sm text-muted-foreground">
                Fill out our simple online application form
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Document Upload</h3>
              <p className="text-sm text-muted-foreground">
                Submit required documents digitally
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Verification</h3>
              <p className="text-sm text-muted-foreground">
                Quick verification and property assessment
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Loan Disbursement</h3>
              <p className="text-sm text-muted-foreground">
                Fast disbursement after approval
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Tax Benefits</h3>
              <p className="text-muted-foreground">
                Take advantage of tax deductions on principal and interest payments
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-muted-foreground">
                Optional loan protection insurance for added security
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Dedicated relationship manager throughout your loan journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Calculator, Clock, Shield } from "lucide-react";

export default function HomeLoanPage() {
  return (
    <PageLayout
      title="Home Loan"
      subtitle="Comprehensive home loan solutions with competitive rates and flexible repayment options."
    >
      <div className="grid gap-8">
        {/* Loan Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Loan Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>New Home Purchase</li>
                <li>Home Construction</li>
                <li>Home Improvement</li>
                <li>Land Purchase</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financing Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fixed Rate Loans</li>
                <li>Adjustable Rate Loans</li>
                <li>Balance Transfer</li>
                <li>Top-up Loans</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Flexible Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Long Tenure Options</li>
                <li>Customized EMI Plans</li>
                <li>Prepayment Facility</li>
                <li>Step-up/Step-down EMIs</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Added Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Tax Benefits</li>
                <li>Property Insurance Options</li>
                <li>Digital Documentation</li>
                <li>Property Valuation Assistance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Home Loan Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground">
                Access to favorable interest rates from multiple lenders to ensure the best deal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Simplified Process</h3>
              <p className="text-muted-foreground">
                Streamlined application and approval process with minimal documentation requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Professional advice on loan selection, tax implications, and repayment strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
