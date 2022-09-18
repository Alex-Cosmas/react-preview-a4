import React, { useMemo, useRef } from "react";

import useRefDimensions from "../hooks/useRefDimensions";

import "./style.css";

export interface PreviewA4Props {
  format?: boolean;
  allowOverflow?: boolean;
  print?: boolean;
  children: any;
}

const PreviewA4: React.FC<PreviewA4Props> = ({
  format = false,
  allowOverflow = false,
  print = false,
  children,
}) => {
  const refPreview = useRef<any>(null);
  const refDivTransformed = useRef<HTMLDivElement>(null);

  const { width: outerWidth } = useRefDimensions(refPreview);

  const innerHeight = useMemo(
    () => refDivTransformed.current?.getBoundingClientRect().height,
    []
  );

  const node = (
    <div
      ref={refPreview}
      className="template--wrapperPreview"
      style={{
        minHeight: innerHeight,
      }}
    >
      <div
        ref={refDivTransformed}
        className="template-transformed"
        style={{
          transform: `scale(${outerWidth / 794}) translateX(-50%)`,
        }}
      >
        <div
          className={
            allowOverflow ? "template--preview-dynamic" : "template--preview"
          }
          style={{
            padding: !print ? "24px" : "0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return format ? (
    <div style={{ width: "21cm", minHeight: "29.7cm" }}>{node}</div>
  ) : (
    node
  );
};

export default PreviewA4;
