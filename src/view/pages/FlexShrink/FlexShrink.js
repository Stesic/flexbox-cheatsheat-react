import React from "react";

import "./FlexShrink.css";

const FlexShrink = () => {
  return (
    <>
      <header>
        <h3>property: flex-shrink</h3>
      </header>
      <section>
          <h2>
            RESIZE BROWSER TO SEE THE DIFFERENCE BETWEEN NEXT THREE PROPERTY.
          </h2>
        <article>
          <h5>flex-shrink: 1(default)</h5>
          <div className="flexShrink flexShrinkStyle">
            <div><p>1</p><p>flex-shrink: 1</p></div>
            <div><p>2</p><p>flex-shrink: 1</p></div>
            <div><p>3</p><p>flex-shrink: 1</p></div>
            <div><p>4</p><p>flex-shrink: 1</p></div>
            <div><p>5</p><p>flex-shrink: 1</p></div>
            <div><p>6</p><p>flex-shrink: 1</p></div>
          </div>
        </article>
        <article>
          <h5>Elements 3 and 4 has flex-shrink:0</h5>
          <div className="flexShrink flexShrinkStyle">
            <div><p>1</p><p>flex-shrink: 1</p></div>
            <div><p>2</p><p>flex-shrink: 1</p></div>
            <div className='shrink0'><p>3</p><p>flex-shrink: 0</p></div>
            <div className='shrink0'><p>4</p><p>flex-shrink: 0</p></div>
            <div><p>5</p><p>flex-shrink: 1</p></div>
            <div><p>6</p><p>flex-shrink: 1</p></div>
          </div>
        </article>
        <article>
          <h5>Element 3 has flex-shrink:5, element 4 flex-shrink:0</h5>
          <div className="flexShrink flexShrinkStyle">
            <div><p>1</p><p>flex-shrink: 1</p></div>
            <div><p>2</p><p>flex-shrink: 1</p></div>
            <div className='shrink5'><p>3</p><p>flex-shrink: 5</p></div>
            <div className='shrink0'><p>4</p><p>flex-shrink: 0</p></div>
            <div><p>5</p><p>flex-shrink: 1</p></div>
            <div><p>6</p><p>flex-shrink: 1</p></div>
          </div>
        </article>
      </section>
    </>
  );
};

export { FlexShrink };
