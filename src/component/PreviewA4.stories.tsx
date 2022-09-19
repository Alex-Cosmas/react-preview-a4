import React from "react";
import PreviewA4 from "./PreviewA4";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "PreviewA4",
};

export const Default = () => (
  <PreviewA4>
    <h1>Bonjour à tous</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, maxime ea
      exercitationem tempore error distinctio molestias suscipit expedita
      tenetur incidunt reprehenderit quisquam iste quasi rerum id nulla nemo?
      Nemo, perspiciatis!
    </p>
  </PreviewA4>
);

export const WithFormatA4 = () => (
  <PreviewA4 format>
    <h1>Bonjour à tous</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, maxime ea
      exercitationem tempore error distinctio molestias suscipit expedita
      tenetur incidunt reprehenderit quisquam iste quasi rerum id nulla nemo?
      Nemo, perspiciatis!
    </p>
  </PreviewA4>
);

export const WithAllowOverflow = () => (
  <PreviewA4 allowOverflow>
    <h1>Bonjour à tous</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, maxime ea
      exercitationem tempore error distinctio molestias suscipit expedita
      tenetur incidunt reprehenderit quisquam iste quasi rerum id nulla nemo?
      Nemo, perspiciatis!
    </p>
  </PreviewA4>
);

export const AllowPrint = () => (
  <PreviewA4 print>
    <h1>Bonjour à tous</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, maxime ea
      exercitationem tempore error distinctio molestias suscipit expedita
      tenetur incidunt reprehenderit quisquam iste quasi rerum id nulla nemo?
      Nemo, perspiciatis!
    </p>
  </PreviewA4>
);
