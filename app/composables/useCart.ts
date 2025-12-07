export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export const useCart = () => {
  const cartItems = useState<CartItem[]>("cart", () => [
    {
      id: 100,
      name: "Herbal Science Boom Butter Hair Care Oil 190ml",
      price: 44.95,
      qty: 1,
      image: "/assets/Checkout1.png",
    },
    {
      id: 101,
      name: "Ashley Joy Strengthening Shampoo 400ml",
      price: 29.45,
      qty: 1,
      image: "/assets/Checkout2.png",
    },
  ]);

  const addToCart = (product: {
    id: number;
    title: string;
    price: number;
    image: string;
  }) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.title,
        price: product.price,
        qty: 1,
        image: product.image,
      });
    }
  };

  const removeFromCart = (id: number) => {
    const index = cartItems.value.findIndex((item) => item.id === id);
    if (index > -1) {
      cartItems.value.splice(index, 1);
    }
  };

  const updateQuantity = (id: number, qty: number) => {
    const item = cartItems.value.find((item) => item.id === id);
    if (item) {
      if (qty <= 0) {
        removeFromCart(id);
      } else {
        item.qty = qty;
      }
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const cartTotal = computed(() => {
    return cartItems.value.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  });

  const cartItemCount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.qty, 0);
  });

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount,
  };
};
