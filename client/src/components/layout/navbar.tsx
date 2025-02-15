import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="font-bold text-xl">WealthSpire</a>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Accordion type="single" collapsible className="w-full">
                  {Object.values(NAVIGATION_ITEMS).map((category) => (
                    <AccordionItem key={category.label} value={category.label}>
                      <AccordionTrigger>{category.label}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {category.items.map((item) => (
                            <Link key={item.href} href={item.href}>
                              <a className="px-4 py-2 text-sm" onClick={() => setIsOpen(false)}>
                                {item.title}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <a className="font-bold text-xl">WealthSpire</a>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {Object.values(NAVIGATION_ITEMS).map((category) => (
              <NavigationMenuItem key={category.label}>
                <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <a className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}>
                              {item.title}
                            </a>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}