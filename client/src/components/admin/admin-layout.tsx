import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactsList } from "./contacts-list";
import { BlogManagement } from "./blog-management";
import { Button } from "@/components/ui/button";
import { isAuthenticated, isAdmin } from "@/lib/auth";

export function AdminLayout() {
  const [, setLocation] = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if user is authenticated and is admin
    if (!isAuthenticated() || !isAdmin()) {
      setLocation("/login");
    }
    setInitialized(true);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("wealthspire_auth_token"); //Added this line for logout functionality
    setLocation("/");
  };

  if (!initialized || !isAuthenticated() || !isAdmin()) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full pt-24 pb-12 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Admin Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage blog posts and view contact submissions
          </p>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="mt-4"
          >
            Logout
          </Button>
        </div>
      </section>

      <section className="flex-1 w-full py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blogs" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="blogs">Blog Management</TabsTrigger>
              <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            </TabsList>
            <TabsContent value="blogs" className="mt-6">
              <BlogManagement />
            </TabsContent>
            <TabsContent value="contacts" className="mt-6">
              <ContactsList />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}