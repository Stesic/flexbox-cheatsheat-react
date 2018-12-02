import React from "react";

import "./FlexWrap.css";

const FlexWrap = () => {
  return (
    <>
      <header>
        <h3>property: flex-wrap</h3>
      </header>
      <section>
        <h5 className="message">
          Resize browser to see the difference between next three property.
        </h5>
        <article>
          <h5>flex-wrap: wrap;</h5>
          <div className="flexWrap wrapClass">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
        </article>
        <article>
          <h5>flex-wrap: nowrap</h5>
          <div className="noWrap wrapClass">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
        </article>
        <article>
          <h5>flex-wrap: wrap-reverse;</h5>
          <div className="wrapReverse wrapClass">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
        </article>
        <h5>
          <ul>
              <li>flex-direction: row;</li>
              <li>flex-wrap:wrap;
              <ul>
                  <li>Shorthand property is: flex-flow: row-wrap;</li>
              </ul>
              </li>
          </ul>
        </h5>
      </section>
    </>
  );
};

export { FlexWrap };
