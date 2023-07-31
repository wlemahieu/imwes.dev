import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "I'm Wes | Home" },
    { name: "description", content: "Hello, I'm Wes. I develop stuff." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center text-lg max-w-screen-md mx-auto">
      <p>
        Hello! My name is <span className="italic">Wesley LeMahieu</span> - or{" "}
        just <span className="italic font-bold">Wes</span> for short. I'm a 35
        year-young software engineer married to my wonderful wife Lily. I am
        extremely passionate about software development, have 3 beautiful pugs
        and enjoy playing poker recreationally.
      </p>

      <p className="mt-5">
        I primarily live in{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Las_Vegas"
          target="_blank"
          className="link"
        >
          Las Vegas, NV
        </Link>
        . My wife and I also spend a lot of time in{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Bangkok"
          target="_blank"
          className="link"
        >
          Bangkok, Thailand
        </Link>{" "}
        where she's originally from. Overall my family & relatives are pretty
        spread out across the world, living in places such as{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Arizona"
          target="_blank"
          className="link"
        >
          Arizona
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/California"
          target="_blank"
          className="link"
        >
          California
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Florida"
          target="_blank"
          className="link"
        >
          Florida
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Minnesota"
          target="_blank"
          className="link"
        >
          Minnesota
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Washington_(state)"
          target="_blank"
          className="link"
        >
          Washington
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Thailand"
          target="_blank"
          className="link"
        >
          Thailand
        </Link>
        ,{" "}
        <Link
          to="https://en.wikipedia.org/wiki/United_Kingdom"
          target="_blank"
          className="link"
        >
          United Kingdom
        </Link>{" "}
        &{" "}
        <Link
          to="https://en.wikipedia.org/wiki/Wisconsin"
          target="_blank"
          className="link"
        >
          Wisconsin
        </Link>
        !
      </p>

      <p className="mt-5">
        Thanks for taking an interest in my life. Please check back from time to
        time for updates!
      </p>

      <p className="mt-5">-Wes</p>
    </div>
  );
}
