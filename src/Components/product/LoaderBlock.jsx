import React from "react";

import ContentLoader from "react-content-loader";

function LoaderBlock() {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={640}
      viewBox="0 0 205 472"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="7" y="0" rx="0" ry="0" width="202" height="300" />
      <rect x="7" y="307" rx="0" ry="0" width="197" height="48" />
      <rect x="6" y="362" rx="0" ry="0" width="199" height="22" />
      <rect x="6" y="390" rx="0" ry="0" width="200" height="49" />
    </ContentLoader>
  );
}

export default LoaderBlock;
