import { selector } from "recoil";
import { cartState } from "./atom";

export const cartStatus = selector({
    key: "cartStatus",
    get: ({ get }) => {
        const cart = get(cartState);
        const totalItems = cart.length;
        const totalPrice = cart.reduce(
            (total, current) => {
                return total + current.price;
            },
            0
        );

        return {
            totalItems,
            totalPrice
        };
    },
});

export const removeItemSelector = selector({
    key: "removeItemSelector",
    get: () => {},
    set: ({ get, set }, itemIndex) => {
        const cart = get(cartState);
        let newCart = [...cart];
        newCart.splice(itemIndex, 1);
        set(cartState, newCart);
    },
});