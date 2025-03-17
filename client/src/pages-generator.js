
/**
 * This is a utility script to generate page files based on the navigation items
 * in constants.ts. Run with Node.js to create page files.
 */

const fs = require('fs');
const path = require('path');

// Template for basic page content
const generatePageContent = (title, section) => {
  const formattedTitle = title.replace(/&/g, 'and');
  const icons = ["Shield", "LineChart", "Users", "Building", "DollarSign", "Briefcase", "FileText", "Clock", "Calculator", "Home", "Car"];
  
  // Choose random icons from the list
  const randomIcons = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * icons.length);
    randomIcons.push(icons[randomIndex]);
  }

  return `import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ${randomIcons.join(', ')} } from "lucide-react";

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <PageLayout
      title="${formattedTitle}"
      subtitle="Comprehensive ${section.toLowerCase()} solutions tailored to your unique financial needs and goals."
    >
      <div className="grid gap-8">
        {/* ${section} Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <${randomIcons[0]} className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Benefit One</li>
                <li>Benefit Two</li>
                <li>Benefit Three</li>
                <li>Benefit Four</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <${randomIcons[1]} className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Benefit One</li>
                <li>Benefit Two</li>
                <li>Benefit Three</li>
                <li>Benefit Four</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <${randomIcons[2]} className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Benefit One</li>
                <li>Benefit Two</li>
                <li>Benefit Three</li>
                <li>Benefit Four</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <${randomIcons[3]} className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Feature Four</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Benefit One</li>
                <li>Benefit Two</li>
                <li>Benefit Three</li>
                <li>Benefit Four</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our ${formattedTitle} Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                Tailored ${section.toLowerCase()} solutions designed specifically for your individual needs and goals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Professional advisors with deep industry knowledge to guide your decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Continuous assistance and regular reviews to adapt to changing circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
`;
};

// You would use this script with Node.js to generate all pages

console.log('This script can be used to generate pages based on the constants.ts navigation items.');
