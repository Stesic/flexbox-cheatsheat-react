import React from "react";

import "./AlignSelf.css";

const AlignSelf = () => {
  return (
    <>
      <header>
        <h3>property: align-self</h3>
      </header>
      <section>
        <article>
          <h5>align-self:flex-start</h5>
          <div className="alignSelf alignSelfStyle">
            <div>1</div>
            <div>2</div>
            <div className="alignSelfStart"><p>3</p><p>align-self:flex-start</p></div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-self:flex-end</h5>
          <div className="alignSelf alignSelfStyle">
            <div>1</div>
            <div>2</div>
            <div className="alignSelfEnd"><p>3</p><p>align-self:flex-end</p></div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-self:center</h5>
          <div className="alignSelf alignSelfStyle">
            <div>1</div>
            <div>2</div>
            <div className="alignSelfCenter"><p>3</p><p>align-self:center</p></div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-self:stretch</h5>
          <div className="alignSelf alignSelfStyle">
            <div>1</div>
            <div>2</div>
            <div className="alignSelfStretch"><p>3</p><p>align-self:stretch(default)</p></div>
            <div>4</div>
            <div>5</div>
          </div>
        </article>
        <article>
          <h5>align-self:baseline</h5>
          <div className="alignSelf alignSelfStyle">
            <div>1</div>
            <div>2</div>
            <div className="alignSelfBaseline"><p>3</p><p>align-self:baseline</p></div>
            <div>4</div>
            <div className="alignSelfBaseline"><p>5</p><p>align-self:baseline</p></div>
          </div>
        </article>
      </section>
    </>
  );
};

export { AlignSelf };
