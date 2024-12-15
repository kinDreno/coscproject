import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Sinead Audrey Vallestero",
    username: "@audreyVallestero",
    body: `A warrior of honor and discipline, I walk the path of the samurai. My blade is getSharp,
my spirit unbroken.`,
    img: "/audrey.jpg",
  },
  {
    name: "Ericka Sagalez",
    username: "@erickabayot",
    body: "eA courageous individual who finds joy in watching Marvel movies and listening to BTS, whose music inspires me deeply. In my free time, I enjoy spending moments with my family, friends, and boyfriend, cherishing the peace and happiness they bring.",
    img: "/ericka.jpeg",
  },
  {
    name: "Alquin Suedad",
    username: "@quinkino",
    body: "YAWA!!",
    img: "/quin.jpg",
  },
  {
    name: "Mariel San Mateo",
    username: "@mariel",
    body: "A soul of creativity and curiosity, I walk the path of growth and learning. My mind is sharp, my heart compassionate, and my spirit resilient.",
    img: "mariel.jpg",
  },
  {
    name: "Rosselene Tanuyan",
    username: "@rosselene",
    body: "A ray of sunshine, spreading joy and warmth wherever she goes. Her bright smile and infectious laughter brighten every day, inspiring others with her unwavering optimism and effortless charm.",
    img: "/tanuyan.jpg",
  },
  {
    name: "Rio Mae Bello",
    username: "@riomae",
    body: "A passionate individual who finds joy in the world of art and creativity. From drawing and painting to exploring new mediums, I express myself through the beauty of colors and shapes.",
    img: "/bello.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
