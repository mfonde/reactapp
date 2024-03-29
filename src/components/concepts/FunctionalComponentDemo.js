import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';


const FunctionalComponentDemo = () => {
    return(
        <Container className="main">
            <Row>
                <Col xs="12">
                <h1>Functional Component</h1>
                <p>Functional components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effects with any props or state changes.</dd>
                    <dt>Presentational</dt>
                    <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Unlike class components, functional ones don't use 'this.'</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
            </Col>
        </Row>
        <hr/>
        <h1>Functional Syntax Versus Arrow Function</h1>
        <Row>
            <Col md="6">
                <HelloWorldFatArrow className="logo"/>
            </Col>
            <Col sm="6"><HelloWorld/></Col>
        </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function() {
    return(
        <div>
            <Card>
                <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap"/>
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function()</pre></CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    )
}

const HelloWorldFatArrow = () =>
<div>
    <Card>
        <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap"/>
        <CardBody>
            <CardTitle>Fat Arrow</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
            <CardText><pre>const HelloWorld = () =></pre></CardText>
            <Button>Go somehwere man</Button>
        </CardBody>
    </Card>
</div>
