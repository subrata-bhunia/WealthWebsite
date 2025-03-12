import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/">
            <span className="font-bold text-xl">WealthSpire</span>
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
                            item.items ? (
                              <div key={item.href} className="flex flex-col">
                                <span className="block px-4 py-2 text-sm font-medium">
                                  {item.title}
                                </span>
                                <div className="flex flex-col space-y-2 pl-4 border-l border-border ml-4 mt-1">
                                  {item.items.map((subItem) => (
                                    <Link key={subItem.href} href={subItem.href}>
                                      <span
                                        className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subItem.title}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link key={item.href} href={item.href}>
                                <span
                                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.title}
                                </span>
                              </Link>
                            )
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Link className="space-y-2" href={"/blog"}>
                  <span
                      className="hover:bg-accent rounded-md"
                      onClick={() => setIsOpen(false)}
                  >
                                Blog
                              </span>
                </Link>
                <Link href="/media" className="px-4 py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
                    Media
                  </Link>
                <Button asChild className="w-full">
                  <Link href={"/contact"}>Contact Us</Link>
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
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/">
          <span className="font-bold text-xl">WealthSpire</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            {Object.values(NAVIGATION_ITEMS).map((category) => (
              <NavigationMenuItem key={category.label}>
                <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] lg:w-[600px]">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        {item.items ? ( // Check for nested items
                          <>
                            <div className="font-medium py-1.5">{item.title}</div>
                            <ul className="pl-4 border-l border-border">
                              {item.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <NavigationMenuLink asChild>
                                    <Link href={subItem.href}>
                                      <span
                                        className={cn(
                                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        )}
                                      >
                                        {subItem.title}
                                      </span>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link href={item.href}>
                              <span
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                {item.title}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem key={"blog"}>
              <NavigationMenuTrigger>
                <Link href="/blog">{"Blog"}</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/media">{"Media"}</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}