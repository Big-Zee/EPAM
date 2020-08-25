import * as React from "react";

import "../../../styles/ResultsCounter.css";

export default function GenerateResultsCounter(props: any) {  
  return (
  <div className="ResultsCounter"><h5>{props.counter}3 movies found</h5></div>
  );
}