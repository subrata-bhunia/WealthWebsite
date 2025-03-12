
import { PageTemplate } from "@/components/ui/page-template";

export default function WhoWeServeOverview() {
  return (
    <PageTemplate 
      title="Who We Serve" 
      description="WealthSpire serves a diverse range of clients with tailored financial solutions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Individuals & Families</h2>
          <p className="text-gray-600">Personalized financial planning for your family's future.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Executives</h2>
          <p className="text-gray-600">Strategic wealth management for corporate executives.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Attorneys</h2>
          <p className="text-gray-600">Financial solutions tailored to legal professionals.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Doctors</h2>
          <p className="text-gray-600">Wealth management strategies for medical professionals.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Business Owners</h2>
          <p className="text-gray-600">Comprehensive financial planning for entrepreneurs.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Woman Investors</h2>
          <p className="text-gray-600">Empowering financial independence and growth.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
