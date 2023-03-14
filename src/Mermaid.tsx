import React, { ReactElement, useEffect, useId, useState } from "react";
import mermaid from "mermaid";

let initialized = false;

export function Mermaid({ chart }: { chart: string }): ReactElement {
  const id = useId();
  const [svg, setSvg] = useState("");

  // must use useEffect because mermaid needs the browser
  useEffect(() => {
    // init is needed only once
    if (!initialized) {
      initialized = true;
      mermaid.initialize({
        fontFamily: "inherit",
      });
    }

    // see https://mermaid-js.github.io/mermaid/#/theming?id=theme-variables-reference-table
    mermaid
      .render(
        id.replace(/[^a-zA-Z]+/g, ""), // strip special chars from useId
        `${chart}` // apply theme and supply chart
      )
      .then(({ svg }) => {
        setSvg(svg);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console -- show error
        console.error("Error while rendering mermaid", error);
      });
  }, [id, chart]);

  return (
    <div
      className="mt-6 flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
