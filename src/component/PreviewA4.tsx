import React, { useMemo, useRef } from "react";
import useRefDimensions from "../hooks/useRefDimensions";

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
      style={{
        position: "relative",
        aspectRatio: "21/29.7",
        maxWidth: "100%",
        height: "auto",
        minHeight: innerHeight,
      }}
    >
      <div
        ref={refDivTransformed}
        style={{
          transform: `scale(${outerWidth / 794}) translateX(-50%)`,
          display: "flex",
          position: "absolute",
          left: "50%",
          top: 0,
          background: "white",
          transformOrigin: "top left",
        }}
      >
        <div
          data-testid={print ? "print" : "no-print"}
          style={{
            overflow: allowOverflow ? "visible" : "hidden",
            ...(allowOverflow ? { minHeight: "1123px" } : { height: "1123px" }),
            padding: !print ? "24px" : "0",
            width: "794px",
            height: "1123px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PreviewA4;
