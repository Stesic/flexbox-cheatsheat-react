import React from "react";

import "./JustifyContent.css";

const JustifyContent = () => {
  return (
    <>
      <header>
        <h3>property: justify-content</h3>
      </header>
      <section>
        <h2>Justify content along the main axis.</h2>
        <article>
          <h5>justify-content: flex-start;</h5>
          <div className="justifyStart justifyClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>justify-content: flex-end;</h5>
          <div className="justifyEnd justifyClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>justify-content: center;</h5>
          <div className="justifyCenter justifyClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>justify-content: space-around;</h5>
          <div className="justifyAround justifyClass borderBlue">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>justify-content: space-between;</h5>
          <div className="justifyBetween justifyClass borderBlue">
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

export { JustifyContent };
