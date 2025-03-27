
import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Stethoscope, Scale, Building2, UserCircle, Heart, DollarSign, Landmark, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export default function WhoWeServeOverviewPage() {
  const whoWeServeItems = NAVIGATION_ITEMS.whoWeServe.items;

  return (
    <PageLayout
      title="Who We Serve"
      subtitle="Specialized wealth management services for diverse client profiles with unique financial needs."
    >
      <div className="grid gap-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeItems.map((item, index) => {
            // Skip the overview item
            if (item.title === "Overview") return null;
            
            // Determine icon based on title
            let Icon = Users;
            if (item.title.includes("Executive")) Icon = Briefcase;
            if (item.title.includes("Attorney")) Icon = Scale;
            if (item.title.includes("Doctor")) Icon = Stethoscope;
            if (item.title.includes("Business")) Icon = Building2;
            if (item.title.includes("Woman")) Icon = UserCircle;
            if (item.title.includes("Charitable")) Icon = Heart;
            if (item.title.includes("HNI")) Icon = DollarSign;
            if (item.title.includes("Family Office")) Icon = Landmark;
            if (item.title.includes("NRI") || item.title.includes("Foreign")) Icon = Globe;

            return (
              <Link key={index} href={item.href}>
                <Card className="h-full transition-all hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized financial services and strategies tailored for {item.title.toLowerCase()}.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Our Client-Centric Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Understanding Your Needs</h3>
              <p className="text-muted-foreground">
                We take time to truly understand your unique financial situation, goals, and aspirations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tailored Strategies</h3>
              <p className="text-muted-foreground">
                Our experts develop customized financial plans that align with your specific circumstances.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Long-term Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships, guiding you through every stage of your financial journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
