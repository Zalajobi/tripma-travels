import React from "react";
import {Container} from "react-bootstrap";

const Hero = (props) => {
    return (
        <React.Fragment>
            <section id="hero" className="hero">
                <Container>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1>It's more than<br/>just a trip</h1>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Hero;