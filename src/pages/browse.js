import React from "react"
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks"
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
    //we need the series and the films
    const { series } = useContent("series");
    const { films } = useContent("films");
    // console.log(series)
    // console.log(films);
    //we need slides
    const slides = selectionFilter({ series, films })
    // console.log(slides)
    //pass it to the browse container
    
    return <BrowseContainer slides={slides}/>;
}