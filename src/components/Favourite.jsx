import React from "react";

import { heartState } from "../recoil/heart/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { heartStatus, removeHeartSelector } from "../recoil/heart/selectors";

function Favourite() {
  const [heart, setHeart] = useRecoilState(heartState);
  const { totalItems, totalPrice } = useRecoilValue(heartStatus);
  const removeHeart = useSetRecoilState(removeHeartSelector);
  return <div>
      <h3>Dina favoriter:</h3>
      {heart. map((product, index) => (
          <p>
              <img src={product.image} alt={product.title} />
              <div>
                  {product.title} €{product.price}
                  <button onClick={() => removeHeart(index)}>(unheart)</button>
              </div>
          </p>
      ))}
  </div>;
}

export default Favourite;
