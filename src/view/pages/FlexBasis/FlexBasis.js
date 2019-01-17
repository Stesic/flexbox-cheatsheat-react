import React from "react";

import "./FlexBasis.css";

const FlexBasis = () => {
  return (
    <>
      <header>
        <h3>property: flex-basis</h3>
      </header>
      <section>
        <article>
          <h5>flex-basis: auto(default)</h5>
          <div className="flexBasis flexBasisStyle borderBlue">
            <div><p>1</p><p>flex-basis:auto</p></div>
            <div><p>2</p><p>flex-basis:auto</p></div>
            <div><p>3</p><p>flex-basis:auto</p></div>
            <div><p>4</p><p>flex-basis:auto</p></div>
            <div><p>5</p><p>flex-basis:auto</p></div>
          </div>
        </article>
        <article>
          <h5>flex-basis act like width on the main axis(with flex-direction:row)</h5>
          <div className="flexBasis flexBasisStyle borderBlue">
            <div><p>1</p><p>flex-basis:auto</p></div>
            <div className='flexBasis10'><p>2</p><p>flex-basis:10em</p></div>
            <div><p>3</p><p>flex-basis:auto</p></div>
            <div className='flexBasis15'><p>4</p><p>flex-basis:15em</p></div>
            <div><p>5</p><p>flex-basis:auto</p></div>
          </div>
        </article>
        <article>
          <h5>flex-basis act like height on the cross axis(with flex-direction:column)</h5>
          <div className="flexBasis flexBasisStyle basisColumn borderBlue">
            <div><p>1</p><p>flex-basis:auto</p></div>
            <div className='flexBasis5'><p>2</p><p>flex-basis:5em</p></div>
            <div><p>3</p><p>flex-basis:auto</p></div>
            <div className='flexBasis8'><p>4</p><p>flex-basis:8em</p></div>
            <div><p>5</p><p>flex-basis:auto</p></div>
          </div>
        </article>
      </section>
    </>
  );
};

export { FlexBasis };
