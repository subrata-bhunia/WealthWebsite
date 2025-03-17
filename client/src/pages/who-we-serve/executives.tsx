// import { PageLayout } from "@/components/layout/page-layout";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { LineChart, Briefcase, Target, Shield } from "lucide-react";

// export default function ExecutivesPage() {
//   return (
//     <PageLayout
//       title="Executives"
//       subtitle="Specialized wealth management solutions for corporate executives, tailored to address your unique financial challenges and opportunities."
//     >
//       <div className="grid gap-8">
//         {/* Key Services */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <Card>
//             <CardHeader>
//               <LineChart className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Equity Compensation</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Expert guidance on stock options, RSUs, and other equity-based compensation structures.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <Briefcase className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Tax Planning</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Strategic tax planning to optimize your compensation package and investment returns.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <Target className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Retirement Strategy</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Comprehensive retirement planning tailored to high-income executives.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <Shield className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Risk Management</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Protecting your wealth through comprehensive insurance and risk mitigation strategies.
//             </CardContent>
//           </Card>
//         </div>

//         {/* Executive Benefits */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-6">Executive Benefits</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="font-semibold mb-2">Dedicated Advisory Team</h3>
//               <p className="text-muted-foreground">
//                 Access to senior wealth advisors who understand executive compensation and corporate finance.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">Corporate Transition Support</h3>
//               <p className="text-muted-foreground">
//                 Guidance through career transitions, M&A events, and corporate restructuring.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">Integrated Planning</h3>
//               <p className="text-muted-foreground">
//                 Coordination with your legal and tax advisors for comprehensive wealth management.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Executive Focus Areas */}
//         <div className="mt-12 bg-primary/5 p-8 rounded-lg">
//           <h2 className="text-2xl font-bold mb-6">Our Executive Focus Areas</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold mb-2">Stock Option Strategies</h3>
//               <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                 <li>Exercise timing optimization</li>
//                 <li>Tax-efficient liquidation strategies</li>
//                 <li>10b5-1 trading plans</li>
//                 <li>Diversification strategies</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">Executive Benefits</h3>
//               <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                 <li>Deferred compensation planning</li>
//                 <li>Supplemental executive retirement plans</li>
//                 <li>Golden parachute analysis</li>
//                 <li>Executive bonus arrangements</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, LineChart, CoinsIcon } from "lucide-react";

export default function ExecutivesPage() {
  return (
    <PageLayout
      title="Executives"
      subtitle="Specialized wealth management solutions for corporate executives with complex compensation packages and financial needs."
    >
      <div className="grid gap-8">
        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Compensation Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Stock Option Analysis</li>
                <li>RSU Management</li>
                <li>Deferred Compensation</li>
                <li>Bonus Optimization</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CoinsIcon className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Tax Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Tax-Efficient Investing</li>
                <li>AMT Planning</li>
                <li>Multi-State Tax Issues</li>
                <li>Capital Gains Planning</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Award className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Retirement Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Executive Benefits</li>
                <li>Pension Maximization</li>
                <li>Early Retirement Options</li>
                <li>Income Replacement</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <LineChart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Wealth Accumulation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Concentrated Position Management</li>
                <li>Diversification Strategies</li>
                <li>Alternative Investments</li>
                <li>Wealth Protection</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Executive Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Specialized Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of executive compensation structures and corporate benefits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Integrated Planning</h3>
              <p className="text-muted-foreground">
                Coordination between corporate benefits, personal investments, and long-term goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Confidentiality</h3>
              <p className="text-muted-foreground">
                Discreet handling of sensitive financial information and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
