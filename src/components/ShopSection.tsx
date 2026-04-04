import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { storefrontApiRequest, PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Loader2, Zap, Battery, Palette, BatteryCharging } from "lucide-react";
import { toast } from "sonner";

const typeIcons: Record<string, typeof Zap> = {
  "E-Bike Rental": Zap,
  "Battery Swap Subscription": Battery,
  "Branding Service": Palette,
  "Backup Power": BatteryCharging,
};

export default function ShopSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    async function load() {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 20 });
        setProducts(data?.data?.products?.edges || []);
      } catch (e) {
        console.error("Failed to load products:", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="shop" className="section-padding bg-background">
      <div className="container-narrow" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Storefront</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            Rent, Swap &amp; Power Up
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
            Everything you need — from weekly e-bike rentals to prepaid solar battery swaps, fleet branding, and backup power.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 size={32} className="animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-text-secondary">No products found</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.node.id} product={product} index={i} isVisible={isVisible} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, index, isVisible }: { product: ShopifyProduct; index: number; isVisible: boolean }) {
  const { node } = product;
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const variant = node.variants.edges[selectedVariantIdx]?.node;
  const Icon = typeIcons[node.handle] || Zap;
  const image = node.images?.edges?.[0]?.node;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`Added ${node.title}`, { description: variant.title, position: "top-center" });
  };

  return (
    <div
      className={`rounded-md border border-border bg-surface overflow-hidden transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${150 + index * 80}ms`,
      }}
    >
      {image ? (
        <div className="aspect-[16/9] overflow-hidden bg-background">
          <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-surface-alt flex items-center justify-center">
          <Icon size={48} className="text-primary/30" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground leading-tight">{node.title}</h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">{node.description}</p>

        {/* Variant selector */}
        {node.variants.edges.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {node.variants.edges.map((v, i) => (
              <button
                key={v.node.id}
                onClick={() => setSelectedVariantIdx(i)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all duration-200 active:scale-95 ${
                  i === selectedVariantIdx
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-text-secondary hover:border-primary/30"
                }`}
              >
                {v.node.title}
              </button>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-end justify-between">
          <div>
            {variant?.compareAtPrice && (
              <span className="text-xs text-text-secondary line-through tabular-nums mr-2">
                R{parseFloat(variant.compareAtPrice.amount).toFixed(0)}
              </span>
            )}
            <span className="text-xl font-bold tabular-nums text-primary">
              R{variant ? parseFloat(variant.price.amount).toFixed(0) : "—"}
            </span>
          </div>
          <button
            onClick={handleAdd}
            disabled={isLoading || !variant}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? <Loader2 size={14} className="animate-spin" /> : <ShoppingCart size={14} />}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
