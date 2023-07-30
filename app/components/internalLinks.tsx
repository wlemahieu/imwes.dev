import { Link, useLocation } from "@remix-run/react";

export default function InternalLinks() {
  const location = useLocation();

  const activeLinkClasses = (url: string) => {
    if (url === location.pathname) return "underline font-bold";
    return "";
  };

  return (
    <ul className="flex justify-center mt-4">
      <li className="space-x-5 text-xl text-white">
        <Link to="/" className={activeLinkClasses("/")}>
          Home
        </Link>
        <Link to="/story" className={activeLinkClasses("/story")}>
          Story
        </Link>
      </li>
    </ul>
  );
}
