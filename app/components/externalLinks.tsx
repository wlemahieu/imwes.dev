import { Link } from "@remix-run/react";

export default function ExternalLinks() {
  return (
    <ul className="flex justify-center mt-2 italic">
      <li className="space-x-3">
        <Link to="/Wesley LeMahieu's Resume.pdf" target="_blank">
          Resume
        </Link>
        <Link to="https://github.com/wlemahieu" target="_blank">
          Github
        </Link>
        <Link
          to="https://stackoverflow.com/users/904956/wesley-lemahieu"
          target="_blank"
        >
          Stack
        </Link>
        <Link to="https://www.linkedin.com/in/wesleylemahieu/" target="_blank">
          LinkedIn
        </Link>
        <Link to="https://wellfound.com/u/wesley-lemahieu" target="_blank">
          Wellfound
        </Link>
        <Link to="https://x.com/WesleyLeMahieu" target="_blank">
          X
        </Link>
      </li>
    </ul>
  );
}
