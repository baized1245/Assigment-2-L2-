// Define the Variant type
export type TVariant = {
  type: string;
  value: string;
};

// Define the Inventory type
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// Define the Product type
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
};
