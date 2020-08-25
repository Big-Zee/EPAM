import * as React from "react";

export default function ErrorBoundary(props: any) {
  const ErrorMsg = () => (
    <h2>Ooops, something went wrong... We are working on that!</h2>
  );
  let isEverythingOK = true;
  return <>{isEverythingOK ? props.children : <ErrorMsg />}</>;
}


