import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import photos from "./photos.js";

//Smoke test
it("renders without crashing", function () {
    const photo = photos[0];
    render(<Card caption={'Test'} src={photo.src} currNum={1} totalNu={3} />);
});

//Snapshot test
it("matches snapshot", function () {
    const photo = photos[0];
    const { asFragment } = render(<Card caption={'Test'} src={photo.src} currNum={1} totalNu={3} />);
    expect(asFragment()).toMatchSnapshot();
});