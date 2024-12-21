"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { sluggyHere } from "@/types/here";
import { SkeletonCard } from "@/components/skeleton";
import Image from "next/image";

export default function DynamicPage() {
  const { slug } = useParams();
  const [route, setRoute] = useState<sluggyHere | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    if (!slug) return;
    async function fetchRoute() {
      try {
        const response = await fetch(`/api/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the route data.");
        }
        const data = await response.json();
        setRoute(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRoute();
  }, [slug]);

  // Handle scroll to update scroll position
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      console.log("Scroll Y:", window.scrollY); // Debugging scroll position
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <SkeletonCard />
      </div>
    );
  }

  if (error || !route) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full fade-in">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-700">
          {error ? error : "404 - Page Not Found"}
        </p>
      </div>
    );
  }

  const fadeOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <main className="transition-all duration-500 ease-in-out min-h-screen fade-in relative">
      <div
        style={{
          backgroundImage: `url(${route.heroGif})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.5}px`,
          opacity: fadeOpacity,
          transition: "opacity 0.2s ease",
        }}
        className="h-screen w-full relative"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-white p-8">
          <section className="p-9 w-[50%] max-sm:w-[100%]">
            <h2 className="text-4xl font-bold">{route.hero}</h2>
            <h4 className="text-xl mt-4 break-words">{route.heroDesc}</h4>{" "}
            <p>
              <br />
              <small>Scroll Down</small>
            </p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Change scrollY threshold for testing */}
        {scrollY > 100 && ( // Test at scrollY > 100
          <div className="relative h-full w-full bg-white z-20">
            {/* Temporarily simplified gradient background */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
        )}
        <div className="shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
          <div
            style={{ backgroundImage: `url(${route.heroImg})` }}
            className="h-60 bg-cover bg-center rounded-md mb-6"
          />
          <h1 className="text-center">
            <b>{route.heroQuote}</b> <br />
            <small>- {route.hero}</small>
            <br />
          </h1>
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full">
              <Image
                alt=""
                className="object-cover"
                width={128}
                height={128}
                src={route.imgPer}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold text-blue-600 max-sm:text-md">
                {route.name}
              </h1>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">About</h2>
            <h4>{route.about}</h4>
            <hr />
            <p>
              <br />
              <strong>Age:</strong> {route.age} <br />
              <strong>Birthday:</strong> {route.birthday} <br />
              <strong>Address:</strong> {route.address}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              Hobbies
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {route.hobbies.map((hobby, index) => (
                <li key={index}>
                  <strong>{hobby}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              Talents
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {route.talents.map((talent, index) => (
                <li key={index}>{talent}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
