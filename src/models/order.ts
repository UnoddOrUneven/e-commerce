export interface Order{
    id: number;
    userId: number;
    status: Status;
}
export type Status = "packing"|"in-delivery"|"delivered"

export type OrderInput = Omit<Order, 'id'>;
