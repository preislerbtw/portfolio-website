import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur">
      <div className="container-page grid h-20 grid-cols-[1fr_auto_1fr] items-center">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Jorge Preisler
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />

          <button
            className="text-ink md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-surface px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}