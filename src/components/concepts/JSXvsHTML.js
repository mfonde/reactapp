import React from 'react';

const JSXvsHTML = () => {
    return(
        <div className="main">
            <div className = "mainDiv">
                <h1>JSX Syntax versus HTML</h1>
                <dl>
                    <dt>Use 'className' Instead of 'class'</dt>
                    <dd>Because 'class' is a reserved word in JavaScript, we use the 'className' attribute to assign classes to our JSX elements.</dd>
                    <dt>Event Handler Differences</dt>
                    <dd>React camel cases all of its event handler names, unlike HTML. For instance, React gives us access to 'onChange' rather than 'onchange,' or 'onClick' instead of 'onclick.' There are more event handlers out there, but React camel cases them.</dd>
                    <dt>Javascript Interpolation</dt>
                    <dd>JSX allows us to write JavaScript within braces, {}, and it interprets that JS in the context of the JSX. This allows us to use variables and function names directly inside our JSX code. This allows us to build more dynamic components.</dd>
                </dl>
            </div>
        </div>
    )
}

export default JSXvsHTML;