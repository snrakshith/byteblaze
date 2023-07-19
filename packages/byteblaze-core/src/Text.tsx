import * as React from "react";

export interface TextProps {
  children: React.ReactNode;
}

export function Text(props: TextProps) {
  return <h1>{props.children}</h1>;
}

Text.displayName = "Text";
