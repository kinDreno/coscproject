"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sluggyHere } from "@/types/here";
import Image from "next/image";
import { SkeletonCard } from "@/components/skeleton";

export default function DynamicPage() {
  const { slug } = useParams();

  const [route, setRoute] = useState<sluggyHere | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    async function fetchRoute() {
      const response = await fetch(`/api/${slug}`);
      const data = await response.json();
      setRoute(data);
      setLoading(false);
    }

    fetchRoute();
  }, [slug]);

  console.log(slug);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <SkeletonCard />
      </div>
    );
  if (!route)
    return <div className="text-center p-8 text-xl">404 - Page Not Found</div>;

  return (
    <main className="min-h-screen py-14">
      <div className="container mx-auto px-4">
        <div className=" shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
          <div
            style={{ backgroundImage: `url(${route.heroImg})` }}
            className="h-48 bg-cover bg-center rounded-md mb-6"
          />

          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <Image
                width={120}
                height={120}
                src={route.imgPer}
                alt={route.name}
                className="rounded-full border-4 shadow-md"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold text-blue-600">
                {route.name}
              </h1>
              <p className="text-lg text-gray-600">{route.hero}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">About</h2>
            <p>
              <strong>Age:</strong> {route.age} <br />
              <strong>Birthday:</strong> {route.birthday} <br />
              <strong>Address:</strong> {route.address}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              Contact
            </h2>
            <p>
              <strong>Email:</strong> example@example.com
            </p>{" "}
            <p>
              <strong>Phone:</strong> +1234567890
            </p>{" "}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              Hobbies
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {route.hobbies.map((hobby, index) => (
                <li key={index}>
                  <strong>{hobby.hobby}:</strong> {hobby.caption}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Skills</h2>
            <ul className="list-disc pl-6 space-y-2">
              {route.talents.map((talent, index) => (
                <li key={index} className="text-gray-700">
                  {talent}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              Additional Info
            </h2>
            <p>{route.hero}</p>
            <div className="flex justify-center mt-4">
              <img
                src={route.heroImg}
                alt={route.hero}
                className="w-48 h-48 object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
