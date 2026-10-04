import Link from "next/link";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">

        {/* Website logo */}
        <Link href="/" className="logo">
          Aliyu<span>.</span>
        </Link>

        {/* Dynamically render navigation links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}