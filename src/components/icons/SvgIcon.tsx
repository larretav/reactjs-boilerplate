"use client";

import { IconSvgProps } from "@/types";

export const SvgIcon = ({ size = 24, width, height, children, viewBox = "0 0 24 24", ...props }: IconSvgProps) => {

  return (
    <svg viewBox={viewBox} width={width || size} height={height || size} {...props} >
      {children}
    </svg>
  );
};
