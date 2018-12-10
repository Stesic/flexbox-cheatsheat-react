import React from "react";

import "./FlexGrow.css";

const FlexGrow = () => {
  return (
    <>
      <header>
        <h3>property: flex-grow</h3>
      </header>
      <section>
      <article>
          <h5>flex-grow: 0(default)</h5>
          <div className="flexGrow flexGrowStyle">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>flex-grow: 1, just one element</h5>
          <div className="flexGrow flexGrowStyle">
            <div>1</div>
            <div>2</div>
            <div className="flexGrow1"><p>3</p><p>flex-grow:1</p></div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>flex-grow: 1 for 3 and 5 element</h5>
          <div className="flexGrow flexGrowStyle">
            <div>1</div>
            <div>2</div>
            <div className="flexGrow1"><p>3</p><p>flex-grow:1</p></div>
            <div>4</div>
            <div className="flexGrow1"><p>5</p><p>flex-grow:1</p></div>
          </div>
        </article>
      <article>
          <h5>flex-grow: 1 for 3 and 5 element, flex-grow: 2 for 1, 2 and 4 element.</h5>
          <div className="flexGrow flexGrowStyle">
            <div className="flexGrow3"><p>1</p><p>flex-grow:3</p></div>
            <div className="flexGrow3"><p>2</p><p>flex-grow:3</p></div>
            <div className="flexGrow1"><p>3</p><p>flex-grow:1</p></div>
            <div className="flexGrow3"><p>4</p><p>flex-grow:3</p></div>
            <div className="flexGrow1"><p>5</p><p>flex-grow:1</p></div>
          </div>
        </article>
      </section>
    </>
  );
};

export { FlexGrow };
