
import { PageTemplate } from "@/components/ui/page-template";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NCDBond() {
  return (
    <PageTemplate 
      title="NCD/Bond Investments" 
      description="Fixed income investment solutions through Non-Convertible Debentures (NCDs) and Bonds."
    >
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Fixed Income Securities</h2>
          <p className="text-gray-600 mb-4">
            Fixed income securities like NCDs and bonds form an essential part of a well-diversified investment portfolio, 
            providing stability, regular income, and capital preservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Non-Convertible Debentures (NCDs)</h3>
            <p className="text-gray-600 mb-4">
              NCDs are fixed income instruments issued by companies to raise medium to long-term capital. 
              They offer higher returns compared to traditional fixed deposits with varied maturity options.
            </p>
            <Link href="/wealth-management/ncd-bond/ncd">
              <Button className="mt-2">Learn More About NCDs</Button>
            </Link>
          </div>
          
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Bonds</h3>
            <p className="text-gray-600 mb-4">
              Bonds are debt instruments issued by governments, municipalities, and corporations to raise capital. 
              They provide predictable income streams with relatively lower risk compared to equity investments.
            </p>
            <Link href="/wealth-management/ncd-bond/bonds">
              <Button className="mt-2">Learn More About Bonds</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
