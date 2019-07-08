import React, {useState} from 'react';
import PropTypes from 'prop-types';

const string = {display:'will this display?'};
const stringTwo = {display: 'will this be on the second line?'};
const stringThree = {display: 'I am fairly confident this will display on the third line.'};
const stringFour = {display: 'I am getting the hang of this.'};

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.property.display}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle}/>
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState ('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () =>{
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBGColor = () =>{
        backgroundColor === 'purple' ? setBackgroundColor('red') : setBackgroundColor('purple');
    }

    const toggleBRadius = () => {
        borderRadius === '5px' ? setBorderRadius('25px') : setBorderRadius('5px');
    }

    const toggleBStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : borderStyle === 'double' ? setBorderStyle('dotted') : borderStyle === 'dotted' ? setBorderStyle('solid') : borderStyle === 'solid' ? setBorderStyle('groove') : borderStyle === 'groove' ? setBorderStyle('ridge') : setBorderStyle('dashed');
    }

    return(
        <div className = "main">
            <div className = "mainDiv">
                <div style={styles}>
                <FunctionalComponent property={string} function={toggleColor} selectedStyle={color}/>
                <FunctionalComponent property={stringTwo} function={toggleBGColor} selectedStyle={backgroundColor}/>
                <FunctionalComponent property={stringThree} function={toggleBRadius} selectedStyle={borderRadius}/>
                <FunctionalComponent property={stringFour} function={toggleBStyle} selectedStyle={borderStyle}/>
                </div>
            </div>

        </div>
    )
}

FunctionalComponent.defaultProps = {
    property: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle : 'what style??'
}


export default PropsDemo;