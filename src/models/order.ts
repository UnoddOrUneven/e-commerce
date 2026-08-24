export interface Order{
    id: number;
    user_id: number;
    status: Status;
}
export type Status = "packing"|"in-delivery"|"delivered"

export type OrderInput = Omit<Order, 'id'>;
