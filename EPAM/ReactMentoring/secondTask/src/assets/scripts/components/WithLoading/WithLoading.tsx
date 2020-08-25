import * as React from "react";

export default function WithLoading(Component:any) {
  const LoadingIndicator = () => <h2>Just a momemnt... Almost there</h2>
  
  return function WithLoadingComponent({ isLoading, ...props}:any) {
      if (!isLoading) return<Component {...props} />
      return <LoadingIndicator />
  }
}
