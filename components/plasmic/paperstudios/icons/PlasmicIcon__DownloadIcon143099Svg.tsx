// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadIcon143099SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadIcon143099SvgIcon(
  props: DownloadIcon143099SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        d={
          "M8 7.047L9.216 5.89a1.054 1.054 0 011.478 0 1.024 1.024 0 010 1.46L7 11 3.306 7.35a1.024 1.024 0 010-1.46 1.054 1.054 0 011.478 0l1.171 1.157L6 2.032C6 1.462 6.423 1 7 1s1 .462 1 1.032v5.015zM12 12a1 1 0 01-1 1H3a1 1 0 010-2h8a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default DownloadIcon143099SvgIcon;
/* prettier-ignore-end */
