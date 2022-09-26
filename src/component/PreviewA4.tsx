import React, { useMemo, useRef } from "react";

import useRefDimensions from "../hooks/useRefDimensions";

import "./style.css";

export interface PreviewA4Props {
  allowOverflow?: boolean;
  print?: boolean;
  children: any;
}

const PreviewA4: React.FC<PreviewA4Props> = (props) => {
  const { allowOverflow = false, print = false, children } = props;

  const refPreview = useRef<any>(null);
  const refDivTransformed = useRef<HTMLDivElement>(null);

  const { width: outerWidth } = useRefDimensions(refPreview);

  const innerHeight = useMemo(
    () => refDivTransformed.current?.getBoundingClientRect().height,
    []
  );

  return (
    <div
      ref={refPreview}
      className="template-preview"
      style={{
        minHeight: innerHeight,
      }}
    >
      <div
        ref={refDivTransformed}
        className="template-container"
        style={{
          transform: `scale(${outerWidth / 794}) translateX(-50%)`,
        }}
      >
        <div
          className="template-content"
          data-testid={print ? "print" : "no-print"}
          style={{
            overflow: allowOverflow ? "visible" : "hidden",
            ...(allowOverflow ? { minHeight: "1123px" } : { height: "1123px" }),
            padding: !print ? "24px" : "0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PreviewA4;
