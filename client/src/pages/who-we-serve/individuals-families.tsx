// import { PageLayout } from "@/components/layout/page-layout";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Shield, Briefcase, PiggyBank, FileText } from "lucide-react";

// export default function IndividualsFamiliesPage() {
//   return (
//     <PageLayout
//       title="Individuals & Families"
//       subtitle="Comprehensive wealth management solutions tailored to help you and your family achieve your financial goals."
//     >
//       <div className="grid gap-8">
//         {/* Key Services */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <Card>
//             <CardHeader>
//               <Shield className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Financial Protection</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Secure your family's future with comprehensive insurance and risk management solutions.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <Briefcase className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Investment Planning</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Build and manage your investment portfolio with our expert guidance.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <PiggyBank className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Retirement Planning</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Plan for a comfortable retirement with personalized strategies.
//             </CardContent>
//           </Card>
          
//           <Card>
//             <CardHeader>
//               <FileText className="w-8 h-8 text-primary mb-4" />
//               <CardTitle>Estate Planning</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Ensure your legacy with comprehensive estate planning services.
//             </CardContent>
//           </Card>
//         </div>

//         {/* Why Choose Us */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-6">Why Choose Our Services?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="font-semibold mb-2">Personalized Approach</h3>
//               <p className="text-muted-foreground">
//                 We take time to understand your unique situation and goals to create tailored solutions.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">Comprehensive Planning</h3>
//               <p className="text-muted-foreground">
//                 Our integrated approach covers all aspects of your financial life.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-2">Long-term Partnership</h3>
//               <p className="text-muted-foreground">
//                 We build lasting relationships to help you achieve your long-term financial goals.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Pencil, PiggyBank, HeartHandshake } from "lucide-react";

export default function IndividualsFamiliesPage() {
  return (
    <PageLayout
      title="Individuals & Families"
      subtitle="Comprehensive wealth management solutions for individuals and families at every stage of life."
    >
      <div className="grid gap-8">
        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Pencil className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Retirement Planning</li>
                <li>Education Funding</li>
                <li>Tax Optimization</li>
                <li>Cash Flow Management</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Investment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Portfolio Creation</li>
                <li>Asset Allocation</li>
                <li>Regular Rebalancing</li>
                <li>Performance Monitoring</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Estate Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Will Preparation</li>
                <li>Trust Creation</li>
                <li>Wealth Transfer</li>
                <li>Legacy Planning</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <HeartHandshake className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Disability Coverage</li>
                <li>Property Protection</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Individual & Family Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Holistic Approach</h3>
              <p className="text-muted-foreground">
                Comprehensive financial planning that addresses all aspects of your family's financial life.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Generational Planning</h3>
              <p className="text-muted-foreground">
                Strategies for wealth transfer and estate planning across multiple generations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Life Transitions</h3>
              <p className="text-muted-foreground">
                Expert guidance through major life events like marriage, children, career changes, and retirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
