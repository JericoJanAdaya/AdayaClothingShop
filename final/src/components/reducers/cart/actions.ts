export enum ShopActionType {
    ADD = 'add',
    REMOVE = 'remove',
}
  
export type ShopAction = {
    type: ShopActionType;
    payload: [];
};

export type ShopTotal = {
    type: ShopActionType;
    payload: number;
}

export const add = (products: []): ShopAction => ({
    type: ShopActionType.ADD,
    payload: products,
});

export const remove = (products: []): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: products,
});

export const addPrice = (total: number): ShopTotal => ({
    type: ShopActionType.ADD,
    payload: total,
});

export const minusPrice = (total: number): ShopTotal => ({
    type: ShopActionType.REMOVE,
    payload: total,
});
  