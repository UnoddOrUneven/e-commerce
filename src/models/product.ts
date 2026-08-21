export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

export type ProductInput = Omit<Product, 'id'>;
