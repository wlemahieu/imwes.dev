import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Timeline } from "flowbite-react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "I'm Wes" },
    { name: "description", content: "Hello, I'm Wes. I develop stuff." },
  ];
};

export default function Index() {
  return (
    <>
      <div className="flex flex-col border-b-4 border-grey bg-cyan-600 p-6">
        <h1 className="text-3xl font-bold text-white underline mx-auto mb-2">
          Wesley LeMahieu
        </h1>
        <ul className="flex justify-center mt-2">
          <li className="space-x-3">
            <Link
              to="https://www.linkedin.com/in/wesleylemahieu/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link to="https://wellfound.com/u/wesley-lemahieu" target="_blank">
              Wellfound
            </Link>
            <Link to="/Wesley LeMahieu's Resume.pdf" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-12">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>February 2022</Timeline.Time>
              <Timeline.Title>
                Application UI code in Tailwind CSS
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>March 2022</Timeline.Time>
              <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
              <Timeline.Body>
                <p>
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Title>
                E-Commerce UI code in Tailwind CSS
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}
