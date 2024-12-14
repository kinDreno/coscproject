"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DynamicPage() {
  const { slug } = useParams();

  const [route, setRoute] = useState<any>(null);
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
  if (loading) return <div>Loading...</div>;
  if (!route) return <div>404 - Page Not Found</div>;

  return (
    <main>
      <h1>{route.title}</h1>
      <p>{route.content}</p>
    </main>
  );
}
