import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Timeline } from "flowbite-react";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  BeakerIcon,
  GlobeAltIcon,
  CpuChipIcon,
  TruckIcon,
  GlobeAmericasIcon,
  ChartPieIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "I'm Wes | My Story" },
    {
      name: "description",
      content:
        "The story of how I became a software engineer is less-than-conventional and very exciting for me.",
    },
  ];
};

export default function MyStory() {
  return (
    <div className="sm:pl-10 sm:pr-10">
      <Timeline className="sm:pl-10 sm:pr-10">
        <Timeline.Item>
          <Timeline.Point icon={HeartIcon as any} />
          <Timeline.Content>
            <Timeline.Time>Jul 2023</Timeline.Time>
            <Timeline.Title>Conduit Health, the 4th startup</Timeline.Title>
            <Timeline.Body>
              <p>
                I'm currently part of a motivated team of bright individuals
                with an important goal of improving accessibility to medical
                equipment by making it easier for patients to obtain items
                through the marketplace.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={BeakerIcon as any} />
          <Timeline.Content>
            <Timeline.Time>Feb 2020</Timeline.Time>
            <Timeline.Title>Crystal Bays, the 3rd startup</Timeline.Title>
            <Timeline.Body>
              <p>
                I was the sole engineer at Crystal Bay Software, a{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/San_Francisco"
                  target="_blank"
                  className="link"
                >
                  San Francisco, CA
                </Link>{" "}
                based startup focused in cloud-based software solutions for the
                mental health industry.
              </p>
              <p className="mt-4">
                Our sole client was{" "}
                <Link
                  to="https://lifestance.com"
                  target="_blank"
                  className="link"
                >
                  LifeStance
                </Link>{" "}
                (formerly{" "}
                <Link
                  to="https://www.pcpasf.com/"
                  target="_blank"
                  className="link"
                >
                  PCPA
                </Link>
                ) and our goal was to provide seamless user experience for
                hundreds of doctors and thousands of patients.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={ChartPieIcon as any} />
          <Timeline.Content>
            <Timeline.Time>Dec 2016</Timeline.Time>
            <Timeline.Title>Delmondo, the 2nd startup</Timeline.Title>
            <Timeline.Body>
              <p>
                I began working as the 2nd engineer for{" "}
                <span className="font-bold">Delmondo, Inc.</span>, a social
                media video analytics startup. This was my first small start-up
                experience where the total company size was only four people
                when I joined.
              </p>
              <p className="mt-4">
                Our team was very agile and worked in bleeding-edge
                technologies. After a couple of years, we were{" "}
                <Link
                  to="https://variety.com/2018/digital/news/conviva-acquires-delmondo-social-video-analytics-1203038531/"
                  target="_blank"
                  className="link"
                >
                  acquired
                </Link>{" "}
                by{" "}
                <Link
                  to="https://www.conviva.com/"
                  target="_blank"
                  className="link"
                >
                  Conviva
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={TruckIcon as any} />
          <Timeline.Content>
            <Timeline.Time>September 2016</Timeline.Time>
            <Timeline.Title>Moved to Las Vegas, Nevada</Timeline.Title>
            <Timeline.Body>
              <p>
                My wife and I decided that life in LA was too stressful and
                expensive. With aspirations of home ownership and greater
                savings, we decided to move pack up and move to the blistering
                hot desert of{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Las_Vegas"
                  target="_blank"
                  className="link"
                >
                  Las Vegas, NV
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={GlobeAmericasIcon as any} />
          <Timeline.Content>
            <Timeline.Time>Jan 2008</Timeline.Time>
            <Timeline.Title>Media Temple, the 1st startup</Timeline.Title>
            <Timeline.Body>
              <p>
                I realized my true passion was with internet technology &
                software and quickly began my career at{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Media_Temple"
                  target="_blank"
                  className="link"
                >
                  Media Temple, Inc.
                </Link>
                {""} located in{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Culver_City,_California"
                  target="_blank"
                  className="link"
                >
                  Culver City, CA
                </Link>
                .
              </p>
              <p className="mt-4">
                This fast-paced web hosting startup was fixated on providing{" "}
                <span className="italic">
                  industry-leading customer service
                </span>{" "}
                & <span className="italic">reliable website hosting</span> for
                thousands of customers in North America.
              </p>
              <p className="mt-4">
                I started as a tech support agent, assisting over{" "}
                <span className="italic">10,800 businesses & customers</span>{" "}
                resolve their real-world problems relating to websites & email
                and soon began developing software to solve internal company
                needs.
              </p>
              <p className="mt-4">
                I'll always cherish my{" "}
                <span className="font-bold">~9-year tenure</span> here which to
                me was better than a college education. It was a software
                development & leadership skills incubator. I received more
                hands-on experience and real-world training than any CS degree
                could have provided.
              </p>
              <p className="mt-4">
                I successfully jump-started my career as a software engineer and
                proudly helped win the company{" "}
                <Link
                  to="https://origin-blog.mediatemple.net/media-temple-updates/the-2016-stevie-awards-our-customer-support-team-does-it-again/"
                  target="_blank"
                  className="link"
                >
                  Stevie Awards
                </Link>{" "}
                and be acquired by{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/GoDaddy"
                  target="_blank"
                  className="link"
                >
                  GoDaddy, Inc.
                </Link>
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={TruckIcon as any} />
          <Timeline.Content>
            <Timeline.Time>August 2006</Timeline.Time>
            <Timeline.Title>Moved to Los Angeles, California</Timeline.Title>
            <Timeline.Body>
              <p>
                My friend and I decided it would be fun to move to LA and pursue
                a 1-year degree in film at the{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Los_Angeles_Film_School"
                  target="_blank"
                  className="link"
                >
                  Los Angeles Film School
                </Link>
                . I trekked across the country in my white honda civic, packed
                to the brim with my belongings and soon began a new life
                chapter. While attending school, my friend and I were fortunate
                enough to make connections and began a film & art internship for{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Clive_Barker"
                  target="_blank"
                  className="link"
                >
                  Clive Barker
                </Link>{" "}
                the creator of{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Hellraiser_(franchise)"
                  target="_blank"
                  className="link"
                >
                  Hellraiser
                </Link>{" "}
                working almost daily in his 3 Beverly Hills mansions.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={AcademicCapIcon as any} />
          <Timeline.Content>
            <Timeline.Time>June 2006</Timeline.Time>
            <Timeline.Title>Graduated High School</Timeline.Title>
            <Timeline.Body>
              <p>
                I made some of my best friends in high school up in freezing
                cold, yet absolutely beautiful Northern Minnesota. I Graduated{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Pequot_Lakes_High_School"
                  target="_blank"
                  className="link"
                >
                  Pequot Lakes High School
                </Link>{" "}
                on the B honor roll.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={AcademicCapIcon as any} />
          <Timeline.Content>
            <Timeline.Time>April 2006</Timeline.Time>
            <Timeline.Title>Accepted into SCU</Timeline.Title>
            <Timeline.Body>
              <p>
                Although I was unsure of my career choice, I applied with
                recommendations and was accepted into{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Santa_Clara_University"
                  target="_blank"
                  className="link"
                >
                  Santa Clara University
                </Link>{" "}
                to pursue a degree in accounting. I ultimately felt it was not
                for me and decided not to go.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={AcademicCapIcon as any} />
          <Timeline.Content>
            <Timeline.Time>2003</Timeline.Time>
            <Timeline.Title>3 school district changes</Timeline.Title>
            <Timeline.Body>
              <p>
                Change was a common theme for our family. We first moved into a
                bigger house which changed my elementary school. A few years
                later, I would go to a different middle school than expected.
                After middle school, my Mom and I moved 3 hours north where I
                made brand new friends in high school.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={GlobeAltIcon as any} />
          <Timeline.Content>
            <Timeline.Time>2001</Timeline.Time>
            <Timeline.Title>Traveled domestically as a minor</Timeline.Title>
            <Timeline.Body>
              <p>
                After my parents separated, I began traveling every year as a
                minor to sunny{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/San_Jose,_California"
                  target="_blank"
                  className="link"
                >
                  San Jose, California
                </Link>{" "}
                to visit my father. I really enjoyed visiting California and
                thought I might want to live there one day.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={CpuChipIcon as any} />
          <Timeline.Content>
            <Timeline.Time>1999</Timeline.Time>
            <Timeline.Title>Built my first computer</Timeline.Title>
            <Timeline.Body>
              <p>
                With the guidance of my oldest brother, Colin, I learned how to
                build my very own computer using individual hardware components
                which enabled me to dive into the world of{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/MIRC"
                  target="_blank"
                  className="link"
                >
                  mIRC
                </Link>
                ,{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Napster"
                  target="_blank"
                  className="link"
                >
                  Napster
                </Link>
                ,{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Half-Life_(series)"
                  target="_blank"
                  className="link"
                >
                  Half-Life
                </Link>
                ,{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Team_Fortress_Classic"
                  target="_blank"
                  className="link"
                >
                  Team-Fortress Classic
                </Link>{" "}
                and{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Counter-Strike"
                  target="_blank"
                  className="link"
                >
                  Counter-Strike
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={GlobeAltIcon as any} />
          <Timeline.Content>
            <Timeline.Time>1997</Timeline.Time>
            <Timeline.Title>Created my first website</Timeline.Title>
            <Timeline.Body>
              <p>
                I created my first website, a simple page filled with my
                favorite images and quotes for the popular show '
                <Link
                  to="https://en.wikipedia.org/wiki/The_Simpsons"
                  target="_blank"
                  className="link"
                >
                  The Simpsons
                </Link>
                ' using HTML & CSS, hosted on{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/GeoCities"
                  target="_blank"
                  className="link"
                >
                  GeoCities
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={ComputerDesktopIcon as any} />
          <Timeline.Content>
            <Timeline.Time>1995</Timeline.Time>
            <Timeline.Title>The 2nd computer - Micron Millenia</Timeline.Title>
            <Timeline.Body>
              <p>
                Our family's second computer, a{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Micron_Technology"
                  target="_blank"
                  className="link"
                >
                  Micron
                </Link>{" "}
                Millenia -{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Pentium_II"
                  target="_blank"
                  className="link"
                >
                  Pentium II
                </Link>{" "}
                266 was my first step into multiplayer PC gaming. I played{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/First-person_shooter"
                  target="_blank"
                  className="link"
                >
                  first-person shooters
                </Link>{" "}
                such as{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Doom_(franchise)"
                  target="_blank"
                  className="link"
                >
                  Doom
                </Link>{" "}
                and{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Quake_(video_game)"
                  target="_blank"
                  className="link"
                >
                  Quake I
                </Link>{" "}
                competitively on{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/MPlayer.com"
                  target="_blank"
                  className="link"
                >
                  MPlayer.com
                </Link>{" "}
                which later became{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/GameSpy"
                  target="_blank"
                  className="link"
                >
                  Gamespy
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={ComputerDesktopIcon as any} />
          <Timeline.Content>
            <Timeline.Time>1993</Timeline.Time>
            <Timeline.Title>The 1st computer - Gateway 2000</Timeline.Title>
            <Timeline.Body>
              <p>
                My parents purchased our first family computer, the{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Gateway,_Inc."
                  target="_blank"
                  className="link"
                >
                  Gateway 2000
                </Link>{" "}
                4DX2-66V, where I learned to use{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Windows_95"
                  target="_blank"
                  className="link"
                >
                  Windows 95
                </Link>{" "}
                and played games like{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Reader_Rabbit"
                  target="_blank"
                  className="link"
                >
                  Reader Rabbit
                </Link>
                ,{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Number_Munchers"
                  target="_blank"
                  className="link"
                >
                  Number Munchers
                </Link>{" "}
                and{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Wolfenstein_3D"
                  target="_blank"
                  className="link"
                >
                  Wolfenstein 3D
                </Link>
                .
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={FaceSmileIcon as any} />
          <Timeline.Content>
            <Timeline.Time>1987</Timeline.Time>
            <Timeline.Title>Hello World!</Timeline.Title>
            <Timeline.Body>
              <p>
                I was brought into the world in 1987 in{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Saint_Paul,_Minnesota"
                  target="_blank"
                  className="link"
                >
                  St. Paul, Minnesota
                </Link>{" "}
                (also known as "The Star of The North" or "Land of 10,000
                Lakes") by my wonderful parents, father Ed and mother Lisa.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
