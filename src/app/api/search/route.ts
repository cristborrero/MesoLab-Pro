import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/woocommerce";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.toLowerCase().trim() || "";

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] });
    }

    const allProducts = await getProducts();
    const matches = allProducts
      .filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(query);
        const catMatch = p.categoryLabel.toLowerCase().includes(query);
        const descMatch = (p.shortDescription || "").toLowerCase().includes(query);
        return nameMatch || catMatch || descMatch;
      })
      .slice(0, 8)
      .map((p) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        image: p.image,
        categoryLabel: p.categoryLabel,
        price: p.presentations[0]?.price || 0,
        inStock: p.inStock,
      }));

    return NextResponse.json({ results: matches });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
