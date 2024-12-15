import { NextRequest, NextResponse } from "next/server";
import routes from "@/route";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(route);
}
