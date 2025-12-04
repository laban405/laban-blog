import Link from "next/link";
import { Settings2 } from "lucide-react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Customers", href: "/customers" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Events", href: "/events" },
  ],
  industries: [
    { label: "Precision Metalforming", href: "/industries/precision-metalforming" },
    { label: "Industrial Manufacturing", href: "/industries/industrial" },
    { label: "High Tech & electronics", href: "/industries/high-tech" },
    { label: "Aerospace", href: "/industries/aerospace" },
  ],
  products: [
    { label: "Manufacturing Execution System", href: "/products/mes" },
    { label: "Enterprise Resource Planning", href: "/products/erp" },
    { label: "Quality Management System", href: "/products/qms" },
    { label: "Supply Chain Planning", href: "/products/scp" },
  ],
};

export default function ProdmastFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Settings2 className="h-6 w-6 text-[#2DD4BF]" />
              <span className="text-xl font-bold text-white">Prodmast</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Our solutions make production faster and cheaper. Contact us for
              more information.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Get In Touch</h3>
              <a
                href="mailto:hello@prodmast.com"
                className="text-[#2DD4BF] hover:underline"
              >
                hello@prodmast.com
              </a>
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://linkedin.com"
                  className="hover:text-[#2DD4BF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-[#2DD4BF] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="hover:text-[#2DD4BF] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Prodmast. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-[#2DD4BF] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[#2DD4BF] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

