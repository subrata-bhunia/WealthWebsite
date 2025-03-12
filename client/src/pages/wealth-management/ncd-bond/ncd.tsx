
import { PageTemplate } from "@/components/ui/page-template";

export default function NCD() {
  return (
    <PageTemplate 
      title="Non-Convertible Debentures (NCDs)" 
      description="Secure fixed income investments with attractive returns through NCDs."
    >
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">What are NCDs?</h2>
          <p className="text-gray-600">
            Non-Convertible Debentures (NCDs) are fixed income instruments issued by companies to raise medium to long-term capital. 
            Unlike convertible debentures, NCDs cannot be converted into equity shares of the issuing company. They offer fixed interest 
            rates and have defined maturity periods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Benefits of NCDs</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Higher returns compared to traditional fixed deposits</li>
              <li>Fixed interest rates providing stability</li>
              <li>Option for regular income through periodic interest payments</li>
              <li>Potential for capital appreciation</li>
              <li>Diversification of investment portfolio</li>
              <li>Listing on stock exchanges providing liquidity</li>
            </ul>
          </div>
          
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Factors to Consider</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Credit rating of the issuer</li>
              <li>Interest rate offered</li>
              <li>Maturity period</li>
              <li>Market conditions</li>
              <li>Tax implications</li>
              <li>Liquidity requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
