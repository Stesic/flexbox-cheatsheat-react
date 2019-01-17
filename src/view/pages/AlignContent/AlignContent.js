import React from "react";

import "./AlignContent.css";

const AlignContent = () => {
  return (
    <>
      <header>
        <h3>property: align-content</h3>
      </header>
      <section>
        <h2>Justify content along the cross axis, use when you have more than one row.</h2>
        <article>
          <h5>align-content: flex-start;</h5>
          <div className="alignContentStart alignContentClass divStyling borderBlue">
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
          <h5>align-content: flex-end;</h5>
          <div className="alignContentEnd alignContentClass divStyling borderBlue">
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
          <h5>align-content: center;</h5>
          <div className="alignContentCenter alignContentClass divStyling borderBlue">
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
          <h5>align-content: space-around;</h5>
          <div className="alignContentAround alignContentClass divStyling borderBlue">
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
          <h5>align-content: space-between;</h5>
          <div className="alignContentBetween alignContentClass divStyling borderBlue">
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
      </section>
    </>
  );
};

export { AlignContent };
