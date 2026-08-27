export interface OrderItem {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
    userId: number;
}
export type OrderItemInput = Omit<OrderItem, 'id'>;
