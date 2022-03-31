import { selector } from "recoil";
import { heartState } from "./atom";

export const heartStatus = selector({
    key: "heartStatus",
    get: ({ get }) => {
        const heart = get(heartState);
        const totalItems = heart.length;
        const totalPrice = heart.reduce(
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

export const removeHeartSelector = selector({
    key: "removeHeartSelector",
    get: () => {},
    set: ({ get, set }, heartIndex) => {
        const heart = get(heartState);
        let newHeart = [...heart];
        newHeart.splice(itemIndex, 1);
        set(heartState, newHeart);
    },
});