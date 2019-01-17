import React from "react";

import "./AlignItems.css";

const AlignItems = () => {
  return (
    <>
      <header>
        <h3>property: align-items</h3>
      </header>
      <section>
        <article>
          <h5>align-items: flex-start;</h5>
          <div className="alignItemsStart alignItemsClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-items: flex-end;</h5>
          <div className="alignItemsEnd alignItemsClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-items: center;</h5>
          <div className="alignItemsCenter alignItemsClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-items: stretch;</h5>
          <div className="alignItemsStretch alignItemsClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-items: baseline;</h5>
          <div className="alignItemsBaseline alignItemsClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
      </section>

    </>
  );
};

export { AlignItems };
