import { Link } from "wouter";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">WealthSpire</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner in comprehensive wealth management and financial services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-8">
            {Object.values(NAVIGATION_ITEMS).map((category) => (
              <div key={category.label}>
                <h4 className="font-semibold mb-4">{category.label}</h4>
                <ul className="space-y-2">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>
                        <span className="text-sm text-gray-600 hover:text-gray-900">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 WealthSpire. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <span className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}