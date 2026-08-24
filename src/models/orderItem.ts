export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    user_id: number;
}
export type OrderItemInput = Omit<OrderItem, 'id'>;
