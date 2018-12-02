import React from 'react';

import './FlexDirection.css';

const FlexDirection = ()=>{
    return (
        <>
        <header>
        <h3>property: flex-direction</h3>
        </header>
        <section>
        <article>
            <h5>flex-direction: row;</h5>
            <div className="rowContainer">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </article>
        <article>
            <h5 id="rrH">flex-direction: row-reverse;</h5>
            <div className="rowReverseContainer">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </article>
        
        <article>
            <h5>flex-direction: column;</h5>
            <div className="columnContainer">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </article>
        
        <article>
            <h5>flex-direction: column-reverse;</h5>
            <div className="colReverseContainer">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </article>
        </section>
        </>
    )
}


export {
    FlexDirection
}