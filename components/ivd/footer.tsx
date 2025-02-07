import { Github, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="relative h-full container">
      <div className="max-w-screen-lg w-full mx-auto p-2 bg-primary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 max-md:px-5">
          <div className="space-y-2 flex flex-col justify-between max-md:col-span-2">
            <div className="text-secondary">Brand Name</div>
            <p className="md:text-xs text-sm text-muted-foreground">
              Your Ultimate Task Management Solution for Enhanced Productivity
              and Efficiency
            </p>
            <div className="flex gap-2 text-muted">
              <span>
                <Github className="w-4 h-4" />
              </span>
              <span>
                <Instagram className="w-4 h-4" />
              </span>
              <span>
                <Github className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="w-full md:text-xs text-sm flex flex-col gap-2">
            <h2 className="text-muted-foreground">Company</h2>
            <ul className="flex flex-col">
              <li className="text-secondary hover:text-muted flex space-y-2 flex-col">
                <Link href={""}>About Us</Link>
                <Link href={""}>Teams</Link>
                <Link href={""}>Contact</Link>
                <Link href={""}>Careers</Link>
                <Link href={""}>Our Works</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:text-xs text-sm flex flex-col gap-2">
            <h2 className="text-muted-foreground">Services</h2>
            <ul className="flex flex-col">
              <li className="text-secondary hover:text-muted flex space-y-2 flex-col">
                <Link href={""}>Branding</Link>
                <Link href={""}>Video Production</Link>
                <Link href={""}>Web Design</Link>
                <Link href={""}>Ecommerce</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:text-xs text-sm flex flex-col gap-2">
            <h2 className="text-muted-foreground">Resources</h2>
            <ul className="flex flex-col">
              <li className="text-secondary hover:text-muted flex space-y-2 flex-col">
                <Link href={""}>Blog</Link>
                <Link href={""}>Guides</Link>
                <Link href={""}>Partners</Link>
                <Link href={""}>Help Center</Link>
                <Link href={""}>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-zinc-950 py-2">
        <p className="text-muted-foreground text-xs font-medium">
          ©2025 Brand Name INC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
export { Footer };
