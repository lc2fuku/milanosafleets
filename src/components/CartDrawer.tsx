import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + parseFloat(item.price.amount) * item.quantity, 0);

  useEffect(() => { if (isOpen) syncCart(); }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-all duration-200">
          <ShoppingCart size={18} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-surface-alt border-border">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-foreground">Shopping Cart</SheetTitle>
          <SheetDescription className="text-text-secondary">
            {totalItems === 0 ? "Your cart is empty" : `${totalItems} item${totalItems !== 1 ? 's' : ''} in your cart`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
                {items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 p-3 rounded-md border border-border bg-background">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground truncate">{item.product.node.title}</h4>
                      <p className="text-xs text-text-secondary">{item.selectedOptions.map(o => o.value).join(' · ')}</p>
                      <p className="text-sm font-semibold text-primary tabular-nums mt-1">R{parseFloat(item.price.amount).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <button onClick={() => removeItem(item.variantId)} className="p-1 text-text-secondary hover:text-red-400 transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:text-foreground active:scale-95 transition-all">
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-xs tabular-nums text-foreground">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:text-foreground active:scale-95 transition-all">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold tabular-nums text-primary">R{totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isLoading || isSyncing}
                  className="w-full py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading || isSyncing ? <Loader2 size={16} className="animate-spin" /> : <><ExternalLink size={16} />Checkout with Shopify</>}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
