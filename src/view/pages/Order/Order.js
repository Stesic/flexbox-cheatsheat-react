import React from "react";

import "./Order.css";

const Order = () => {
  return (
    <>
      <header>
        <h3>property: order</h3>
      </header>
      <section>
      <article>
          <h5>Default order has value 0.</h5>
          <div className="order orderStyle borderBlue">
            <div>1 order:0</div>
            <div>2 order:0</div>
            <div>3 order:0</div>
            <div>4 order:0</div>
            <div>5 order:0</div>
          </div>
        </article>
        <article>
          <h5>Element with lower value is first in a row.</h5>
          <div className="order orderStyle borderBlue">
            <div className='order4'>1 order:4</div>
            <div>2 order:0</div>
            <div className="order1">3 order:1</div>
            <div className="order-1">4 order:-1</div>
            <div>5 order:0</div>
          </div>
        </article>
 
      </section>
    </>
  );
};

export { Order };
