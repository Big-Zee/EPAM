import * as React from "react";

import "../../../styles/ResultsContainer.css";

import GenerateResultsCounter from "../ResultsCounter/ResultsCounter";
import CreateResultsFilter from "../ResultsFilter/ResultsFilter";

export default function GenerateResultsContainer(props: any) {
  return (
    <>
    <div className="ResultsContainer">
        <CreateResultsFilter />
        <GenerateResultsCounter />
        {props.children}
      </div>
    </>
  );
}
