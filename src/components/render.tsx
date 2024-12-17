"use client";
import { angGandaNia } from "@/types/here";
import { useState } from "react";
import { AvatarDemo } from "./profile";
import Link from "next/link";

const Render = () => {
  const [datas] = useState<angGandaNia[]>([
    {
      slug: "audrey",
      name: "Sinead Audrey Vallestero",
      img: "/audrey.jpg",
      hobbies: "listening to Music, Watching anime...",
      talents: "Singing, Piano...",
    },
    {
      slug: "mariel",
      name: "Mariel San Mateo",
      img: "/mariel.jpg",
      hobbies: `Playing Chess,
      Cards..`,
      talents: "Drawing, Painting...",
    },
    {
      slug: "quin",
      name: "Alquin Suedad",
      img: "/quin.jpg",
      hobbies: "Sleeping zzz..",
      talents: "mag assume",
    },
    {
      slug: "ericka",
      name: "Ericka Mae Sagalez",
      img: "/ericka.jpeg",
      hobbies: "mangopya",
      talents: "dko alam ditoh",
    },
    {
      slug: "tanuyan",
      name: "Rosselene Tanuyan",
      img: "/tanuyan.jpg",
      hobbies: "Sleeping, Eating...",
      talents: "Singing",
    },
    {
      slug: "bello",
      name: "Rio Mae Bello",
      img: "/bello.png",
      hobbies: "Cooking, Drawing...",
      talents: "Drawing & Painting",
    },
    {
      slug: "yongis",
      name: "Abegael Yongis",
      img: "/yongis.jpeg",
      hobbies: "Drawing, Photography...",
      talents: "Drawing & Singing",
    },
  ]);

  return (
    <main
      id="profiles"
      className="min-h-[40vh]  p-8 flex justify-center items-center"
    >
      <section
        style={{ boxShadow: "0 3px 8px white" }}
        className="w-full max-w-4xl rounded-lg shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Profile List</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
          {datas.map((data, index) => (
            <Link href={data.slug} key={index} id={data.slug}>
              <div className="hover:scale-105 flex items-center p-4 rounded-lg shadow hover:shadow-lg transition">
                <div className="w-20 h-20 flex-shrink-0">
                  <AvatarDemo img={data.img} />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{data.name}</h2>
                  <p className="text-gray-500 text-sm">
                    <strong>Hobbies:</strong> {data.hobbies}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <strong>Talents:</strong> {data.talents}
                  </p>{" "}
                  <h5 className="mt-6 text-sm">
                    {" "}
                    Tap this profile to view information
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Render;
