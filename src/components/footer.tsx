import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="flex  items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 mt-auto ">
      <small className="text-xs hover:text-white/70 transition ">
        &copy; 2024 clark. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li
            key={route.path}
            className="hover:text-white/70 transition hover:-translate-y-1"
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
