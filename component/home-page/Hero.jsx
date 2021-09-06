import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {FormControl, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";

const Hero = (props) => {
    return (
        <React.Fragment>
            <section id="hero" className="hero">
                <Container>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1>It's more than<br/>just a trip</h1>

                        <Form className="mt-lg-5">
                            <FormControl className="d-flex flex-row align-items-center justify-content-center">
                                <Input
                                    style={{borderBottomRightRadius: '0px !important', borderTopRightRadius: '0px !important'}}
                                    className="mr-0 border-right-0"
                                    id="outlined-search input-with-icon-adornment"
                                    variant="outlined"
                                    placeholder="From where?"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <i className="las la-plane-departure"/>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    style={{borderRadius: '0px !important'}}
                                    className="mx-0"
                                    id="outlined-search input-with-icon-adornment"
                                    variant="outlined"
                                    placeholder="Where to?"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <i className="las la-plane-arrival"/>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    style={{borderRadius: '0px !important'}}
                                    type="date"
                                    className="mx-0"
                                    id="outlined-search input-with-icon-adornment"
                                    variant="outlined"
                                    placeholder="Depart - Return"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <i className="lar la-calendar"/>
                                        </InputAdornment>
                                    }
                                />

                                <Input
                                    style={{borderRadius: '0px !important'}}
                                    type="number"
                                    className="mx-0"
                                    id="outlined-search input-with-icon-adornment"
                                    variant="outlined"
                                    placeholder="Adult"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <i className="las la-user"/>
                                        </InputAdornment>
                                    }
                                />

                                <Button type="submit" className="btn btn-filled">
                                    Submit
                                </Button>
                            </FormControl>
                        </Form>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Hero;