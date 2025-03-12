import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Landmark, FileText, Coins } from "lucide-react";

export default function CharitableInvestorsPage() {
  return (
    <PageLayout
      title="Charitable Investors"
      subtitle="Strategic financial solutions for philanthropically-minded investors seeking to maximize their charitable impact and legacy."
    >
      <div className="grid gap-8">
        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Charitable Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Strategic approach to philanthropy, aligning your giving with your values and maximizing your charitable impact.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Landmark className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Foundation Management</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive support for establishing and managing private foundations with efficient grant-making processes.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Coins className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Tax-Efficient Giving</CardTitle>
            </CardHeader>
            <CardContent>
              Innovative strategies to maximize tax benefits while supporting the causes that matter most to you.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Legacy Planning</CardTitle>
            </CardHeader>
            <CardContent>
              Designing a meaningful philanthropic legacy that reflects your values and creates lasting impact.
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Philanthropic Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-muted-foreground">
                We help align your philanthropic goals with effective giving strategies that create lasting change.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Financial Integration</h3>
              <p className="text-muted-foreground">
                Our approach integrates charitable planning with your overall wealth management strategy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Values-Based Approach</h3>
              <p className="text-muted-foreground">
                We focus on creating giving plans that reflect your personal values and philanthropic vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}