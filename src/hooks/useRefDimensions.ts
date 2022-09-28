import { useEffect, useState } from "react";

const useRefDimensions = (ref: any, refresh: any) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleRef = () => {
      if (!ref.current) return;

      const { current } = ref;
      const { width, height } = current.getBoundingClientRect();

      setDimensions({ width: Math.round(width), height: Math.round(height) });
    };

    window.addEventListener("resize", handleRef);

    handleRef();

    return () => window.removeEventListener("resize", handleRef);
  }, [ref, refresh]);

  return dimensions;
};

export default useRefDimensions;
